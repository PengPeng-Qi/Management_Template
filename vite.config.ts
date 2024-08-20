import vue from "@vitejs/plugin-vue";
import { codeInspectorPlugin } from "code-inspector-plugin";
import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from "vite";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import { wrapperEnv } from "./build/getEnv";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const ENV = wrapperEnv(env);

  return {
    base: ENV.VITE_PUBLIC_URL /* 如果应用被部署在一个子路径下，比如 https://www.xxx.com/my-app/，这时需要将 base 设置为 /my-app/，这样 Vite 打包后的资源文件路径都会正确地指向该子路径。 */,
    server: {
      host: true /* 默认情况下，开发服务器仅接受开发者本地连接，如果设置 host 则可以接收外部服务器连接 */,
      open: ENV.VITE_OPEN /* 开发服务器启动时，浏览器是否自动打开浏览器进行访问 */,
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;`,
        },
      },
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router", "pinia"],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: "sass" })], // 自定义 ElementPlus 主题色
      }),
      vueSetupExtend() /* 提供修改单文件组件 name 能力 */,
      codeInspectorPlugin({ bundler: "vite" }) /** 提供在网页上找到源代码的能力 */,
    ],
    esbuild: {
      pure: ENV.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : [] /* 移除项目中所有的 console.log，debugger 函数 */,
    },
    build: {
      // 禁用 gzip 压缩大小报告，可略微减少打包时间
      reportCompressedSize: false,
      // 规定触发警告的 chunk 大小 (kB 为单位，默认 500)
      chunkSizeWarningLimit: 500,
      sourcemap: true,
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name]-[hash].js", // 引入文件名的名称
          entryFileNames: "assets/js/[name]-[hash].js", // 包的入口文件名称
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]", // 静态文件 图片、字体等
          manualChunks(id) {
            // 将第三方所有依赖放入 vendor 文件中
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
    },
  };
});
