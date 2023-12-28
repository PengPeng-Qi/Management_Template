import App from './App.vue'
import router from './router'
import pinia from '@/stores'
// global directives
import directivesPlugin from './directives'
// custom icons library
import 'virtual:svg-icons-register'
// reset css
import '@/styles/reset.css'
// customized element style
import '@/styles/element/index.scss'
// element icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

console.log(
  `%c Current Mode: %c ${import.meta.env.MODE} `,
  'background: #41b883; color: #fff; border-radius: 3px;',
  'font-weight: 700;'
)

const app = createApp(App)
// 全局注册 element icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia).use(router).use(directivesPlugin).mount('#app')
