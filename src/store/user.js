import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore('counter', () => {
   const userinfo = ref({
      userRole: 'NOLOGIN' //未登录
   });
   const setuser = user => {
      userinfo.value = user;
   };
   return { userinfo, setuser };
});
