import NProgress from 'nprogress'; // progress bar
import { Router } from 'vue-router';
import { useUserStore } from '@/store';

export const setupPermissionGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const userStore = useUserStore();
    const { user } = userStore;
    if (user) {
      const { permissions } = user;
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
