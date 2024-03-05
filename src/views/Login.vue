<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue';
import { reactive } from 'vue';
const formData = reactive({
    account: "admin",
    password:"123456"
 })
const onSubmit = () => {
    console.log(formData);
}
</script>
<template>
  <div class="container">
    <div class="login-content">
        <div class="login-info"> login in system </div>
        <div class="login-form">
            <h1>设备报修系统</h1>
            <ElForm  label-position="top" >
                <ElFormItem label="用户名">
                    <ElInput :prefix-icon="User" v-model="formData.account" placeholder="请输入用户名"></ElInput>
                </ElFormItem>
                <ElFormItem label="密码">
                    <ElInput :prefix-icon="Lock" type="password" v-model="formData.password" :show-password="true" placeholder="请输入密码"></ElInput>
                </ElFormItem>
                <ElFormItem>
                    <ElButton  type="primary" @click.stop="onSubmit">登录</ElButton>
                </ElFormItem>
            </ElForm>
        </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .container{
     height: 100vh;
     width: 100vw;
     position: relative;
     .login-content{
        height: 500px;
        width: 1000px;
        position:absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        box-shadow: 0 1px 20px  0 #888;
        border-radius: 5px;
        display: flex;
        .login-info{
            align-self: stretch;
            flex:1;
            text-align: center;
            padding:1em;
            font-size: 1.5em;
        }
        .login-form{
            width:500px;
            padding:1em;
            box-sizing: border-box;
            h1{
                margin:1em 0;
            }
        }
     }
  }
</style>