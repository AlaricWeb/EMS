<script lang="ts" setup>
import { Search, Fold } from "@element-plus/icons-vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useSettingStore } from "@/stores/setting";
import { storeToRefs } from "pinia";
const settingStore = useSettingStore();
const userStore = useUserStore();
const { userinfo } = storeToRefs(userStore);
const keyword = ref<string>();
const TabsRef = ref<HTMLDivElement | null>(null);
const scrollLeft = () => {
  if (TabsRef.value != null) {
    TabsRef.value.scrollLeft -= 80;
  }
};
const scrollRight = () => {
  if (TabsRef.value != null) {
    TabsRef.value.scrollLeft += 80;
  }
};
const handlerClick = (item) => {
  item.badge = Math.random().toFixed(1);
};
</script>
<template>
  <div class="nav-header">
    <div class="left-content">
      <Fold
        @click.stop="settingStore.collapse = !settingStore.collapse"
        style="width: 1em; height: 1em; margin-right: 8px" />
      <!-- <Icon icon="mingcute:fold-horizontal-line"></Icon> -->
      <ElInput v-model="keyword" placeholder="请输入" style="width: 200px" :prefix-icon="Search"></ElInput>
      <Icon icon="mingcute:refresh-1-fill"></Icon>
    </div>
    <div class="right-content">
      <Icon icon="mingcute:notification-fill"></Icon>
      <Icon icon="mingcute:fullscreen-line"></Icon>
      <ElAvatar :src="userinfo?.avatar"></ElAvatar>
      <Icon icon="mingcute:more-2-line"></Icon>
    </div>
  </div>
  <div class="nav-tab">
    <Icon class="arrow icon-arrow" icon="mingcute:home-2-line"></Icon>
    <Icon class="arrow icon-arrow" @click.stop="scrollLeft" icon="mingcute:arrows-left-line"></Icon>
    <div class="content" ref="TabsRef">
      <template v-for="item in userStore.navigator">
        <!-- <ElBadge v-if="item.active" :value="item.badge" :max="99">{{
          item.name
        }}</ElBadge> -->
        <template v-if="item.active">
          <span class="tab-item" :class="{ active: settingStore.activeURL == item.route_path }">{{ item.name }}</span>
        </template>
      </template>
    </div>
    <Icon class="icon-arrow" @click.stop="scrollRight" icon="mingcute:arrows-right-line"></Icon>
  </div>
</template>
<style lang="scss" scoped>
.nav-header {
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 1.5em;
    margin: 0 0.5em;
    cursor: pointer;
    color: #606266;
  }

  .left-content {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .right-content {
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
}

.nav-tab {
  display: flex;
  border-top: 1px solid #eceff7;
  height: 37px;

  .content {
    flex: 1;
    display: flex;
    align-items: center;
    overflow: hidden;
    .tab-item {
      margin: 0 1em;
    }
    .active {
      color: rgb(10, 156, 68);
    }
    // div {
    //   white-space: nowrap;
    //   width: 80px;
    //   box-sizing: border-box;
    //   text-align: center;
    //   flex-shrink: 0;
    //   text-overflow: ellipsis;
    //   margin-right: 1em;
    //   cursor: pointer;
    // }
  }

  .icon-arrow {
    border-right: 1px solid #eceff7;
    padding: 0 0.5em;
    height: 100%;
    font-size: 24px;
    flex-shrink: 0;
    cursor: pointer;

    .arrow:last-child {
      margin-left: 10px;
    }
  }

  .icon-arrow:last-child {
    border-left: 1px solid #eceff7;
  }
}
</style>
