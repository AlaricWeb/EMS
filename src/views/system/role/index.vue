<script lang="ts" setup>
import { ref, nextTick, onMounted, reactive } from 'vue'
import type { VxeTableInstance, VxeToolbarInstance } from 'vxe-table'
import { VXETable } from 'vxe-table'
import request from "@/utils/request";
import Form from "@/views/system/role/Form.vue"
export interface Role {
  name: string,
  desc: string
  id: number,
  createTime: string,
  updateTime: string
}
export interface Page {
  page: number
  limit: number
}
export interface PageConfig {
  pager: Page,
  total: number,
  loading: boolean
  listring: Array<Role>
}
const tableRef = ref<VxeTableInstance<Role>>()
const toolbarRef = ref<VxeToolbarInstance>()

const PageConfig = reactive<PageConfig>({
  pager: {
    page: 1,
    limit: 10
  },
  loading: false,
  total: 0,
  listring: []
})
nextTick(() => {
  // 将表格和工具栏进行关联
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})

const fetchListings = async () => {
  PageConfig.loading = true;
  const result = await request.get<any, { list: Role[], total: number }>('/system/role', { params: { ...PageConfig.pager } });
  PageConfig.listring = result.list;
  PageConfig.loading = false;
  PageConfig.total = result.total;
}
const removeListing = async (row: Role) => {
  const type = await VXETable.modal.confirm('您确定要删除该数据?')
  if (type === 'confirm') {
    PageConfig.loading = true;
    await request.delete(`/system/role/${row.id}`);
    PageConfig.loading = false;
    PageConfig.total -= 1;
    if (tableRef.value) {
      tableRef.value.remove(row)
    }
  }
}
const form = reactive<Role>({
  id: 0,
  name: '',
  desc: '',
  updateTime: '',
  createTime: ''
})
onMounted(() => {
  fetchListings();
})
</script>
<template>
  <div class="container">

    <div style="padding: 0 1em;">
      <vxe-toolbar ref="toolbarRef" :refresh="{
        queryMethod: fetchListings
      }" custom print export>
        <template #buttons>
          <Form title="添加" v-model="form"> <vxe-button status="primary" icon="vxe-icon-add">添加</vxe-button></Form>
        </template>
      </vxe-toolbar>
    </div>
    <div style="height: calc(100vh - 210px);">
      <vxe-table :loading="PageConfig.loading" align="center" height="100%" show-overflow :border="true" ref="tableRef"
        :print-config="{}" :data="PageConfig.listring">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="id" title="id" width="60"></vxe-column>
        <vxe-column field="name" title="角色名称"></vxe-column>
        <vxe-column field="desc" title="角色描述"></vxe-column>
        <vxe-column field="created_at" title="创建时间"></vxe-column>
        <vxe-column field="updated_at" title="更新时间"></vxe-column>
        <vxe-column title="操作" width="200" render-cell="action">
          <template #default="{ row }">
            <vxe-button status="primary">编辑</vxe-button>
            <vxe-button status="danger" @click="removeListing(row)">删除</vxe-button>
          </template>
        </vxe-column>
      </vxe-table>
    </div>
    <vxe-pager :loading="PageConfig.loading" v-model:current-page="PageConfig.pager.page"
      v-model:page-size="PageConfig.pager.limit" :total="PageConfig.total" @page-change="fetchListings"
      :layouts="['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total']">
    </vxe-pager>
  </div>
</template>
<style lang="scss" scoped>
.container {
  margin-top: 1em;
  background-color: #ffffff;
}
</style>
