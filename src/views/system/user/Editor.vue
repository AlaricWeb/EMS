<script setup lang="ts" generic="T extends User">
import { ref } from "vue";
import type { FormInstance } from "element-plus";
import { push, type User } from "@/api/system/user";
import RoleSelect from "@/components/RoleSelect.vue";
const formRef = ref<FormInstance>();
const dailogVisible = defineModel<boolean>("visible", { default: false });
const formData = defineModel<Partial<T>>({ required: true });

const onSubmit = async () => {
  const validate = await formRef.value?.validate();
  if (!validate) return false;
  if (formData.value.id) {
  }
  await push(formData.value);
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
        label="昵称"
        prop="nickname"
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
      <ElFormItem
        label="账号"
        prop="account"
        :rules="[
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur',
          },
        ]"
      >
        <ElInput
          v-model="formData.account"
          placeholder="请输入账号"
          style="width: 220px"
        />
      </ElFormItem>
      <ElFormItem
        label="角色"
        prop="system_role_id"
        :rules="[
          {
            required: true,
            message: '请选择角色',
            trigger: 'change',
          },
        ]"
      >
        <RoleSelect v-model="formData.system_role_id"></RoleSelect>
      </ElFormItem>
      <ElFormItem
        label="密码"
        prop="password"
        :rules="[
          // {
          //   required: true,
          //   message: '请输入登录密码',
          //   trigger: 'blur',
          // },
        ]"
      >
        <ElInput
          v-model="formData.password"
          placeholder="请输入密码"
          type="password"
          style="width: 250px"
        ></ElInput>
      </ElFormItem>
      <ElFormItem
        label="确认密码"
        prop="confirm_password"
        :rules="[
          // {
          //   required: true,
          //   message: '请输入确认密码',
          //   trigger: 'blur',
          // },
        ]"
      >
        <ElInput
          v-model="formData.confirm_password"
          placeholder="请输入密码"
          type="password"
          style="width: 250px"
        ></ElInput>
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
