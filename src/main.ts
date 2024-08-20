import pinia from "@/stores";
import App from "./App.vue";
import router from "./router";
// global directives
import directivesPlugin from "./directives";
// reset css
import "@/styles/reset.css";
// common css
import "@/styles/common.scss";
// customized element style
import "@/styles/element/index.scss";
// element icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// vue i18n
import I18n from "@/languages/index";

const app = createApp(App);
// 全局注册 element icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia).use(router).use(I18n).use(directivesPlugin).mount("#app");
