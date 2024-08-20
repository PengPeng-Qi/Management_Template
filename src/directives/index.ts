import type { Directive } from "vue";

const directivesList: { [key: string]: Directive } = {};

/**
 * 注册多个自定义指令的插件
 */
const directivesPlugin = {
  install(app: { directive: (arg0: string, arg1: Directive) => void }) {
    Object.keys(directivesList).forEach((key) => {
      app.directive(key, directivesList[key]);
    });
  },
};

export default directivesPlugin;
