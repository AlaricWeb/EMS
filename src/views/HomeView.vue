<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from "vue";
import  {Icon} from "@iconify/vue"
console.log("hello world");

</script>

<template>
  <main>
    <Icon icon="mdi:home" style="color:red;"></Icon>
    <TheWelcome />
  </main>
</template>
