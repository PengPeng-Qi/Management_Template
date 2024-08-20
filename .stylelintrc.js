// @see: https://stylelint.io

module.exports = {
  root: true,

  // 继承某些已有的规则
  extends: [
    "stylelint-config-standard", // 使用标准配置
    "stylelint-config-standard-scss", // 使用标准的 SCSS 配置
    "stylelint-config-recess-order", // 使用 Recess 风格的 CSS 属性顺序配置
  ],
  overrides: [
    // 识别 .vue/html 文件中的 <style> 标签内的样式
    {
      files: ["**/*.{vue,html}"],
      customSyntax: "postcss-html",
    },
  ],
  rules: {
    "function-url-quotes": "always", // URL 必须包含引号
    "color-hex-length": "short", // 颜色的十六进制表示必须是简写形式
    "rule-empty-line-before": "never", // 规则之前不允许有空行
    "font-family-no-missing-generic-family-keyword": null, // 不检查字体家族是否缺少通用字体
    "scss/at-import-partial-extension": null, // 允许在 @import 中省略文件扩展名
    "selector-class-pattern": null, // 不强制选择器类名的格式
    "value-no-vendor-prefix": null, // 允许使用供应商前缀 (为了解决多行省略 -webkit-box)
    "no-descending-specificity": null, // 允许低特异性选择器覆盖高特异性选择器
    "value-keyword-case": null, // 不强制 value 关键字的大小写，解决在 scss 中使用 v-bind 大写单词报错
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "v-deep", "deep"], // 忽略这些未知的伪类选择器
      },
    ],
  },

  ignoreFiles: ["**/*.{js,jsx,tsx,ts,cjs,json,d.ts}", "dist/**"],
};
