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

interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
  [props: string]: any;
}

export function convertToTree<T extends object>(data: T[], id: string = "id", pid: string = "pid"): T[] {
  const build: { [key: number]: T } = {};
  // 构建映射
  data.forEach((item) => {
    build[item[id]] = { ...item, children: [] };
  });

  const tree: T[] = [];
  // 构建树
  data.forEach((item) => {
    if (!item[pid]) {
      tree.push(build[item[id]]);
    } else {
      // @ts-ignore
      build[item[pid]].children?.push(build[item[id]]);
    }
  });

  return tree;
}
export const clear = <T extends object>(obj: T) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      delete obj[key];
    }
  }
  return obj;
};
