import { customRef } from "vue";
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

export function FormReactive<T extends Object>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        console.log(value);

        return value;
      },
      set(newValue) {
        console.log(newValue);
        value = newValue;
      },
    };
  });
}
