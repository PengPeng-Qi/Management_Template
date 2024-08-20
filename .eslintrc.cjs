/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true, // 在开发过程中进行 eslint 检查
  },
  // 继承某些已有的规则
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  /**
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint (@see: https://eslint.org/docs/latest/rules/)
    "eqeqeq": "error", // 使用严格相等符号
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行

    // typeScript (https://typescript-eslint.io/rules)
    // "@typescript-eslint/prefer-ts-expect-error": "error", // 禁止使用 @ts-ignore
    // '@typescript-eslint/ban-ts-comment': 'error' // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
    "@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量

    // vue (https://eslint.vuejs.org/rules)
    "vue/no-mutating-props": "error", // 不允许改变组件 prop
    "vue/attribute-hyphenation": "error", // 对模板中的自定义组件强制执行属性命名样式：my-prop="prop"
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};
