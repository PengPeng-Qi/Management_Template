/**
 * staticRoutes (静态页面路由)
 */
export const staticRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/IndexView.vue"),
  },
];

/**
 * errorRoutes (错误页面路由)
 */
export const errorRoutes = [
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/errors/NotFound.vue"),
    meta: {
      title: "404 页面",
    },
  },
];
