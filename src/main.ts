import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// reset css
import '@/styles/reset.css'
// element css
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
