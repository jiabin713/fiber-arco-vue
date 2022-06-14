import { RouteRecordRaw, createRouter, createWebHistory, useRoute } from 'vue-router';

import dashboard from './modules/dashboard';
import exception from './modules/exception';

// 存放动态路由
export const asyncRouterList: Array<RouteRecordRaw> = [dashboard, exception];

// 存放固定的路由
const defaultRouterList: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/dashboard/workplace',
    component: () => import('@/layouts/blank-layout/index.vue'),
  },
  {
    path: '/:w+',
    name: '404Page',
    redirect: '/exception/404',
  },
];

export const allRoutes = [...defaultRouterList, ...asyncRouterList];

const router = createRouter({
  history: createWebHistory(),
  routes: allRoutes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
