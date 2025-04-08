<template>
  <!-- 进度条  -->
  <div class="demo-progress">
    <el-progress :percentage="percentage" :show-text="false" v-if="percentage<100"/>
  </div>
  <!-- 加载界面 -->
  <div  class="loading-view" v-if="percentage<100">
    <div class="loading-image">
      <img src="@/assets/imags/qingwa-deng.gif" style="height: 150px;width: 150px; border: none;" >
    </div>
    <h1 style="font-size: 35px;">青蛙管理系统</h1>
    <div class="loading-icon"  v-loading="loading"> 
    </div>
  </div>
  <!-- 主容器 -->
  <div class="login-container"  v-if="percentage <= 1000" >
    <transition name="el-zoom-in-center">
      <div class="left-container" v-show="show">
        <div class="logo-small">
          <!-- <img 
            src="@/assets/imags/qingwa-three.gif" 
            style="height: 50px;width: 50px; border: none;" 
           > -->
        </div>
        <div class="logo"  v-show="show">
        </div>
          <span style="font-size: larger; color:aliceblue;" v-show="show">青蛙管理系统</span>
      </div>
    </transition>

    <transition name="el-zoom-in-center">
      <!-- 右侧 -->
      <div class="right-form" v-show="show">
        <!-- 图标 -->
        <div class="switch-container">
          <div class="switch-btn">
            <!-- 开关 -->
            <DarkSwitch/>
            <!-- 语言切换 -->
            <el-dropdown trigger="click">
              <el-icon  size="20px" class="el-icon--right">
                <Tranlslation/>
              </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>简体中文</el-dropdown-item>
                  <el-dropdown-item>English</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <!-- 表单 -->
        <router-view/>
        <!-- 其他登录 -->
        <OtherLogin/>
        <!-- 分割线 -->
        <div class="line">
          <el-divider content-position="center">其他登录方式</el-divider>
        </div>
        <!-- 其他登录图标 -->
        <OtherLoginIcon/>
      </div>
  </transition>
  </div>
</template>

<script lang="ts" setup>
import Tranlslation from '@/components/Translation/Translation.vue'
import DarkSwitch from '@/components/dark/DarkSwitch.vue';
import OtherLoginIcon from '@/components/Login/OtherLoginIcon.vue';
import OtherLogin from '@/components/Login/OtherLogin.vue';
import { ref, onMounted, onUnmounted } from 'vue';

//加载效果
const loading = ref(true)
//进度条
const percentage = ref(0);
let interval: number;

// 控制动画的标志
const show = ref(false);
onMounted(() => {
  interval = setInterval(() => {
    if (percentage.value < 100) {
      percentage.value += 15; // 每次增加
    } else {
      clearInterval(interval); // 达到100%时清除定时器
      show.value = true; // 加载完毕
    }
  }, 100); // 每50毫秒更新一次
});

onUnmounted(() => {
  clearInterval(interval); // 组件卸载时清除定时器
});



</script>
<style scoped lang="less">
.loading-view{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
}
.loading-icon{
  width: 150px;
  height: 150px;
  background-color: transparent; 
}
.login-container {
  display: flex;
  width: 100%; 
  height: 100%; 
  overflow: hidden; 
}
.logo-small{
  width: 50px;
  height: 50px;
}
.left-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: url("@/assets/svgs/login-bg.svg");
  background-size: 50%;
}
.logo{
  width: 50%;
  height: 50%;
  background: url("@/assets/svgs/login-box-bg.svg");
  background-size: 100%;
}
.right-form{
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  width: 50%;
  height: 100%;
}
.switch-container{
  display: flex;
  //让容器的子元素居右
  justify-content:flex-end;
  width: 100%;
  height: 100px;
  .switch-btn{
    display: flex;
    align-items: center ;
    margin-top: 50px;
    margin-right: 50px;
  }
}
.dark {
  .login-container {
    background: var(--el-bg-color);
  }
  
  .right-form {
    // 如果右侧需要不同的背景色可以使用更具体的变量
    background-color: var(--el-bg-color-page);
  }
}
.line{
  display: flex;
  justify-content: center;
  .el-divider{
    width: 500px;
    margin-left: -30px;
  }
}
.demo-progress .el-progress--line {
  height: 1px;
  width: 100%;
}
</style>