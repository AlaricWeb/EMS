<script setup lang="ts">
import NavMenu, { type MenuItem } from "@/layout/NavMenu.vue";
import { RouterView, useRouter } from "vue-router";
import Navigator from "@/layout/Navigator.vue";
import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";
const userStore = useUserStore();
const router = useRouter();
for(let i =0; i<100; i++){
  
   console.log(i);
   
}
onMounted(() => {
  userStore.getUserInfo();
});
</script>
<template>
  <ElContainer class="layout-container">
    <ElAside class="layout-aside">
      <NavMenu v-model="userStore.tree" />
    </ElAside>
    <ElContainer class="layout-content">
      <ElHeader class="layout-header">
        <Navigator></Navigator>
      </ElHeader>
      <ElMain class="layout-main">
        <RouterView></RouterView>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>
<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  width: 100vw;

  .layout-aside {
    width: auto;
    background-color: #000;
  }

  .layout-content {
    .layout-header {
      height: 82px;
      padding: 0;
    }

    .layout-main {
      padding: 0 1em;
      background-color: #f5f7fa;
    }
  }
}
</style>
