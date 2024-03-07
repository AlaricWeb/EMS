<script setup lang="ts">
import { Lock, Unlock, User } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import {useUserStore} from  "@/stores/user"

type FormData = {
  account: string,
  password: string,
  code:string
}
const formData = reactive<FormData>({
  account: '',
  password: '',
  code:''
})
const userStore = useUserStore();
const onSubmit = async () => {
 const User = await  userStore.password(formData.account,formData.password)
 console.log(User);
}
</script>
<template>
  <div class="container">
    <div class="login-content">
        <h2>设备报修系统</h2>
            <ElForm  label-position="top" size="large">
                <ElFormItem >
                    <ElInput :prefix-icon="User" clearable v-model="formData.account" placeholder="请输入用户名"></ElInput>
                </ElFormItem>
                <ElFormItem >
                    <ElInput :prefix-icon="Lock" type="password" v-model="formData.password" :show-password="true" placeholder="请输入密码"></ElInput>
                </ElFormItem>
                <ElFormItem >
                    <ElInput :prefix-icon="Unlock" type="password" v-model="formData.code" :show-password="true" placeholder="验证码"></ElInput>
                </ElFormItem>
                <ElFormItem>
                    <ElButton style="width: 100%;" type="primary" @click.stop="onSubmit">登录</ElButton>
                </ElFormItem>
            </ElForm>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .container{
     height: 100vh;
     width: 100vw;
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
        }
     }
  }
</style>