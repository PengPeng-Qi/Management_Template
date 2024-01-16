import App from './App.vue'
import router from './router'
import pinia from '@/stores'
// global directives
import directivesPlugin from './directives'
// reset css
import '@/styles/reset.css'
// common css
import '@/styles/common.scss'
// customized element style
import '@/styles/element/index.scss'
// element icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 全局注册 element icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia).use(router).use(directivesPlugin).mount('#app')
