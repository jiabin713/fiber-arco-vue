import NProgress from 'nprogress';
import { Router } from 'vue-router';
import { useUserStore } from '@/store';

const whiteList = [
  {
    name: 'login',
  },
  {
    name: 'notFound',
  },
];

export const setupPermissionGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const userStore = useUserStore();
    const { userInfo } = userStore;
    if (userInfo) {
      const { permissions } = userInfo;
      if (permissions.includes(to.meta.permission)) {
        next();
      } else {
        next({ name: '403' });
      }
    } else {
      next({ name: 'login' });
    }
  });
};
