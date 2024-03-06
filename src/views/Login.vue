<script setup lang="ts">
<<<<<<< HEAD
import { Lock, Unlock, User } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
type FormData = {
  account: string,
  password: string,
  code:string
}
const formData = ref<Partial<FormData>|undefined>()
const onSubmit = async () => {
    
=======
import { Lock, User } from '@element-plus/icons-vue';
import { reactive } from 'vue';
const formData = reactive({
    account: "admin",
    password:"123456"
 })
const onSubmit = () => {
    console.log(formData);
>>>>>>> a99526f50609857f79af0ff301bf8fc8caded149
}
</script>
<template>
  <div class="container">
    <div class="login-content">
<<<<<<< HEAD
        <h2>设备报修系统</h2>
            <ElForm  label-position="top" size="large">
                <ElFormItem >
                    <ElInput :prefix-icon="User" clearable v-model="formData?.account" placeholder="请输入用户名"></ElInput>
                </ElFormItem>
                <ElFormItem >
                    <ElInput :prefix-icon="Lock" type="password" v-model="formData?.password" :show-password="true" placeholder="请输入密码"></ElInput>
                </ElFormItem>
                <ElFormItem >
                    <ElInput :prefix-icon="Unlock" type="password" v-model="formData?.code" :show-password="true" placeholder="验证码"></ElInput>
                </ElFormItem>
                <ElFormItem>
                    <ElButton style="width: 100%;" type="primary" @click.stop="onSubmit">登录</ElButton>
                </ElFormItem>
            </ElForm>
=======
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
>>>>>>> a99526f50609857f79af0ff301bf8fc8caded149
    </div>
  </div>
</template>
<style scoped lang="scss">
  .container{
     height: 100vh;
     width: 100vw;
<<<<<<< HEAD
     background-image: url("@/assets/loginbg.png");
     background-position: center;
     background-size: cover;
     position: relative;
        
     .login-content{
        position:absolute;
        top: 50%;
        right:17%;
        width: 250px;
        transform:scale(1.3)   translateY(-40%);
        background-color: #fff;
        padding:2.5em;
        h2{
          color:#888;
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 1.5em;
=======
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
>>>>>>> a99526f50609857f79af0ff301bf8fc8caded149
        }
     }
  }
</style>