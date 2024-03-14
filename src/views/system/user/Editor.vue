<script setup lang="ts" generic="T extends User">
import { ref } from "vue";
import type { FormInstance } from "element-plus";
import type { User } from "./index.vue";
import request from "@/utils/request";
const formRef = ref<FormInstance>();
const dailogVisible = defineModel<boolean>("visible", { default: false });
const formData = defineModel<Partial<T>>({ required: true });
const API_URL = "/system/user";
const onSubmit = async () => {
  const validate = await formRef.value?.validate();
  if (!validate) return false;
  if (formData.value?.id) {
    await request.put(`${API_URL}${formData.value.id}`, formData.value);
  } else {
    await request.post(API_URL, formData.value);
  }
  dailogVisible.value = false;
};
</script>
<template>
  <ElDialog
    v-model="dailogVisible"
    width="500px"
    :title="formData.id ? '修改' : '添加'"
  >
    <ElForm :model="formData" ref="formRef" label-width="80px">
      <ElFormItem
        label="昵称"
        prop="name"
        :rules="[
          {
            required: true,
            message: '请输入昵称',
            trigger: 'blur',
          },
        ]"
      >
        <ElInput
          v-model="formData.nickname"
          placeholder="请输入昵称"
          style="width: 220px"
        />
      </ElFormItem>
    </ElForm>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dailogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit"> 确认提交 </el-button>
      </div>
    </template>
  </ElDialog>
</template>
