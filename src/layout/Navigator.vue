<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const keyword = ref<string>();
</script>
<template>
  <div class="nav-header">
    <div class="left-content">
     
    <Icon icon="mingcute:layout-9-fill" ></Icon>
    <ElInput
      v-model="keyword"
      placeholder="请输入"
      style="width: 200px"
      :prefix-icon="Search"
    ></ElInput>
    <Icon icon="mingcute:walk-fill"></Icon>
    </div>
    <div class="right-content">
      <Icon icon="mingcute:notification-fill"></Icon>
      <Icon icon="mingcute:fullscreen-line"></Icon>
      <ElAvatar></ElAvatar>
      <Icon icon="mingcute:dots-line"></Icon>
    </div>
  </div>
  
  <div class="nav-tab">

    <Icon class="arrow" icon="mingcute:home-2-line"></Icon>
    <Icon class="arrow" icon="mingcute:arrows-left-line"></Icon>
    <div class="content">
        <div>Lorem, ipsum dolor.</div>
        <div>Harum, repudiandae blanditiis?</div>
        <div>Tempore, laborum soluta.</div>
        <div>Obcaecati, reprehenderit nihil!</div>
        <div>Reiciendis, laudantium quasi.</div>
        <div>Porro, debitis iste!</div>
        <div>Iusto, quasi ut.</div>
        <div>Quos, in reprehenderit.</div>
        <div>Blanditiis, excepturi. Facilis!</div>
        <div>Velit, nam repellendus.</div>
    </div>
    <Icon class="arrow" icon="mingcute:arrows-right-line"></Icon>
  </div>
</template>
<style lang="scss" scoped>
.nav-header{
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg{
        font-size: 1.5em;
        margin:0 0.5em;
        cursor: pointer;
        color:#100404;
      }
    .left-content{
      flex:1;
      display: flex;
      align-items: center;
    }
    .right-content{
      flex-shrink: 0;
      display: flex;
      align-items: center;
     
    }
}
.nav-tab {
  display: flex;
  border-top:1px solid  #eceff7;
  height: 35px;
  padding:0 1em;
  .content{
    flex:1;
    display: flex;
    overflow: hidden;
    align-items: center;
    div{
      white-space: nowrap;
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 1em;;
    }
  }
  .arrow{
    height: 100%;
    font-size: 24px;
    flex-shrink: 0;
    margin:0 5px;
  }
}
</style>
