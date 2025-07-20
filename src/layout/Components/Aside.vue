<template>
   <div style="width: 100%; display: flex; justify-content: center; align-items: center; height: 50px; color: white">
      <el-icon><Avatar /></el-icon>

      <div style="margin-left: 0.5em">万能模版</div>
   </div>
   <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      :default-active="route.path"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      :router="true">
      <div v-for="(item, index) in menu" :key="index">
         <el-menu-item v-if="!item.meta.level" :index="`/view/${item.path}`">
            <el-icon><component :is="item.meta.icon" /></el-icon>

            <span>{{ item.meta.title || 'null' }}</span>
         </el-menu-item>
         <el-sub-menu v-else :index="index">
            <template #title>
               <el-icon><component :is="item.meta.icon" /></el-icon>
               <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item v-for="i in item.children" :key="i.path" :index="`/view/${item.path}/${i.path}`">
               <el-icon><component :is="i.meta.icon" /></el-icon>
               {{ i.meta.title }}
            </el-menu-item>
         </el-sub-menu>
      </div>
   </el-menu>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import MENU from '@/router/router';
import { onMounted, ref } from 'vue';
const menu = ref([]);
const router = useRouter();
const route = useRoute();
onMounted(() => {
   let arr = [];
   for (let i of MENU) {
      if (i.path == '/view') {
         arr = i.children;
         console.log(arr);
      }
   }
   menu.value = arr;
});
const handleOpen = (key: string, keyPath: string[]) => {
   console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
   console.log(key, keyPath);
};
</script>

<style lang="scss" scoped></style>
