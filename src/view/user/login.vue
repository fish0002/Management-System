<template>
   <div class="login-container">
      <div class="login-card">
         <div class="login-header">
            <el-icon class="logo">
               <Lock />
            </el-icon>
            <h3>用户登录</h3>
         </div>

         <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" label-position="top" class="login-form">
            <el-form-item label="用户名" prop="username">
               <el-input v-model="loginForm.username" prefix-icon="User" placeholder="请输入用户名" clearable>
               </el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
               <el-input
                  v-model="loginForm.password"
                  prefix-icon="Lock"
                  type="password"
                  placeholder="请输入密码"
                  show-password
                  clearable>
               </el-input>
            </el-form-item>

            <el-form-item prop="remember">
               <el-checkbox v-model="loginForm.remember">记住密码</el-checkbox>
            </el-form-item>

            <el-form-item>
               <el-button type="primary" :loading="loading" class="login-btn" @click="handleLogin"> 登录 </el-button>
            </el-form-item>
         </el-form>

         <div class="login-footer">
            <el-link href="#" class="text-sm">忘记密码?</el-link>
            <el-link href="#" class="text-sm">注册账号</el-link>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { Lock, User } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

const router = useRouter();
const loginFormRef = ref<InstanceType<(typeof import('element-plus/es'))['ElForm']>>();

// 登录表单数据
const loginForm = reactive({
   username: '',
   password: '',
   remember: false
});

// 表单验证规则
const loginRules = reactive({
   username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 20, message: '用户名长度在3-20个字符', trigger: 'blur' }
   ],
   password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 20, message: '密码长度在6-20个字符', trigger: 'blur' }
   ]
});

// 登录状态
const loading = ref(false);

// 登录处理
const handleLogin = () => {
   router.push('/view/home');
};
</script>

<style lang="scss" scoped>
.login-container {
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   background-color: #f0f2f5;
   padding: 20px;
}

.login-card {
   width: 100%;
   max-width: 400px;
   padding: 40px;
   background-color: white;
   border-radius: 12px;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.login-header {
   text-align: center;
   margin-bottom: 30px;

   .logo {
      font-size: 48px;
      color: #409eff;
      margin-bottom: 15px;
   }

   h3 {
      font-size: 24px;
      font-weight: 600;
      color: #303133;
   }
}

.login-form {
   .el-form-item__label {
      font-size: 14px;
      color: #606266;
      margin-bottom: 5px;
   }

   .login-btn {
      width: 100%;
      height: 40px;
      font-size: 16px;
   }
}

.login-footer {
   display: flex;
   justify-content: space-between;
   margin-top: 20px;

   .text-sm {
      font-size: 14px;
      color: #909399;

      &:hover {
         color: #409eff;
      }
   }
}
</style>
