<script lang="ts" setup>
import { ref, nextTick, onMounted, reactive } from "vue";
import type { VxeTableInstance, VxeToolbarInstance } from "vxe-table";
import { fetch, fetchList, remove } from "@/api/system/menu";
import Editor from "./Editor.vue";
import { useDialogForm } from "@/utils/tools";
//#region table 部分
const tableRef = ref<VxeTableInstance<Menu>>();
const toolbarRef = ref<VxeToolbarInstance>();
const PageConfig = reactive<PageConfig<Menu>>({
  pager: { page: 1, limit: 15 },
  loading: false,
  total: 0,
  listing: [],
});
const refresh = fetch(PageConfig);
const removeListing = async (row: Menu) => {
  const result = await remove(row, PageConfig);
  if (!result) return;
  if (tableRef.value) {
    tableRef.value.remove(row);
  }
};
const load_children = async ({ row }) => {
  const parent_id = row.id || 0;
  //@ts-ignore
  const { list } = await fetchList({ parent_id });
  return list;
};
const treeConfig = {
  transform: true,
  rowField: "id",
  parentField: "parent_id",
  lazy: true,
  hasChild: "has_children",
  loadMethod: load_children,
};
//#endregion
//#region  表单部分
const { openDialog: openForm, visible, data: formData } = useDialogForm<Partial<Menu>>();
//#endregion
onMounted(() => {
  nextTick(() => {
    // 将表格和工具栏进行关联
    const $table = tableRef.value;
    const $toolbar = toolbarRef.value;
    if ($table && $toolbar) {
      $table.connect($toolbar);
    }
  });
  refresh();
});
</script>
<template>
  <div class="container">
    <!-- #region 表格 -->
    <vxe-toolbar ref="toolbarRef" class-name="toolbar" perfect :refresh="{ queryMethod: refresh }" custom print export>
      <template #buttons>
        <vxe-button @click="openForm()" status="primary" icon="vxe-icon-add">添加</vxe-button>
        <VxeInput v-model="PageConfig.pager.keyword" style="margin-left: 1em" clearable prefix-icon="vxe-icon-search">
        </VxeInput>
        <VxeButton status="primary" icon="vxe-icon-search" @click="refresh">搜索</VxeButton>
      </template>
    </vxe-toolbar>
    <div style="height: calc(100vh - 210px)">
      <vxe-table
        :tree-config="treeConfig"
        :loading="PageConfig.loading"
        align="center"
        height="100%"
        show-overflow
        :border="true"
        ref="tableRef"
        :print-config="{}"
        :data="PageConfig.listing">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="id" title="id" width="60"></vxe-column>
        <vxe-column field="name" align="left" title="名称" tree-node></vxe-column>
        <vxe-column field="desc" title="描述"></vxe-column>
        <vxe-column field="created_at" title="创建时间"></vxe-column>
        <vxe-column field="updated_at" title="更新时间"></vxe-column>
        <vxe-column title="操作" width="200" render-cell="action">
          <template #default="{ row }">
            <vxe-button status="primary" @click="openForm(row)">编辑</vxe-button>
            <vxe-button status="danger" @click="removeListing(row)">删除</vxe-button>
          </template>
        </vxe-column>
        <template #loading>
          <ElIcon class="is-loading">
            <svg class="circular" viewBox="0 0 20 20">
              <g class="path2 loading-path" stroke-width="0" style="animation: none; stroke: none">
                <circle r="3.375" class="dot1" rx="0" ry="0" />
                <circle r="3.375" class="dot2" rx="0" ry="0" />
                <circle r="3.375" class="dot4" rx="0" ry="0" />
                <circle r="3.375" class="dot3" rx="0" ry="0" />
              </g>
            </svg>
          </ElIcon>
        </template>
      </vxe-table>
    </div>
    <vxe-pager
      :loading="PageConfig.loading"
      v-model:current-page="PageConfig.pager.page"
      v-model:page-size="PageConfig.pager.limit"
      :total="PageConfig.total"
      @page-change="refresh"
      :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
    </vxe-pager>
    <!-- #endregion -->
    <!-- #region 表单 -->
    <Editor @complete="refresh()" v-model="formData" v-model:visible="visible"></Editor>
    <!-- #endregion -->
  </div>
</template>
<style lang="scss" scoped>
.container {
  margin-top: 1em;
  background-color: #ffffff;
}
.toolbar {
  padding: 0.5em 1em;
  background-color: #ffffff;
}
</style>
@/typings/page
