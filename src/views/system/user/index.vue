<script lang="ts" setup>
import { ref, nextTick, onMounted, reactive } from "vue";
import type { VxeTableInstance, VxeToolbarInstance } from "vxe-table";
import { VXETable } from "vxe-table";
import request from "@/utils/request";
import Editor from "./Editor.vue";
//#region interface 部分
export interface User {
  id: number;
  account: string;
  nickname: string;
  sex: string;
  avatar: string;
  status: string;
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
  listring: Array<User>;
}
//#endregion
//#region table 部分
const tableRef = ref<VxeTableInstance<User>>();
const toolbarRef = ref<VxeToolbarInstance>();
const API_URL = "/system/user";
const PageConfig = reactive<PageConfig>({
  pager: {
    page: 1,
    limit: 15,
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
  const result = await request.get<any, { list: User[]; total: number }>(
    API_URL,
    { params: { ...PageConfig.pager } }
  );
  PageConfig.listring = result.list;
  PageConfig.loading = false;
  PageConfig.total = result.total;
};
const removeListing = async (row: User) => {
  const type = await VXETable.modal.confirm("您确定要删除该数据?");
  if (type === "confirm") {
    PageConfig.loading = true;
    await request.delete(`${API_URL}${row.id}`);
    PageConfig.loading = false;
    PageConfig.total -= 1;
    if (tableRef.value) {
      tableRef.value.remove(row);
    }
  }
};
//#endregion
//#region  表单部分
const formData = reactive<Partial<User>>({
  id: 0,
  account: "",
  sex: "",
  avatar: "",
  status: "",
  createTime: "",
  updateTime: "",
});
const dialogVisible = ref<boolean>(false);
const openForm = (data?: Partial<User>) => {
  dialogVisible.value = true;
  if (data) Object.assign(formData, data);
};
//#endregion
onMounted(() => {
  fetchListings();
});
</script>
<template>
  <div class="container">
    <!-- #region 表格 -->

    <div style="padding: 0 1em">
      <vxe-toolbar
        ref="toolbarRef"
        :refresh="{
          queryMethod: fetchListings,
        }"
        custom
        print
        export
      >
        <template #buttons>
          <vxe-button @click="openForm()" status="primary" icon="vxe-icon-add"
            >添加</vxe-button
          >
        </template>
      </vxe-toolbar>
    </div>
    <div style="height: calc(100vh - 210px)">
      <vxe-table
        :loading="PageConfig.loading"
        align="center"
        height="100%"
        show-overflow
        :border="true"
        ref="tableRef"
        :print-config="{}"
        :data="PageConfig.listring"
      >
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="id" title="id" width="60"></vxe-column>
        <vxe-column field="avatar" title="头像" width="80">
          <template #default="{ row }">
            <ElAvatar :src="row.avatar"></ElAvatar>
          </template>
        </vxe-column>
        <vxe-column field="nickname" title="昵称"></vxe-column>
        <vxe-column field="sex" width="80" title="性别"></vxe-column>
        <vxe-column field="role_name" title="角色"></vxe-column>
        <vxe-column field="account" title="账号"></vxe-column>
        <vxe-column field="created_at" title="创建时间"></vxe-column>
        <vxe-column field="updated_at" title="更新时间"></vxe-column>
        <vxe-column title="操作" width="200" render-cell="action">
          <template #default="{ row }">
            <vxe-button status="primary" @click="openForm(row)"
              >编辑</vxe-button
            >
            <vxe-button status="danger" @click="removeListing(row)"
              >删除</vxe-button
            >
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
      :layouts="[
        'PrevJump',
        'PrevPage',
        'Number',
        'NextPage',
        'NextJump',
        'Sizes',
        'FullJump',
        'Total',
      ]"
    >
    </vxe-pager>
    <!-- #endregion -->
    <!-- #region 表单 -->
    <Editor v-model="formData" v-model:visible="dialogVisible"></Editor>
    <!-- #endregion -->
  </div>
</template>
<style lang="scss" scoped>
.container {
  margin-top: 1em;
  background-color: #ffffff;
}
</style>
