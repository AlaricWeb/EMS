<script setup lang="ts" generic="T extends Role">
import { ref } from "vue";
import type { FormInstance } from "element-plus";
import { type Role } from "@/api/system/role";
const formRef = ref<FormInstance>();
const dailogVisible = defineModel<boolean>("visible", { default: false });
const formData = defineModel<Partial<T>>({ required: true });
const onSubmit = async () => {
  const validate = await formRef.value?.validate();
  if (!validate) return false;
  dailogVisible.value = false;
};
</script>
<template>
  <ElDialog
    v-model="dailogVisible"
    width="450px"
    :title="formData.id ? '修改' : '添加'"
  >
    <ElForm :model="formData" ref="formRef" label-width="80px">
      <ElFormItem
        label="角色名称"
        prop="name"
        :rules="[
          {
            required: true,
            message: '请输入角色名称',
            trigger: 'blur',
          },
        ]"
      >
        <ElInput
          v-model="formData.name"
          placeholder="请输入角色名称"
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
