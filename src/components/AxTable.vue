<script lang="ts" setup generic="T">
import { ref, nextTick, onMounted, reactive } from "vue";
import type { VxeTableInstance, VxeToolbarInstance } from "vxe-table";
const props = defineProps<{
  refresh: () => void;
  treeConfig?: any;
}>();

//#region table 部分
const tableRef = ref<VxeTableInstance<T>>();
const toolbarRef = ref<VxeToolbarInstance>();
const model = defineModel<PageConfig<T>>({ required: true });
const remove = (row: T) => {
  if (!tableRef.value) return;
  tableRef.value.remove(row);
};
//#endregion
onMounted(() => {
  nextTick(() => {
    // 将表格和工具栏进行关联
    const $table = tableRef.value;
    const $toolbar = toolbarRef.value;
    if ($table && $toolbar) {
      $table.connect($toolbar);
    }
    props.refresh();
  });
});
defineExpose({
  remove,
});
</script>
<template>
  <div class="container">
    <!-- #region 表格 -->
    <vxe-toolbar
      ref="toolbarRef"
      class-name="toolbar"
      perfect
      :refresh="{ queryMethod: refresh }"
      custom
      print
      export>
      <template #buttons>
        <slot name="button"></slot>
      </template>
    </vxe-toolbar>
    <div class="table-content">
      <vxe-table
        :loading="model.loading"
        :tree-config="treeConfig"
        align="center"
        show-overflow
        show-header-overflow
        :border="true"
        ref="tableRef"
        :print-config="{}"
        :data="model.listing">
        <vxe-column type="seq" width="60"></vxe-column>
        <slot></slot>
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
      <vxe-pager
        :loading="model.loading"
        v-model:current-page="model.pager.page"
        v-model:page-size="model.pager.limit"
        :total="model.total"
        @page-change="refresh"
        :layouts="[
          'PrevJump',
          'PrevPage',
          'Number',
          'NextPage',
          'NextJump',
          'Sizes',
          'FullJump',
          'Total',
        ]">
      </vxe-pager>
    </div>
    <!-- #endregion -->
  </div>
</template>
<style lang="scss" scoped>
.container {
  .toolbar {
    background-color: #fff;
    border: none;
  }
}
</style>
