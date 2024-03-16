<script setup lang="ts" generic="T extends Role">
import { ref } from "vue";
import type { FormInstance } from "element-plus";
import { push } from "@/api/system/role";
import MenuPanel from "@/components/MenuPanel.vue";
const formRef = ref<FormInstance>();
const dailogVisible = defineModel<boolean>("visible", { default: true });
const formData = defineModel<Partial<T>>({ required: true });
const emit = defineEmits(["complete"]);
const onSubmit = async () => {
  const validate = await formRef.value?.validate();
  if (!validate) return false;
  const result = await push(formData.value);
  dailogVisible.value = false;
  emit("complete", result);
};
</script>
<template>
  <ElDialog v-model="dailogVisible" draggable width="40%" :title="formData.id ? '修改' : '添加'">
    <ElForm :model="formData" ref="formRef" label-width="80px">
      <ElFormItem
        label="名称"
        prop="name"
        :rules="[
          {
            required: true,
            message: '请输入昵称',
            trigger: 'blur',
          },
        ]">
        <ElInput placeholder="请输入角色名称" v-model="formData.name" style="width: 220px"></ElInput>
      </ElFormItem>
      <ElFormItem
        label="权限"
        prop="system_menu_ids"
        :rules="[
          {
            required: true,
            message: '请选择权限',
            trigger: 'blur',
          },
        ]">
        <MenuPanel v-model="formData.system_menu_ids"></MenuPanel>
      </ElFormItem>
      <ElFormItem label="描述" prop="desc" :rules="[]">
        <ElInput
          type="textarea"
          v-model="formData.desc"
          show-word-limit
          resize="none"
          placeholder="请输入角色描述"
          :maxlength="600"
          :rows="10"></ElInput>
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
