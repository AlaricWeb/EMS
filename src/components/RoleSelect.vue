<script setup lang="ts">
import { fetch, type Role } from "@/api/system/role";
import type { PageConfig } from "@/typing/page";
import { onMounted, reactive } from "vue";
const model = defineModel<any>();
withDefaults(
  defineProps<{
    multiple?: boolean;
  }>(),
  { multiple: false }
);
const config = reactive<PageConfig<Role>>({
  pager: {
    page: 1,
    limit: 10,
  },
  loading: false,
  total: 0,
  listing: [],
});
const search = (query: string) => {
  config.pager.keyword = query;
  refresh();
};
const refresh = fetch(config);
onMounted(() => refresh());
</script>
<template>
  <ElSelect
    v-model="model"
    filterable
    remote
    clearable
    collapse-tags
    :multiple="multiple"
    :loading="config.loading"
    style="width: 220px; margin-right: 1em"
    reserve-keyword
    placeholder="请选择角色"
    :remote-method="search"
  >
    <ElOption
      v-for="item in config.listing"
      :key="item.id"
      :label="item.name"
      :value="item.id"
    ></ElOption>
    <template #loading>
      <ElIcon class="is-loading">
        <svg class="circular" viewBox="0 0 20 20">
          <g
            class="path2 loading-path"
            stroke-width="0"
            style="animation: none; stroke: none"
          >
            <circle r="3.375" class="dot1" rx="0" ry="0" />
            <circle r="3.375" class="dot2" rx="0" ry="0" />
            <circle r="3.375" class="dot4" rx="0" ry="0" />
            <circle r="3.375" class="dot3" rx="0" ry="0" />
          </g>
        </svg>
      </ElIcon>
    </template>
    <template #footer>
      <el-pagination
        layout="prev, pager, next"
        :total="config.total"
        :page-count="5"
        v-model:page-size="config.pager.limit"
        v-model:current-page="config.pager.page"
        @change="refresh"
      />
    </template>
  </ElSelect>
</template>
<style>
.el-select-dropdown__loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 20px;
}

.circular {
  display: inline;
  height: 30px;
  width: 30px;
  animation: loading-rotate 2s linear infinite;
}
.path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-color-primary);
  stroke-linecap: round;
}
.loading-path .dot1 {
  transform: translate(3.75px, 3.75px);
  fill: var(--el-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
}
.loading-path .dot2 {
  transform: translate(calc(100% - 3.75px), 3.75px);
  fill: var(--el-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 0.4s;
}
.loading-path .dot3 {
  transform: translate(3.75px, calc(100% - 3.75px));
  fill: var(--el-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 1.2s;
}
.loading-path .dot4 {
  transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));
  fill: var(--el-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 0.8s;
}
@keyframes loading-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
@keyframes custom-spin-move {
  to {
    opacity: 1;
  }
}
</style>
