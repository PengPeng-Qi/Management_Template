/**
 * staticRoutes (静态路由)
 */
export const staticRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  }
]
