import { fileURLToPath, URL } from "node:url";
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const ENV = loadEnv(mode, process.cwd());

  return {
    base: ENV.VITE_PUBLIC_URL /* 如果应用被部署在一个子路径下，比如 https://www.xxx.com/my-app/，这时需要将 base 设置为 /my-app/，这样 Vite 打包后的资源文件路径都会正确地指向该子路径。 */,
    server: {
      host: true /* 默认情况下，开发服务器仅接受开发者本地连接，如果设置 host 则可以接收外部服务器连接 */,
      open: ENV.VITE_OPEN /* 开发服务器启动时，浏览器是否自动打开浏览器进行访问 */,
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router", "pinia"],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      vueSetupExtend() /* 提供修改单文件组件 name 能力 */,
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    esbuild: {
      pure: ENV.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : [] /* 移除项目中所有的 console.log，debugger 函数 */,
    },
  };
});
