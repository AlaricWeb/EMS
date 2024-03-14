import { reactive, ref, nextTick, onMounted, type Ref } from "vue";

export function deepCopy<T extends object>(source: T) {
  const newObj = {};
  const obj = Object.keys(source);
  for (const key of obj) {
    if (typeof source[key] === "object") {
      newObj[key] = deepCopy(source[key]);
    }
    newObj[key] = source[key];
  }
  return newObj;
}
export function useDialogForm<T extends object>(config: T = {} as T) {
  const data = reactive(config);
  const visible = ref<boolean>(false);
  const openDialog = async (oldData?: T) => {
    for (const key in data) {
      delete data[key];
    }
    visible.value = true;
    if (oldData) Object.assign(data, oldData);
  };
  return {
    openDialog,
    visible,
    data,
  };
}
