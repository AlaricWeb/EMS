<script setup lang="ts">
import {ElIcon, ElMenuItem, ElSubMenu } from 'element-plus';
import { h, onMounted } from "vue";
import request from  "@/utils/request"
import {
  Document,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const model = [
    {
        name: "控制台",
        route_path:"/console"  
    },
      {
        "id": 1,
        "name": "工单管理",
        "parent_id": 0,
        "route_path": "/work/order",
        "sort": 0,
        "status": 0,
        "icon": "",
        "type": 1,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": false
      },
      {
        "id": 2,
        "name": "企业设置",
        "parent_id": 0,
        "route_path": "",
        "sort": 0,
        "status": 0,
        "icon": "",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
          {
            "id": 3,
            "name": "故障类型",
            "parent_id": 2,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 4,
            "name": "报修部门",
            "parent_id": 2,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 5,
            "name": "报修单位",
            "parent_id": 2,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 6,
            "name": "报修区域",
            "parent_id": 2,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          }
        ]
      },
      {
        "id": 7,
        "name": "设备管理",
        "parent_id": 0,
        "route_path": "",
        "sort": 0,
        "status": 0,
        "icon": "",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
          {
            "id": 8,
            "name": "设备列表",
            "parent_id": 7,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 9,
            "name": "设备分类",
            "parent_id": 7,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          }
        ]
      },
      {
        "id": 10,
        "name": "耗材管理",
        "parent_id": 0,
        "route_path": "",
        "sort": 0,
        "status": 0,
        "icon": "",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
          {
            "id": 11,
            "name": "我的耗材",
            "parent_id": 10,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 12,
            "name": "耗材列表",
            "parent_id": 10,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 13,
            "name": "申领列表",
            "parent_id": 10,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 14,
            "name": "历史入库",
            "parent_id": 10,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 15,
            "name": "盘点记录",
            "parent_id": 10,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 16,
            "name": "折损记录",
            "parent_id": 10,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 17,
            "name": "耗材维护",
            "parent_id": 10,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 0,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": true,
            "children": [
              {
                "id": 18,
                "name": "耗材分类",
                "parent_id": 17,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
              },
              {
                "id": 19,
                "name": "生产厂商",
                "parent_id": 17,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
              },
              {
                "id": 20,
                "name": "供应商",
                "parent_id": 17,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
              },
              {
                "id": 21,
                "name": "仓库地址",
                "parent_id": 17,
                "route_path": "",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 1,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
              }
            ]
          },
          {
            "id": 22,
            "name": "耗材报告",
            "parent_id": 10,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          }
        ]
      },
      {
        "id": 23,
        "name": "巡检管理",
        "parent_id": 0,
        "route_path": "",
        "sort": 0,
        "status": 0,
        "icon": "",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
          {
            "id": 24,
            "name": "区域管理",
            "parent_id": 23,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 25,
            "name": "巡检任务",
            "parent_id": 23,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 26,
            "name": "巡检记录",
            "parent_id": 23,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          }
        ]
      },
      {
        "id": 27,
        "name": "维修经验",
        "parent_id": 0,
        "route_path": "",
        "sort": 0,
        "status": 0,
        "icon": "",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
          {
            "id": 28,
            "name": "文章列表",
            "parent_id": 27,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 29,
            "name": "知识分类",
            "parent_id": 27,
            "route_path": "",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          }
        ]
      },
      {
        "id": 32,
        "name": "个人中心",
        "parent_id": 0,
        "route_path": "/repassword",
        "sort": 0,
        "status": 0,
        "icon": "",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": false
      },
      {
        "id": 33,
        "name": "权限管理",
        "parent_id": 0,
        "route_path": "/system/auth",
        "sort": 0,
        "status": 0,
        "icon": "",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
          {
            "id": 34,
            "name": "管理员",
            "parent_id": 33,
            "route_path": "/system/user",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 0,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": true,
            "children": [
              {
                "id": 35,
                "name": "添加",
                "parent_id": 34,
                "route_path": "/system/user",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 2,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
              },
              {
                "id": 36,
                "name": "删除",
                "parent_id": 34,
                "route_path": "/system/user",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 2,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
              },
              {
                "id": 37,
                "name": "修改",
                "parent_id": 34,
                "route_path": "/system/user",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 2,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
              },
              {
                "id": 38,
                "name": "查看",
                "parent_id": 34,
                "route_path": "/system/user",
                "sort": 0,
                "status": 0,
                "icon": "",
                "type": 2,
                "deleted_at": null,
                "created_at": "2024-03-03 20:09:24",
                "updated_at": "2024-03-03 20:09:24",
                "has_children": false
              }
            ]
          },
          {
            "id": 39,
            "name": "系统菜单",
            "parent_id": 33,
            "route_path": "/system/menu",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          },
          {
            "id": 40,
            "name": "管理员角色",
            "parent_id": 33,
            "route_path": "/system/role",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 1,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          }
        ]
      },
      {
        "id": 41,
        "name": "在线留言",
        "parent_id": 0,
        "route_path": "/foodback",
        "sort": 0,
        "status": 0,
        "icon": "",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": false
      },
      {
        "id": 30,
        "name": "设置",
        "parent_id": 0,
        "route_path": "/system",
        "sort": 255,
        "status": 0,
        "icon": "setting",
        "type": 0,
        "deleted_at": null,
        "created_at": "2024-03-03 20:09:24",
        "updated_at": "2024-03-03 20:09:24",
        "has_children": true,
        "children": [
          {
            "id": 31,
            "name": "系统配置",
            "parent_id": 30,
            "route_path": "/config/base",
            "sort": 0,
            "status": 0,
            "icon": "",
            "type": 0,
            "deleted_at": null,
            "created_at": "2024-03-03 20:09:24",
            "updated_at": "2024-03-03 20:09:24",
            "has_children": false
          }
        ]
      }
    ]
interface Props{
    option:any[]
}
const TreeMenu = (props:Props,ctx?:any) => {
    return props.option.map((item) => {
        if (item.children?.length) {
            return h(ElSubMenu, {
                index: item.route_path || item.id.toString()
            }, {
                default: () => {
                    const childNode = TreeMenu({ option: item.children });
                    return childNode;
                },
                title: () => [h(ElIcon,null,()=>h(Document,null)),h("span",item.name)]
            })
        }
        return h(ElMenuItem, {
            index:item.route_path
        }, ()=>[h(ElIcon,null,()=>h(Document)),h("span",null,item.name)]);
   })   
}
</script>
<template>
    <ElMenu 
        active-text-color="#ffd04b"
        background-color="#00000"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        unique-opened
        router
        >
        <TreeMenu :option="model"></TreeMenu>
    </ElMenu> 
</template>
<style lang="scss" scoped>
 .el-menu{
    border:none;
 }
</style>