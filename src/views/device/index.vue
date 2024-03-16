<script setup lang="ts">
import AxTable from "@/components/AxTable.vue";
import { fetchList, modify } from "@/api/device";
import FormDialog from "@/components/FormDialog.vue";
const { config, refresh } = fetchList();
const { FormData, formref } = modify();
const openForm = () => {
  formref.open = true;
};
</script>
<template>
  <AxTable v-model="config" :refresh="refresh">
    <template #button>
      <vxe-button status="primary" @click="formref.open()" icon="vxe-icon-add">添加</vxe-button>
      <VxeInput v-model="config.pager.keyword" style="margin-left: 1em" clearable prefix-icon="vxe-icon-search">
      </VxeInput>
      <VxeButton status="primary" icon="vxe-icon-search" @click="refresh">搜索</VxeButton>
    </template>
    <vxe-column type="seq" width="60"></vxe-column>
    <vxe-column field="id" title="id" width="60"></vxe-column>
    <vxe-column field="nickname" title="名称"></vxe-column>
    <vxe-column field="desc" title="描述"></vxe-column>
    <vxe-column field="created_at" title="创建时间"></vxe-column>
    <vxe-column field="updated_at" title="更新时间"></vxe-column>
    <vxe-column title="操作" width="200" render-cell="action">
      <template #default="{ row }">
        <vxe-button status="primary">编辑</vxe-button>
        <vxe-button status="danger">删除</vxe-button>
      </template>
    </vxe-column>
  </AxTable>
  <FormDialog v-model="config" ref="formref" :refresh="refresh"></FormDialog>
</template>
