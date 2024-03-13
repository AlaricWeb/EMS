<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import type { Role } from "./index.vue"
import request from "@/utils/request";
const dialogVisible = ref<boolean>(false)
defineProps<{ title: string }>();
const model = defineModel<Role>({
    default: {
        id: 0,
        name: '',
        description: '',
    }
})
const systemMenuList = []

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
const fetchMenuList = async () => {
    const result = await request.get('/system/menu', { params: { page: 1, limit: 10 } })
    console.log(result);
}
onMounted(() => {
    fetchMenuList();
})
</script>
<template>
    <span @click="dialogVisible = true">
        <slot></slot>
    </span>
    <el-dialog v-model="dialogVisible" draggable :title="title" width="600" :before-close="handleClose">
        <ElForm :model="model" label-width="80">
            <ElFormItem label="名称" prop="name">
                <ElInput v-model="model.name" style="width: 300px;" placeholder="请输入角色名称"></ElInput>
            </ElFormItem>
            <ElFormItem label="权限" prop="system_menu_ids">
                <ElCascaderPanel :options="systemMenuList" placeholder="请选择权限"></ElCascaderPanel>
            </ElFormItem>
            <ElFormItem label="描述" prop="desc">
                <ElInput type="textarea" placeholder="请输入角色描述" show-word-limit maxlength="50" :rows="6" resize="none"
                    v-model="model.desc"></ElInput>
            </ElFormItem>
        </ElForm>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                    确认提交
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
