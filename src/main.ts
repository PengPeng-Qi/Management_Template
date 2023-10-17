import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// reset css
import '@/styles/reset.css'
// customized element style
import '@/styles/element/index.scss'
// element icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 全局注册 element icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia()).use(router).use(ElementPlus).mount('#app')
