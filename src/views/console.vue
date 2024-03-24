<script lang="ts" setup>
import EChart from "@/components/EChart.vue";
import * as echarts from "echarts";
import { reactive, ref } from "vue";
import { Icon } from "@iconify/vue";
import type { EChartsOption } from "echarts";
const option = reactive<EChartsOption>({
  color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00", "#FF0087", "#FF0087"],
  title: {
    text: "维修时效统计 ",
    top: "10px;",
    left: "20px",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["待派单", "未接单", "处理中", "待确认", "已完成", "已取消", "已驳回"],
    top: "10px",
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
    right: "10px",
  },
  grid: {
    left: "2%",
    right: "2%",
    bottom: "2%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: ["待派单", "未接单", "处理中", "待确认", "已完成", "已取消", "已驳回"].map((item) => {
    return {
      name: item,
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#80FFA5",
          },
          {
            offset: 1,
            color: "rgb(1, 191, 236)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [
        Math.ceil(Math.random() * 33),
        Math.ceil(Math.random() * 100),
        Math.ceil(Math.random() * 33),
        Math.ceil(Math.random() * 1000),
        Math.ceil(Math.random() * 33),
        Math.ceil(Math.random() * 1000),
        Math.ceil(Math.random() * 33),
        Math.ceil(Math.random() * 1000),
        Math.ceil(Math.random() * 1000),
        Math.ceil(Math.random() * 1000),
        Math.ceil(Math.random() * 1000),
        Math.ceil(Math.random() * 1000),
      ],
    };
  }),
});

// {
//     name: "未接单",
//     type: "line",
//     stack: "Total",
//     smooth: true,
//     lineStyle: {
//       width: 0,
//     },
//     showSymbol: false,
//     areaStyle: {
//       opacity: 0.8,
//       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//         {
//           offset: 0,
//           color: "rgb(128, 255, 165)",
//         },
//         {
//           offset: 1,
//           color: "rgb(1, 191, 236)",
//         },
//       ]),
//     },
//     emphasis: {
//       focus: "series",
//     },
//     data: [140, 232, 101, 264, 90, 340, 250],
//   },
const option2 = {
  title: {
    text: "工单状态统计 ",
    top: "9px;",
    left: "19px",
  },
  // tooltip: {
  //   trigger: 'item',
  // },
  legend: {
    orient: "vertical",
    type: "scroll",
    top: "middle",
    right: "right",
    align: "left",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["39%", "70%"],
      avoidLabelOverlap: true,

      label: {
        show: true,
        position: "center",

        fontWeight: "bold",
        fontSize: 19,
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 39,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        //  "待派单", "未接单", "处理中", "待确认", "已完成", "已取消", "已驳回"
        { value: 10487, name: "待派单" },
        { value: 734, name: "未接单" },
        { value: 579, name: "处理中" },
        { value: 10487, name: "待确认" },
        { value: 10487, name: "已完成" },
        { value: 299, name: "已取消" },
        { value: 0, name: "已驳回" },
      ],
    },
  ],
};
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 169, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 169, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 169, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 169, Grove St, Los Angeles",
  },
];
</script>
<template>
  <div class="container">
    <ElRow class="common-functions" :gutter="20">
      <ElCol :span="16">
        <div style="background-color: #ffffff; height: 100%; border-radius: 10px; box-shadow: 0 10px 5px 0 #eee">
          <h1 style="height: 60px; line-height: 60px; padding: 0 1em">设备状态</h1>
          <div style="display: flex; justify-content: space-around; text-align: center">
            <div>
              <Icon style="font-size: 3em; color: #2b54ef" icon="mingcute:user-add-2-fill"></Icon>
              <div>所有设备</div>
            </div>
            <div>
              <Icon style="font-size: 3em; color: #2b54ef" icon="mingcute:layout-9-fill"></Icon>
              <div>运行正常</div>
            </div>
            <div>
              <Icon style="font-size: 3em; color: #2b54ef" icon="mingcute:layout-9-fill"></Icon>
              <div>运行异常</div>
            </div>
            <div>
              <Icon style="font-size: 3em; color: #2b54ef" icon="mingcute:layout-9-fill"></Icon>
              <div>过保运行</div>
            </div>
            <div>
              <Icon style="font-size: 3em; color: #2b54ef" icon="mingcute:layout-9-fill"></Icon>
              <div>停机检修</div>
            </div>
            <div>
              <Icon style="font-size: 3em; color: #2b54ef" icon="mingcute:layout-9-fill"></Icon>
              <div>已报废</div>
            </div>
          </div>
        </div>
      </ElCol>
      <ElCol :span="8">
        <h1 style="padding: 0 1em; background-color: #ffffff; height: 60px; line-height: 60px">用户登录数据</h1>
        <el-table height="calc(20vh - 60px)" size="small" :border="false" :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="160" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </ElCol>
    </ElRow>
    <ElRow class="attendance-statistics" :gutter="20">
      <ElCol :span="16">
        <div style="background-color: #ffffff; height: 100%; box-shadow: 0 5px 20px 0 #eee">
          <EChart v-model="option"></EChart>
        </div>
      </ElCol>
      <ElCol :span="8">
        <div style="background-color: #ffffff; height: 100%; box-shadow: 0 5px 20px 0 #eee">
          <EChart v-model="option2"></EChart>
        </div>
      </ElCol>
    </ElRow>
    <h1 style="padding: 0 1em; background-color: #ffffff; height: 60px; line-height: 60px">用户登录数据</h1>
    <el-table :data="tableData" :border="true" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="160" />
      <el-table-column prop="name" label="Name" width="160" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding-top: 1em;

  .common-functions {
    height: 20vh;
  }

  .attendance-statistics {
    height: 40vh;
  }

  & > div {
    margin-bottom: 1em;
  }
}

:deep(.el-card__header) {
  border: none;
  height: 100%;
}

:deep(.el-card) {
  border: none;
  height: 100%;
}
</style>
