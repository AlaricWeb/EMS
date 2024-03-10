<script setup lang="ts">
import {ElIcon, ElMenuItem, ElSubMenu } from 'element-plus';
import { h, ref } from "vue";
import request from  "@/utils/request"
import {
  Document,
} from '@element-plus/icons-vue'
interface MenuItem{
  name: string,
  route_path: string,
  [props:string]:any
}
const model = defineModel<Array<MenuItem>>({required:true})
interface Props{
    option:any[]
}
const activeMenu =ref<string>("/console")
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
        :default-active="activeMenu"
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