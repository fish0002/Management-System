const routes = [
   {
      path: '/login',
      component: () => import('@/view/user/login.vue')
   },
   {
      path: '/notfound',
      component: () => import('@/view/system/not-found.vue')
   },
   {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/view/system/not-found.vue')
   },
   {
      path: '/view', //后台
      component: () => import('@/layout/index.vue'),
      meta: {
         role: 'user'
      },
      children: [
         {
            path: 'home',
            component: () => import('@/view/home/home.vue'),
            meta: { title: '主页', icon: 'House', role: 'user' }
         },
         {
            path: 'admin',
            component: () => import('@/view/admin/admin.vue'),
            meta: { title: '用户管理', icon: 'User', role: 'admin' }
         },
         {
            path: 'manage',
            component: () => import('@/view/manage/index.vue'),
            meta: { title: '管理中心', icon: 'Setting', level: true, role: 'user' },
            children: [
               {
                  path: 'answer',
                  component: () => import('@/view/manage/answer/answer.vue'),
                  meta: { title: '提交答案管理', icon: 'EditPen', role: 'user' }
               },
               {
                  path: 'question',
                  component: () => import('@/view/manage/question/question.vue'),
                  meta: { title: '题目管理', icon: 'Tickets', role: 'user' }
               },
               {
                  path: 'comment',
                  component: () => import('@/view/manage/comment/comment.vue'),
                  meta: { title: '评论管理', icon: 'ChatDotRound', role: 'user' }
               }
            ]
         }
      ]
   }
];
export default routes;
