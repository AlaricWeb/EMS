<script setup lang="ts" generic="T">
import { ref } from "vue";
import type { FormInstance, CascaderProps } from "element-plus";
import type { Menu } from "./index.vue";
import request from "@/utils/request";
const formRef = ref<FormInstance>();
const dailogVisible = defineModel<boolean>("visible", { default: false });
const formData = defineModel<Partial<Menu>>({ required: true });
const cascaderProps: CascaderProps = {
  lazy: true,
  value: "id",
  label: "name",
  leaf: "has_children",
  checkStrictly: true,
  emitPath: false,
  lazyLoad(node, resolve) {
    request
      .get<any, { list: any[] }>("/system/menu", {
        params: { parent_id: node.value },
      })
      .then((res) => {
        const result = res.list.map((res) => {
          res.has_children = !res.has_children;
          return res;
        });
        if (!node.level) {
          result.unshift({
            id: 0,
            name: "顶级菜单",
            has_children: true,
          });
        }
        resolve(result);
      });
  },
};
const onSubmit = async () => {
  const validate = await formRef.value?.validate();
  if (!validate) return false;

  if (formData.value?.id) {
    await request.put(`/system/menu/${formData.value.id}`, formData.value);
  } else {
    await request.post("system/menu", formData.value);
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
        label="菜单名称"
        prop="name"
        :rules="[
          {
            required: true,
            message: '请输入菜单名称',
            trigger: 'blur',
          },
        ]"
      >
        <ElInput
          style="width: 250px"
          v-model="formData.name"
          placeholder="请输入菜单名称"
        ></ElInput>
      </ElFormItem>
      <ElFormItem
        :rules="[
          {
            required: true,
            message: '请选择父节点',
            trigger: 'blur',
          },
        ]"
        label="父节点"
        prop="parent_id"
      >
        <ElCascader
          :props="cascaderProps"
          v-model="formData.parent_id"
          placeholder="请选择父节点"
        >
        </ElCascader>
      </ElFormItem>
      <ElFormItem
        label="路由"
        :rules="[
          {
            required: true,
            message: '请输入路由',
            trigger: 'blur',
          },
        ]"
        prop="route_path"
      >
        <ElInput
          style="width: 250px"
          v-model="formData.route_path"
          placeholder="请输入路由"
        ></ElInput>
      </ElFormItem>
      <ElFormItem label="描述" prop="desc">
        <ElInput
          type="textarea"
          :rows="5"
          resize="none"
          placeholder="请输入描述"
          show-word-limit
          :maxlength="150"
          v-model="formData.desc"
        >
        </ElInput>
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
