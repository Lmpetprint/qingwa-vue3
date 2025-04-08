<template>
    <div class="other-login">
        <el-button>手机登录</el-button>
        <el-button>二维码登录</el-button>
        <el-button @click="toRegister">注册</el-button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';//引入路由
const router =useRouter()
const toRegister=()=>{
    router.push("/login/register")
}
</script>

<style scoped lang="less">
.other-login{
  display: flex;
  justify-content: center;
  width: 730px;
  height: 50px;
  .el-button{
    width: 162px;
    height: 37px;
    margin-left: 7px;
  }
}
</style>