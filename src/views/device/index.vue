<script setup lang="ts">
import AxTable from "@/components/AxTable.vue";
import { fetchList } from "@/api/device";
import FormDialog from "@/components/FormDialog.vue";
import { ref } from "vue";
const formRef = ref<any>(null);
const { config, refresh } = fetchList();
const onSubmit = () => {};
</script>
<template>
  <AxTable v-model="config" :refresh="refresh">
    <template #button>
      <vxe-button status="primary" @click="formRef.openForm()" icon="vxe-icon-add">添加</vxe-button>
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
        <vxe-button status="primary" @click="formRef.openForm(row)">编辑</vxe-button>
        <vxe-button status="danger">删除</vxe-button>
      </template>
    </vxe-column>
  </AxTable>
  <FormDialog @confirm="onSubmit" ref="formRef">
    <template #default="{ data }">
      <ElFormItem label="名称" prop="nickname" :rules="[{ required: true, message: '请输入名称', trigger: 'blur' }]">
        <ElInput v-model="data.nickname" placeholder="请输入设备名称"></ElInput>
      </ElFormItem>
    </template>
  </FormDialog>
</template>
