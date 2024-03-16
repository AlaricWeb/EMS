<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
const visible = ref<boolean>(false);
const formData = reactive<{
  id?: number;
  [props: string]: any;
}>({});
const formRef = ref<FormInstance>();
const emits = defineEmits(["confirm"]);
const openForm = <T extends object>(data?: T) => {
  visible.value = true;
  for (const key in formData) {
    delete formData[key];
  }
  formRef.value?.resetFields();
  if (data) {
    Object.assign(formData, data);
  }
};
const close = () => (visible.value = false);
const confirm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      emits("confirm", close);
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
defineExpose({
  openForm,
  close,
});
</script>
<template>
  <ElDialog v-model="visible" width="30%" title="添加">
    <ElForm ref="formRef" :model="formData" label-width="80">
      <slot :data="formData"></slot>
    </ElForm>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click.="confirm(formRef)"> 确认提交 </el-button>
      </div>
    </template>
  </ElDialog>
</template>
