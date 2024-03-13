<script setup lang="ts">
import { ElIcon, ElMenuItem, ElSubMenu } from 'element-plus';
import { h, ref } from "vue";
import { Icon } from "@iconify/vue";
import { Document, Folder } from '@element-plus/icons-vue';
export interface MenuItem {
    name: string,
    route_path: string,
    icon: string,
    [props: string]: any
}
const model = defineModel<Array<MenuItem>>({ required: true })
interface Props {
    option: any[]
}
const collapse = ref<boolean>(false);
const activeMenu = ref<string>("/console")
const TreeMenu = (props: Props, ctx?: any) => {
    return props.option.map((item) => {
        if (item.children?.length) {
            return h(ElSubMenu, {
                index: item.route_path || item.id.toString()
            }, {
                default: () => {
                    const childNode = TreeMenu({ option: item.children });
                    return childNode;
                },
                title: () => [h(ElIcon, null, () => {
                    if (item.icon) {
                        return h(Icon, { icon: item.icon });
                    } else {
                        return h(Folder)
                    }
                }), h("span", item.name)]
            })
        }
        return h(ElMenuItem, {
            index: item.route_path
        }, () => [h(ElIcon, null, () => {
            if (item.icon) {
                return h(Icon, { icon: item.icon });
            } else {
                return h(Document)
            }
        }), h("span", null, item.name)]);
    })
}
</script>
<template>
    <ElMenu active-text-color="#ffd04b" background-color="#00000" :collapse="collapse"
        :class="collapse ? 'collapse' : 'layout-menu'" class="layout-menu" :default-active="activeMenu"
        text-color="#fff" unique-opened router>
        <TreeMenu :option="model"></TreeMenu>
    </ElMenu>
</template>
<style lang="scss" scoped>
.el-menu {
    border: none;
}

.layout-menu {
    width: 220px;
}
</style>