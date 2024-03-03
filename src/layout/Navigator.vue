<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const keyword = ref<string>();
</script>
<template>
  <dvi class="nav-header">
    <ElInput
      v-model="keyword"
      placeholder="请输入"
      style="width: 200px"
      :prefix-icon="Search"
    ></ElInput>
  </dvi>
  <div class="nav-tab">
    <Icon class="arrow" icon="mingcute:home-2-line"></Icon>
    <Icon class="arrow" icon="mingcute:arrows-left-line"></Icon>
    <Icon class="arrow" icon="mingcute:arrows-right-line"></Icon>
  </div>
</template>
<style lang="scss" scoped>
.nav-header{
    height: 45px;
    display: flex;
    align-items: center;
    padding:0 1em;
}
.nav-tab {
  display: flex;
  border-top:1px solid  #eceff7;
  height: 35px;
  padding:0 1em;
  .arrow{
    height: 100%;
    font-size: 30px;
    color:#787b7f;
  }
}
</style>
