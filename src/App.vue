<template>
   <div id="app">
      <!-- 路由过渡动画 -->
      <transition name="fade-slide">
         <router-view />
      </transition>
   </div>
</template>

<script setup lang="ts">
// 导入路由钩子，可用于添加全局过渡逻辑
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

// 可选：添加全局路由过渡逻辑
onBeforeRouteLeave((to, from) => {
   // 可以在这里添加离开前的逻辑
});

onBeforeRouteUpdate((to, from) => {
   // 可以在这里添加路由更新前的逻辑
});
</script>

<style lang="scss" scoped>
/* 基础动画定义 */
.fade-slide-enter-active,
.fade-slide-leave-active {
   transition: all 0.4s ease-out;
}

/* 进入动画 */
.fade-slide-enter-from {
   opacity: 0;
   transform: translateX(30px);
}

/* 离开动画 */
.fade-slide-leave-to {
   opacity: 0;
   transform: translateX(-30px);
}

/* 登录页特定样式 */
.login-page {
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   background: linear-gradient(135deg, #409eff 0%, #0a58ca 100%);

   .login-container {
      background: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 400px;
      transform: translateY(0);
      transition: transform 0.3s ease;

      &:hover {
         transform: translateY(-5px);
      }
   }
}

/* 后台管理系统特定样式 */
.admin-layout {
   display: flex;
   min-height: 100vh;

   /* 侧边栏样式 */
   .sidebar {
      width: 220px;
      background: #1e293b;
      color: white;
      transition: width 0.3s ease;

      &.collapsed {
         width: 64px;

         .menu-text {
            display: none;
         }
      }
   }

   /* 主内容区样式 */
   .main-content {
      flex: 1;
      background: #f5f7fa;
      overflow: auto;
   }
}
</style>
