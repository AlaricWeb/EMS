<script lang="ts" setup>
import * as echarts from "echarts";
import type {EChartsOption} from "echarts"
import { onMounted, onUnmounted, ref } from "vue";
import wonderland from "@/assets/wonderland.json";
const option = defineModel<any>()
const echartsRef = ref<HTMLDivElement | false>(false);
onMounted(() => {
  if (echartsRef.value && option.value) {
      echarts.registerTheme("wonderland", wonderland);
    const chart = echarts.init(echartsRef.value, "wonderland");
      chart.setOption(option.value);
      window.addEventListener("resize", function () {
        chart.resize();
      });
  }
});
onUnmounted(() => {
  echartsRef.value && echarts.dispose(echartsRef.value);
});
</script>
<template>
     <div
      id="echarts"
      ref="echartsRef"
      :style="{ width: '100%', height: '100%',padding:0,margin:0 }"
    ></div>
</template>