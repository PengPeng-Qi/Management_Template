module.exports = {
  root: true,

  env: {
    node: true, // 为 ESLint 提供内置的 NodeJS 的全局变量
  },

  /**
   * 插件可以提供额外的规则、环境、解析器等
   *
   * 解析器：将 Vue 、Ts 等解析为 ESLint 支持的语法
   */
  plugins: [
    "vue", // Vue 插件，提供了解析器解析 Vue 的 <template> <script> 等、还有规则集等
    "@typescript-eslint", // TypeScript 插件，提供 TS 的解析器及规则集等
    "security", // 安全插件
  ],

  // 继承某些已有的规则，需要注意顺序
  extends: [
    "eslint:recommended", // 配置预设，eslint 官方推荐基础规则集
    "plugin:vue/vue3-essential", // eslint-plugin-vue 插件中 vue3 基本规则集
    "@vue/eslint-config-typescript", // vue 官方提供的 ts 规则集
    "@vue/eslint-config-prettier/skip-formatting", // 跳过 ESLint 的格式化
    "plugin:security/recommended-legacy", // eslint-plugin-security 插件中的安全性基本规则集
  ],

  /**
   * 配置规则
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint (@see: https://eslint.org/docs/latest/rules/)
    "eqeqeq": "error", // 使用严格相等符号
    "no-var": "error", // 要求使用 let 或 const 而不是 var

    // typeScript (@see: https://typescript-eslint.io/rules)
    "@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量

    // vue (@see: https://eslint.vuejs.org/rules)
    "vue/no-mutating-props": "error", // 不允许改变组件 prop
    "vue/attribute-hyphenation": "error", // 对模板中的自定义组件强制执行属性命名样式：my-prop="prop"

    // eslint-plugin-security (@see: https://www.npmjs.com/package/eslint-plugin-security)
    "security/detect-object-injection": "off", // 允许使用 obj[xxx] 的形式
  },
};
