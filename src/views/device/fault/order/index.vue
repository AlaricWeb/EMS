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
  <div style="background-color: #fff; margin-top: 0.5em">
    <vxe-button status="primary" @click="formRef.openForm()" icon="vxe-icon-add">新建工单</vxe-button>
    <vxe-button status="primary" @click="formRef.openForm()" style="margin-left: 1em" icon="vxe-icon-add"
      >补单</vxe-button
    >
    <VxeInput v-model="config.pager.keyword" style="margin-left: 1em" clearable prefix-icon="vxe-icon-search">
    </VxeInput>
    <VxeButton status="primary" icon="vxe-icon-search" @click="refresh">搜索</VxeButton>
  </div>

  <AxTable v-model="config" ref="AxTableRef" :refresh="refresh">
    <template #button>
      <vxe-radio-group v-model="config.pager.status">
        <vxe-radio-button label="1" content="全部"></vxe-radio-button>
        <vxe-radio-button label="2" content="待派单"></vxe-radio-button>
        <vxe-radio-button label="3" content="未接单"></vxe-radio-button>
        <vxe-radio-button label="3" content="处理中"></vxe-radio-button>
        <vxe-radio-button label="3" content="待确认"></vxe-radio-button>
        <vxe-radio-button label="3" content="已完成"></vxe-radio-button>
        <vxe-radio-button label="3" content="已取消"></vxe-radio-button>
        <vxe-radio-button label="3" content="已经驳回"></vxe-radio-button>
      </vxe-radio-group>
    </template>
    <vxe-column field="nickname" title="工单编号"></vxe-column>
    <vxe-column field="nickname" title="单位名称"></vxe-column>
    <vxe-column field="nickname" title="报修区域"></vxe-column>
    <vxe-column field="nickname" title="姓名"></vxe-column>
    <vxe-column field="nickname" title="联系电话"></vxe-column>
    <vxe-column field="nickname" title="故障类型"></vxe-column>
    <vxe-column field="nickname" title="故障描述"></vxe-column>
    <vxe-column field="nickname" title="报修时间"></vxe-column>
    <vxe-column field="nickname" title="设备名称"></vxe-column>
    <vxe-column field="nickname" title="设备编号"></vxe-column>
    <vxe-column field="nickname" title="技术员"></vxe-column>
    <vxe-column field="created_at" title="创建时间"></vxe-column>
    <vxe-column field="updated_at" title="更新时间"></vxe-column>
    <vxe-column title="操作" width="400" render-cell="action">
      <template #default="{ row }">
        <vxe-button status="primary" @click="formRef.openForm(row)"> 派单</vxe-button>
        <vxe-button status="primary" @click="formRef.openForm(row)"> 驳回</vxe-button>
        <vxe-button status="primary" @click="formRef.openForm(row)">编辑</vxe-button>
        <vxe-button status="primary" @click="formRef.openForm(row)">详情</vxe-button>
        <vxe-button status="danger" @click="removeList(row)">删除</vxe-button>
      </template>
    </vxe-column>
  </AxTable>
  <FormDialog @confirm="onSubmit" ref="formRef">
    <template #title="{ data }">
      <div style="padding: 1em; display: flex; justify-content: space-between">
        <div>添加设备</div>
        <vxe-radio-group v-model="data.has_device">
          <vxe-radio-button label="1" content="有设备"></vxe-radio-button>
          <vxe-radio-button label="2" content="无设备"></vxe-radio-button>
        </vxe-radio-group>
        <div></div>
      </div>
    </template>
    <template #default="{ data }">
      <ElFormItem prop="id" label="客户类型" :rules="[]">
        <ElRadioGroup v-model="data.id">
          <ElRadioButton label="单位客户" value="New York"></ElRadioButton>
          <ElRadioButton label="个人客户" value="New York"></ElRadioButton>
        </ElRadioGroup>
      </ElFormItem>
      <ElFormItem prop="id" label="报修单位" :rules="[]"> </ElFormItem>
      <ElFormItem prop="id" label="报修区域" :rules="[]"> </ElFormItem>
      <ElFormItem prop="id" label="姓名" :rules="[]"> </ElFormItem>
      <ElFormItem prop="id" label="故障类型" :rules="[]"> </ElFormItem>
      <ElFormItem prop="id" label="故障类型" :rules="[]"> </ElFormItem>
      <ElFormItem prop="id" label="故障描述" :rules="[]"> </ElFormItem>
      <ElFormItem prop="id" label="上传图片" :rules="[]"> </ElFormItem>
      <ElFormItem prop="id" label="报修部门" :rules="[]"> </ElFormItem>
      <ElFormItem prop="id" label="详细地址" :rules="[]"> </ElFormItem>
      <ElFormItem prop="id" label="报修电话" :rules="[]"> </ElFormItem>
      <ElFormItem prop="id" label="维修方式" :rules="[]">
        <ElRadioGroup v-model="data.id">
          <ElRadioButton label="立即维修" value="New York"></ElRadioButton>
          <ElRadioButton label="预约维修" value="New York"></ElRadioButton>
        </ElRadioGroup>
      </ElFormItem>
      <ElFormItem prop="id" label="响应等级" :rules="[]">
        <ElRadioGroup v-model="data.id">
          <ElRadioButton label="一般" value="New York"></ElRadioButton>
          <ElRadioButton label="紧急" value="New York"></ElRadioButton>
        </ElRadioGroup>
      </ElFormItem>
      <ElFormItem prop="id" label="派单模式" :rules="[]"> </ElFormItem>
    </template>
  </FormDialog>
</template>
