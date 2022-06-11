import { DEFAULT_LAYOUT } from '@/router/constants';

export default [
  {
    path: '/dashboard',
    component: DEFAULT_LAYOUT,
    redirect: '/dashboard/workplace',
    name: 'dashboard',
    meta: { title: '仪表盘', icon: 'dashboard' },
    children: [
      {
        path: 'workplace',
        name: 'Workplace',
        component: () => import('@/views/dashboard/workplace/index.vue'),
        meta: { title: '工作区' },
      },
      {
        path: 'monitor',
        name: 'Monitor',
        component: () => import('@/views/dashboard/monitor/index.vue'),
        meta: { title: '统计监控' },
      },
    ],
  },
];
