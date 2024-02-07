import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user.ts';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { auth: true },
      component: () => import('../components/layouts/Mainlayout.vue'),
      children: [
        {
          path: '',
          meta: { auth: true },
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'accounts',
          name: 'accounts',
          meta: { auth: true },
          component: () => import('../components/layouts/Accountslayout.vue'),
          children: [
            {
              path: '',
              name: 'default',
              meta: { auth: true },
              component: () => import('../views/AccountsView.vue')
            },
            {
              path: 'list',
              name: 'acc_list',
              meta: { auth: true },
              component: () => import('../views/ListAccountsView.vue'),
            },
            {
              path: 'register',
              name: 'acc_register',
              meta: { auth: true },
              component: () => import('../views/RegisterView.vue'),
            },
            {
              path: 'update',
              name: 'update_acc',
              meta: { auth: true },
              component: () => import('../views/UpdateAccoutView.vue'),
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    // Always leave this as last one,
    // but you can also remove it
    {
      path: '/:catchAll(.*)*',
      component: () => import('../views/NotFound.vue'),
    },
  ]
});

router.beforeEach((to: any, from: any, next: any) => {
  const userStore = useUserStore();
  if (to.meta.auth && !userStore.is_authenticated) {
    next({ name: 'login' });
  } else if (!to.meta.auth && userStore.is_authenticated) {
      next('/');
  } else {
    next();
  }
});

export default router
