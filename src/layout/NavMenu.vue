<script setup lang="ts">
import {ElIcon, ElMenuItem, ElSubMenu } from 'element-plus';
import { h } from "vue";

import {
  Document,
  Location,
  Setting,
} from '@element-plus/icons-vue'
console.log("nav menu ");
const model = [
    { id:"11",title:"工单管理"},
    {
        id:"10",
        title: "权限管理",
        children: [
            {
                id:"7",
                 title:"管理员"
            },
            {
                id:"8",
                title: "角色",
            },
            {
                id:"9",
                title:"菜单"
            }
    ]},
    {id:"1",title:"用户管理"},
    {id:"2",title:"耗材管理"},
    {id:"3",title:"设备管理"},
    {id:"4",title:"巡检管理"},
    {id:"5",title:"设置"},
    {id:"6",title:"关于我们"},
]

interface Props{
    option:any[]
}
const TreeMenu = (props:Props,ctx?:any) => {
    return props.option.map((item) => {
        if (item.children?.length) {
            return h(ElSubMenu, {
                index:item.id
            }, {
                default: () => {
                    const childNode = TreeMenu({ option: item.children });
                    return childNode;
                },
                title: () => [h(ElIcon,null,()=>h(Document,null)),h("span",item.title)]
            })
        }
        return h(ElMenuItem, {
            index:item.id
        }, ()=>[h(ElIcon,null,()=>h(Document)),h("span",null,item.title)]);
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