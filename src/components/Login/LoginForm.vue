<template>
  <!-- 登录表单 -->
  <div class="form-container">
    <h1 class="title">登录</h1>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
    >
        <el-form-item prop="adminName">
        <el-input 
            v-model="ruleForm.adminName" 
            type="username" 
            autocomplete="off" 
            placeholder="请输入系统名称"
        >
            <template #prefix>
              <el-icon size="18px">
                  <House />
              </el-icon>
            </template>
        </el-input>
        </el-form-item>
        
        <el-form-item  prop="userName">
        <el-input
            v-model="ruleForm.userName"
            type="username"
            autocomplete="off"
            placeholder="请输入用户名"
        >
            <template #prefix>
              <el-icon size="18px">
                  <Avatar />
              </el-icon>
            </template>
        </el-input>
        </el-form-item>

        <el-form-item  prop="passWard">
        <el-input 
            v-model="ruleForm.passWard" 
            type="password" 
            placeholder="请输入密码"
        >
            <template #prefix>
                <el-icon size="18px">
                  <Lock/>
                </el-icon>
            </template>
        </el-input>
        </el-form-item>
        <el-form-item >
        <el-button type="primary" @click="submitForm(ruleFormRef)" class="login-btn">
            登录
        </el-button>
        </el-form-item>
    </el-form>
  </div>     
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';//引入路由
import type { FormInstance, FormRules } from 'element-plus'

const router=useRouter()
const ruleFormRef = ref<FormInstance>()




const checkUserName = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('该项为必填项'))
  }
  callback()
 
}


const checkPassWard = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('该项为必填项'))
  } else if (value.length < 6) {
    callback(new Error('密码长度至少为6位'))
  } else {
    callback()
  }
}


const checkAdminName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('该项为必填项'))
  } 
  callback()
}


const ruleForm = reactive({
  adminName: 'Bug拯救者',
  userName: 'admin',
  passWard: 'admin123',
})


const rules = reactive<FormRules<typeof ruleForm>>({
  adminName: [{ validator: checkAdminName, trigger: 'blur' }],
  userName: [{ validator: checkUserName, trigger: 'blur' }],
  passWard: [{ validator: checkPassWard, trigger: 'blur' }],
})

// 提交表单
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  //验证表单规则是否通过
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      router.push("/home")
    } else {
      console.log('error submit!')
      return false
    }
  })
  
}

</script>

<style scoped lang="less">
.form-container{
  margin-top: 50px;
  .title{
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
  }
}
.el-form-item{
  margin-bottom: 20px;
}
.el-input{
  width: 500px;
  height: 40px;
}
.login-btn{
  width: 500px;
  height: 40px;
}
</style>