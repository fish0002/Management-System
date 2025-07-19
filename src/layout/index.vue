<template>
   <div class="common-layout">
      <el-container>
         <el-aside width="200px">
            <div class="box" style="height: 100vh; background: #545c63">
               <Aside></Aside>
            </div>
         </el-aside>
         <el-container>
            <el-header>
               <Header></Header>
            </el-header>
            <el-main>
               <Main></Main>
            </el-main>
         </el-container>
      </el-container>
   </div>
</template>

<script setup lang="ts">
import Aside from './Components/Aside.vue';
import Header from './Components/Header.vue';
import Main from './Components/Main.vue';
</script>

<style lang="scss" scoped>
:deep() {
   .el-header {
      padding: 0 !important;
   }
   .el-container {
      height: 100vh;
   }
   .el-menu {
      border-right: 0 !important;
   }
}
</style>
