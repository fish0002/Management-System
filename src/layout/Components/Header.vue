<template>
   <div class="admin-header">
      <!-- 左侧：侧边栏切换和系统标题 -->
      <div class="header-left">
         <el-button type="text" class="sidebar-toggle">
            <i class="fa fa-bars"></i>
         </el-button>
         <div class="system-title">后台开发模板</div>
      </div>

      <!-- 右侧：通知、用户信息和菜单 -->
      <div class="header-right">
         <el-badge :value="4" class="notification-badge">
            <el-button type="text" class="icon-button">
               <i class="fa fa-bell-o"></i>
            </el-button>
         </el-badge>

         <el-dropdown :hide-on-click="false" placement="bottom-end">
            <div class="user-profile">
               <img :src="user.userinfo.userAvatar" alt="用户头像" class="user-avatar" />
               <div class="user-info">
                  <div class="user-name">{{ user.userinfo.userRole }}</div>
                  <div class="user-email">{{ user.userinfo.qqEmail }}</div>
               </div>
               <i class="fa fa-angle-down user-dropdown-icon"></i>
            </div>
            <template #dropdown>
               <el-dropdown-menu>
                  <el-dropdown-item icon="el-icon-user">个人信息</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-setting">账号设置</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-message">消息中心</el-dropdown-item>

                  <el-dropdown-item icon="el-icon-switch-button" @click="gotologin">退出登录</el-dropdown-item>
               </el-dropdown-menu>
            </template></el-dropdown
         >
      </div>
   </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { ElMessage } from 'element-plus';
import { userout } from '@/api/user';
import { useStore } from '@/store/user';
const user = useStore();

const router = useRouter();
const gotologin = () => {
   userout().then(res => {
      console.log(res);

      // 接口cookie清除后逻辑
      // 1. 全局用户信息设置为未登录

      const userRole = {
         userRole: 'NOLOGIN' //未登录
      };
      user.setuser(userRole);
      // 2. 弹出 窗口 用户退出登陆成功，根
      // 否则也跳转登陆页
      ElMessage({
         message: '退出登录',
         type: 'success',
         duration: 400,
         onClose: () => {
            router.push('/login');
         }
      });
   });
};
</script>

<style lang="scss" scoped>
.admin-header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 64px;
   background: #fff;
   border-bottom: 1px solid #ebeef5;
   padding: 0 20px;
   position: sticky;
   top: 0;
   z-index: 1000;
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

   .header-left,
   .header-right {
      display: flex;
      align-items: center;
   }

   .sidebar-toggle {
      color: #606266;
      font-size: 18px;
      padding: 8px;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
         color: #409eff;
      }
   }

   .system-title {
      margin-left: 16px;
      font-size: 18px;
      font-weight: 600;
      color: #303133;
   }

   .notification-badge {
      margin-right: 16px;
   }

   .icon-button {
      color: #606266;
      padding: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
         color: #409eff;
      }
   }

   .user-profile {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0 8px;
      border-radius: 4px;
      transition: all 0.2s;

      &:hover {
         background-color: #f5f7fa;
      }

      .user-avatar {
         width: 32px;
         height: 32px;
         border-radius: 50%;
         object-fit: cover;
         border: 1px solid #ebeef5;
      }

      .user-info {
         margin-left: 10px;
         display: none;

         @media (min-width: 768px) {
            display: block;
         }

         .user-name {
            font-size: 14px;
            font-weight: 500;
            color: #303133;
         }

         .user-email {
            font-size: 12px;
            color: #909399;
         }
      }

      .user-dropdown-icon {
         margin-left: 8px;
         color: #909399;
         transition: transform 0.2s;
      }

      &:hover .user-dropdown-icon {
         color: #409eff;
      }
   }

   .el-dropdown-menu {
      margin-top: 8px;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      .el-dropdown-item {
         font-size: 14px;
         color: #606266;

         &:hover {
            background-color: #f5f7fa;
            color: #409eff;
         }
      }
   }
}
</style>
