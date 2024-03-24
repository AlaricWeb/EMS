<script setup lang="ts" generic="T">
import type { CascaderProps, CascaderNode, CascaderValue } from "element-plus";
import { fetchList, type Menu } from "@/api/system/menu";
//@ts-ignore
const model: CascaderValue = defineModel<T>({
  required: true,
});
const lazyLoad = (node: CascaderNode, resolve) => {
  const { level, data } = node;
  //@ts-ignore
  const parent_id = data.id || 0;
  fetchList({
    parent_id,
  }).then(({ list }) => {
    list.map((item) => {
      item.has_children = !item.has_children;
      return item;
    });
    if (!level)
      //@ts-ignore
      list.unshift({
        name: "顶级",
        has_children: true,
        id: 0,
      });
    //@ts-ignore
    resolve(list);
  });
};
const cascaderProps: CascaderProps = {
  label: "name",
  value: "id",
  checkStrictly: true,
  emitPath: false,
  leaf: "has_children",
  lazy: true,
  lazyLoad,
};
</script>
<template>
  <ElCascader :props="cascaderProps" v-model="model" />
</template>
