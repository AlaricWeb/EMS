<script setup lang="ts" generic="T extends Menu">
import { ref } from "vue";
import type { FormInstance } from "element-plus";
import { push } from "@/api/system/menu";
import MenuSelect from "@/components/MenuSelect.vue";
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
  <ElDialog v-model="dailogVisible" draggable width="25%" :title="formData.id ? '修改' : '添加'">
    <ElForm :model="formData" ref="formRef" label-width="80px">
      <ElFormItem
        label="父节点"
        prop="parent_id"
        :rules="[
          {
            required: true,
            message: '请输入名称',
            trigger: 'blur',
          },
        ]">
        <MenuSelect v-model="formData.parent_id"></MenuSelect>
      </ElFormItem>
      <ElFormItem
        label="名称"
        prop="name"
        :rules="[
          {
            required: true,
            message: '请输入名称',
            trigger: 'blur',
          },
        ]">
        <ElInput placeholder="请输入名称" v-model="formData.name" style="width: 220px"></ElInput>
      </ElFormItem>
      <ElFormItem label="图标" prop="icon" :rules="[]">
        <ElInput placeholder="icon 图标" v-model="formData.icon" style="width: 220px"></ElInput>
      </ElFormItem>
      <ElFormItem label="路由" prop="route_path" :rules="[]">
        <ElInput placeholder="请输入路由地址" v-model="formData.route_path" style="width: 400px"></ElInput>
      </ElFormItem>
      <ElFormItem label="状态" prop="route_path" :rules="[]">
        <ElSwitch v-model="formData.status"></ElSwitch>
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
