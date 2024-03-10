<script setup lang="ts">
import NavMenu from "@/layout/NavMenu.vue";
import { RouterView } from "vue-router";
import Navigator from "@/layout/Navigator.vue";

</script>
<template>
 <ElContainer class="layout-container">
    <ElAside class="layout-aside">
        <NavMenu/>
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
<style  lang="scss" scoped>
    .layout-container{
        height: 100vh;
        width: 100vw;
        .layout-aside{
            width: 220px;
            background-color: #000;
        }
        .layout-content{
        .layout-header{
            height: 80px;
            padding:0;
        }
        .layout-main{
            padding:0 1em;
            background-color: #f5f7fa;
        }
      }  
    }
</style>