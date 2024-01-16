import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import NProgress from '@/config/nprogress'
import { staticRoutes } from './modules/staticRoutes'

const mode = import.meta.env.VITE_ROUTER_MODE

const routerMode = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory()
}

const router = createRouter({
  history: routerMode[mode](),
  routes: [...staticRoutes],
  strict: false /* 路由中对 '/' 进行严格匹配 */,
  scrollBehavior: () => ({ left: 0, top: 0 }) /* 切换路由滚动行为，每次切换路由都滚动到顶部 */
})

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
  // 1.NProgress 开始
  NProgress.start()

  // 2.动态设置标题
  const title = import.meta.env.VITE_Global_APP_TITLE
  document.title = to.meta.title ? `${to.meta.title} - ${title}` : title

  // 3.正常访问页面
  next()
})

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
  NProgress.done()
})

export default router
