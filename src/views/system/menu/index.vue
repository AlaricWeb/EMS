<script lang="ts" setup>
import { ref, shallowRef, nextTick, onMounted, reactive, toRaw, computed } from "vue";
import type { VxeTableInstance, VxeToolbarInstance, VxeTablePropTypes } from "vxe-table";
import { VXETable } from "vxe-table";
import request from "@/utils/request";
import Editor from "./Editor.vue";
//#region  interface
export interface Menu {
  parent_id: number;
  route_path: string;
  name: string;
  desc: string;
  id: number;
  createTime: string;
  updateTime: string;
}
export interface Page {
  page: number;
  limit: number;
}
export interface PageConfig {
  pager: Page;
  total: number;
  loading: boolean;
  listring: Array<Menu>;
}
// #endregion
//#region  表格
const tableRef = ref<VxeTableInstance<Menu>>();
const toolbarRef = ref<VxeToolbarInstance>();
const PageConfig = reactive<PageConfig>({
  pager: {
    page: 1,
    limit: 10,
  },
  loading: false,
  total: 0,
  listring: [],
});
nextTick(() => {
  // 将表格和工具栏进行关联
  const $table = tableRef.value;
  const $toolbar = toolbarRef.value;
  if ($table && $toolbar) {
    $table.connect($toolbar);
  }
});
const fetchListings = async () => {
  PageConfig.loading = true;
  const result = await request.get<any, { list: Menu[]; total: number }>("/system/menu", { params: { ...PageConfig.pager } });
  PageConfig.listring = result.list;
  PageConfig.loading = false;
  PageConfig.total = result.total;
};
const removeListing = async (row: Menu) => {
  const type = await VXETable.modal.confirm("您确定要删除该数据?");
  if (type === "confirm") {
    PageConfig.loading = true;
    await request.delete(`/system/menu/${row.id}`);
    PageConfig.loading = false;
    PageConfig.total -= 1;
    if (tableRef.value) {
      tableRef.value.remove(row);
    }
  }
};

const treeConfig = reactive<VxeTablePropTypes.TreeConfig<Menu>>({
  transform: true,
  rowField: "id",
  parentField: "parent_id",
  lazy: true,
  hasChild: "has_children",
  async loadMethod({ row }) {
    // 异步加载子节点
    const result = await request.get<any, { list: any[] }>("/system/menu", {
      params: { parent_id: row.id },
    });
    return result.list;
  },
});
//#endregion
//#region 表单部分
const formVisible = shallowRef<boolean>(false);
const formData = reactive<Partial<Menu>>({});

const openForm = (data?: Menu) => {
  Object.keys(formData).forEach((key) => {
    delete formData[key];
  });
  data && Object.assign(formData, data);
  formVisible.value = true;
};
//#endregion
onMounted(() => {
  fetchListings();
});
</script>
<template>
  <div class="container">
    <!-- #region  表格部分-->
    <div style="padding: 0 1em">
      <vxe-toolbar
        ref="toolbarRef"
        :refresh="{
          queryMethod: fetchListings,
        }"
        custom
        print
        export>
        <template #buttons>
          <vxe-button @click="openForm()" status="primary" icon="vxe-icon-add"> 添加 </vxe-button>
        </template>
      </vxe-toolbar>
    </div>
    <div style="height: calc(100vh - 210px)">
      <vxe-table :tree-config="treeConfig" :loading="PageConfig.loading" align="center" height="100%" show-overflow :border="true" ref="tableRef" :print-config="{}" :data="PageConfig.listring">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="id" title="id" width="60"></vxe-column>
        <vxe-column align="left" field="name" title="菜单名称" tree-node></vxe-column>
        <vxe-column field="route_path" title="路由"></vxe-column>
        <vxe-column field="desc" title="描述"></vxe-column>
        <vxe-column field="created_at" title="创建时间"></vxe-column>
        <vxe-column field="updated_at" title="更新时间"></vxe-column>
        <vxe-column title="操作" width="200" render-cell="action">
          <template #default="{ row }">
            <vxe-button status="primary" @click="openForm(row)">编辑</vxe-button>
            <vxe-button status="danger" @click="removeListing(row)">删除</vxe-button>
          </template>
        </vxe-column>
      </vxe-table>
    </div>
    <vxe-pager
      :loading="PageConfig.loading"
      v-model:current-page="PageConfig.pager.page"
      v-model:page-size="PageConfig.pager.limit"
      :total="PageConfig.total"
      @page-change="fetchListings"
      :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
    </vxe-pager>
    <!-- #endregion -->
    <Editor v-model:visible="formVisible" v-model="formData"></Editor>
  </div>
</template>
<style lang="scss" scoped>
.container {
  margin-top: 1em;
  background-color: #ffffff;
}
</style>
