import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true /* 默认情况下，开发服务器仅接受开发者本地连接，如果设置 host 则可以接收外部服务器连接 */,
    open: true /* 开发服务器启动时，浏览器将自动打开浏览器进行访问 */
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
