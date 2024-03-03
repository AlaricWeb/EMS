<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from "vue";

</script>
<template>
  <RouterView></RouterView>
</template>
<style scoped>
  .foucus{
    position: absolute;
    top:0;
    left:0;
    height: 100vh;
    width: 100vw;
    z-index: 999;
  }
</style>