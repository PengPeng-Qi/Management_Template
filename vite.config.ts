import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true /* 默认情况下，开发服务器仅接受开发者本地连接，如果设置 host 则可以接收外部服务器连接 */,
    open: true /* 开发服务器启动时，浏览器将自动打开浏览器进行访问 */
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia']
    }),
    Components({}),
    vueSetupExtend() /* 提供修改单文件组件 name 能力 */,
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')] /* 指定需要缓存的图标文件夹 */,
      symbolId: 'icon-[dir]-[name]' /* 指定symbolId格式 */
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
