<script setup lang="ts">
import AxTable from "@/components/AxTable.vue";
import { fetchList, created, remove } from "./index";
import FormDialog from "@/components/FormDialog.vue";
import { ref } from "vue";
const formRef = ref<any>(null);
const { config, refresh } = fetchList();
const AxTableRef = ref<any>(null);
const onSubmit = async (formData: User, close: () => void) => {
  await created(formData);
  refresh();
  close();
};
const removeList = async (row: User) => {
  const result = await remove(row);
  console.log(result);
  await AxTableRef.value.remove(row);
};
</script>
<template>
  <AxTable style="margin-top: 1em" v-model="config" ref="AxTableRef" :refresh="refresh">
    <template #button>
      <vxe-button status="primary" @click="formRef.openForm()" icon="vxe-icon-add">添加</vxe-button>
      <VxeInput v-model="config.pager.keyword" style="margin-left: 1em" clearable prefix-icon="vxe-icon-search">
      </VxeInput>
      <VxeButton status="primary" icon="vxe-icon-search" @click="refresh">搜索</VxeButton>
    </template>
    <vxe-column field="nickname" title="设备名称"></vxe-column>
    <vxe-column field="nickname" title="图片"></vxe-column>
    <vxe-column field="nickname" title="设备编号"></vxe-column>
    <vxe-column field="nickname" title="品牌型号"></vxe-column>
    <vxe-column field="nickname" title="单位名称"></vxe-column>
    <vxe-column field="nickname" title="设备状态"></vxe-column>
    <vxe-column field="nickname" title="使用人"></vxe-column>
    <vxe-column field="nickname" title="使用人电话"></vxe-column>
    <vxe-column field="nickname" title="使用部门"></vxe-column>
    <vxe-column field="nickname" title="短信提醒"></vxe-column>
    <vxe-column field="nickname" title="设备分类"></vxe-column>
    <vxe-column field="nickname" title="购买/租赁"></vxe-column>
    <vxe-column field="nickname" title="过保/到期"></vxe-column>
    <vxe-column field="nickname" title="放置区域"></vxe-column>
    <vxe-column field="nickname" title="备注"></vxe-column>
    <vxe-column field="nickname" title="下载附件"></vxe-column>
    <vxe-column field="nickname" title="设备码"></vxe-column>
    <vxe-column field="created_at" title="创建时间"></vxe-column>
    <vxe-column field="updated_at" title="更新时间"></vxe-column>
    <vxe-column title="操作" width="200" render-cell="action">
      <template #default="{ row }">
        <vxe-button status="primary" @click="formRef.openForm(row)">编辑</vxe-button>
        <vxe-button status="danger" @click="removeList(row)">删除</vxe-button>
      </template>
    </vxe-column>
  </AxTable>
  <FormDialog @confirm="onSubmit" ref="formRef">
    <template #title="{ data }">
      <span v-if="data.id">{{ data.nickname }}</span>
      <span v-else>添加设备</span>
    </template>
    <template #default="{ data }">
      <ElFormItem label="名称" prop="nickname" :rules="[{ required: true, message: '请输入名称', trigger: 'blur' }]">
        <ElInput v-model="data.nickname" placeholder="请输入设备名称"></ElInput>
      </ElFormItem>
    </template>
  </FormDialog>
</template>
