<template>
    <!-- 注册表单 -->
    <div class="form-container">
        <h1 class="title">注册</h1>
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="120px"
        >   
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
                  v-model.number="ruleForm.passWard" 
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

            <el-form-item  prop="confirmPass">
              <el-input 
                  v-model.number="ruleForm.confirmPass" 
                  type="password" 
                  placeholder="请再次输入密码"
              >
                  <template #prefix>
                      <el-icon size="18px">
                      <Lock/>
                      </el-icon>
                  </template>
              </el-input>
            </el-form-item>

            <el-form-item  prop="phone">
              <el-input 
                  v-model.number="ruleForm.phone" 
                  type="phone" 
                  placeholder="请输入手机号"
              >
                  <template #prefix>
                      <el-icon size="18px">
                      <Lock/>
                      </el-icon>
                  </template>
              </el-input>
            </el-form-item>


            <!-- 按钮 -->
            <el-form-item class="btn-con">
              <el-button 
                type="primary" 
                @click="submitForm(ruleFormRef)" 
                class="register-btn"
              >
                注册
              </el-button>

              <el-button 
                class="AgainLogin-btn"
                @click="router.push('/login')"
              >
                已有账号？点此登录
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

const checkConfirmPass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('该项为必填项'))
  } else if (value !== ruleForm.passWard) {
    callback(new Error('两次输入的密码不一致!'))
  } else {
    callback()
  }
}

const checkPhone = (rule: any, value: any, callback: any) => {
  const phoneReg = /^1[3-9]\d{9}$/; // 简单的手机号正则表达式
  if (value === '') {
    callback(new Error('该项为必填项'))
  } else if (!phoneReg.test(value)) {
    callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  userName: '',
  passWard: '',
  confirmPass: '',
  phone: '',
})

// 表单验证规则对象 rules，为每个字段定义验证规则和触发条件
const rules = reactive<FormRules<typeof ruleForm>>({
  userName: [{ validator: checkUserName, trigger: 'blur' }],
  passWard: [{ validator: checkPassWard, trigger: 'blur' }],
  confirmPass:[{ validator: checkConfirmPass, trigger: 'blur' }],
  phone: [{ validator: checkPhone, trigger: 'blur' }],
})

// 提交表单
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  //验证表单规则是否通过
  formEl.validate((valid) => {
    if (valid) {
      router.push("/login")
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
.btn-con{
  display: flex;
  justify-content: center;
}
.register-btn{
  width: 35%;
  height: 40px;
  
}
.AgainLogin-btn{
  width: 35%;
  height: 40px;
  margin-left: 45px;
}
</style>