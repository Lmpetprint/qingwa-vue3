<template>
  <div class="header">
    <div class="l-content">
        <!-- 左侧按钮 -->
        <el-button size="small" @click="handle">
            <!-- eslint-disable-next-line vue/require-component-is  临时禁用规则，这是会爆红，原因好像是没有遵循ESLint 规则-->
            <component class="icons" is="menu"></component>
        </el-button>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/" class="bread">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
    </div>

    <!-- 右侧头像 -->
    <div class="r-content">
        <el-dropdown>
            <span class="el-dropdown-link">
                <img :src="getImageUrl('user')" class="user" />
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>        
    </div>
    
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useAllDataStore} from '@/stores'
// 这里要用反斜杠${user}才会生效  import.meta.url代表当前文件的绝对路径
const getImageUrl=(user)=>{
    return new URL(`../assets/images/${user}.png`, import.meta.url).href
}
const store =useAllDataStore()
const handle=()=>{
  store.state.isCollapse = !store.state.isCollapse
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #333;
}
.icons {
  width: 20px;
  height: 20px;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
      margin-right: 20px;
   }
}
.r-content {
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

:deep(.bread span){
    color: #fff !important;
    cursor:pointer !important;
}  
</style>

