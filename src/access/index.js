import router from '../router/index';
import { useStore } from '../store/user';

/***
 * 未登录 undefined
 * 普通用户 user
 * 管理员 admin
 */
router.beforeEach((to, from, next) => {
   //拿到用户信息
   const store = useStore();
   const role = store.userinfo.userRole;
   console.log('用户权限', role);
   console.log('页面权限', to.meta.role);
   //判断跳转页是否需要权限，不需要就放行
   //放行不需要权限的页面
   if (undefined === to.meta.role) {
      return next();
   }

   //页面都有权限
   //判断是否登录，未登录跳转到登陆页面
   if (role == 'NOLOGIN') {
      return next('/login');
   }

   //判断是管理员 放行

   if (role == 'admin') {
      return next();
   }

   //判断是用户
   if (role == 'user') {
      // 根据你跳转的页面的权限放行
      if (to.meta.role == 'user') {
         return next();
      } else {
         return next('/notfound');
         //拦截
      }
   }

   next();
});
