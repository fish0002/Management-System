<template>
   <div class="error-page-container">
      <div class="el-row justify-center align-center" style="min-height: 100vh">
         <div class="el-col-24 el-col-md-12">
            <div class="el-card error-card">
               <div class="card-header">
                  <div class="el-row justify-center">
                     <div class="el-col-auto">
                        <div class="error-code">
                           <span>4</span>
                           <span>0</span>
                           <span>4</span>
                        </div>
                     </div>
                  </div>
                  <h1 class="error-title">页面不存在</h1>
               </div>

               <div class="card-body">
                  <p class="error-message">抱歉，您访问的页面不存在或已被移除</p>

                  <div class="el-row justify-center mt-5">
                     <div class="el-col-auto">
                        <el-button type="primary" @click="backHome">
                           <el-icon><House /></el-icon>
                           返回首页
                        </el-button>
                        <el-button type="text" @click="goBack" class="ml-3">
                           <el-icon><ArrowLeft /></el-icon>
                           返回上一页
                        </el-button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const backHome = () => {
   router.push('/');
};

const goBack = () => {
   router.back();
};
</script>

<style lang="scss" scoped>
.error-page-container {
   background-color: #f5f7fa;
}

.error-card {
   border: none;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
   border-radius: 12px;
   padding: 40px 20px;
   max-width: 500px;
   margin: 0 auto;
}

.card-header {
   text-align: center;
   margin-bottom: 30px;
}

.error-code {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;

   span {
      font-size: 72px;
      font-weight: 800;
      color: #409eff;
      display: inline-block;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
   }
}

.error-title {
   font-size: 28px;
   font-weight: 600;
   color: #303133;
   margin-top: 20px;
}

.error-message {
   font-size: 16px;
   color: #606266;
   text-align: center;
   margin-bottom: 30px;
}

.mt-5 {
   margin-top: 20px;
}

.ml-3 {
   margin-left: 12px;
}
</style>
