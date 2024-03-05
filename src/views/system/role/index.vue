<script lang="ts" setup>
import { ref, nextTick, onMounted,reactive } from 'vue'
import type { VxeTableInstance, VxeToolbarInstance } from 'vxe-table'
interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()
const toolbarRef = ref<VxeToolbarInstance>()
const tableData = ref<RowVO[]>([
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
])
nextTick(() => {
  // 将表格和工具栏进行关联
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
<template>
  <div class="container">
    <vxe-toolbar ref="toolbarRef" custom print></vxe-toolbar>
    <vxe-table
      :border="true"
      size="small"
      align="center"
      ref="tableRef"
      :print-config="{}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="id" title="id"></vxe-column>
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="role" title="Rate"></vxe-column>
    </vxe-table>
  </div>
</template>
<style lang="scss" scoped>
 .container{
    margin-top: 1em;
    background-color: #ffffff;
 }
</style>
