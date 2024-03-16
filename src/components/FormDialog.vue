<script setup lang="ts" generic="T extends object">
import { ref } from "vue";
import type { FormInstance } from "element-plus";
const model = defineModel<T>("modelValue", { required: true, default: {} });
const visible = defineModel<boolean>("visible", { default: false });
const open = () => (visible.value = true);
const formRef = ref<FormInstance>();
defineExpose<{
  open: () => void;
}>({
  open,
});
const emits = defineEmits(["confirm"]);
const confirm = async () => {
  const validate = await formRef.value?.validate();
  emits("confirm", validate);
};
</script>
<template>
  <ElDialog v-model="visible" width="30%" title="添加">
    <ElForm :model="model" label-width="80">
      <slot></slot>
    </ElForm>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="confirm"> 确认提交 </el-button>
      </div>
    </template>
  </ElDialog>
</template>
