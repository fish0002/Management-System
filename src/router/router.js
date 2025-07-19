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
      path: '/view',
      component: () => import('@/layout/index.vue'),
      meta: {},
      children: [
         {
            path: 'home',
            component: () => import('@/view/home/home.vue'),
            meta: { title: '主页', icon: 'House' }
         },
         {
            path: 'admin',
            component: () => import('@/view/admin/admin.vue'),
            meta: { title: '用户管理', icon: 'User' }
         },
         {
            path: 'manage',
            component: () => import('@/view/manage/index.vue'),
            meta: { title: '管理中心', icon: 'Setting', level: true },
            children: [
               {
                  path: 'answer',
                  component: () => import('@/view/manage/answer/answer.vue'),
                  meta: { title: '提交答案管理', icon: 'EditPen' }
               },
               {
                  path: 'question',
                  component: () => import('@/view/manage/question/question.vue'),
                  meta: { title: '题目管理', icon: 'Tickets' }
               },
               {
                  path: 'comment',
                  component: () => import('@/view/manage/comment/comment.vue'),
                  meta: { title: '评论管理', icon: 'ChatDotRound' }
               },
               {
                  path: 'comment',
                  component: () => import('@/view/manage/comment/comment.vue'),
                  meta: { title: '评论管理1', icon: 'ChatDotRound' }
               }
            ]
         }
      ]
   }
];
export default routes;
