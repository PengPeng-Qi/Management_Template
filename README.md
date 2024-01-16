# management-portal-template

前端基础公共模板

## 技术栈

- 技术选型：`Vue3` + `TypeScript` + `Vite` + `Axios` + `Pinia` + `Vue Router`
- UI库：`Element Plus`
- 项目脚手架：`Eslint` + `Prettier` + `Husky` + `Lint-Staged` + `CommitLint` + `Commitizen`

## 基本功能

1. 自动引入 `Vue`、`Vue Router`, `Pinia` API
2. 自动引入 `src/components` 文件夹下的公共组件
3. 支持修改组件的 `name` 属性
4. 按需引入 `Element Plus`、且支持主题色定制化
5. 支持 `git commit` 前对代码进行 `eslint`、`prettier` 规范化
6. 支持 `git commit` 时针对 `message` 信息进行规范校验
7. 支持 `production` 、 `development` 不同环境配置
8. 支持持久化 `pinia`
9. 已初始化 `axios` 实例，支持静态路由、动态路由配置
10. 已初始化路由信息，含前置路由、后置路由拦截
11. 已使用 `plugin` 全局注册 `directive` 指令
12. 支持路由切换进度条显示
13. 支持配置不同环境打包后是否移除 `console.log`、`debugger` 等配置信息
14. 包含 `VSCode` 插件推荐
15. 包含 404 页面
