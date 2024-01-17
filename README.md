# management-portal-template

前端基础公共模板

## 技术栈 🪜

- 技术栈：`Vue3` + `TypeScript` + `Vite` + `Axios` + `Pinia` + `Vue Router`
- UI框架：`Element Plus`
- 项目构建与代码管理：`Eslint` + `Prettier` + `Husky` + `Lint-Staged` + `CommitLint` + `Commitizen`

## 项目功能 🔨

1. 自动集成 `Vue`、`Vue Router` 和 `Pinia` API
2. 自动导入 `src/components` 目录下的公共组件
3. 允许自定义组件的 `name` 属性
4. 实现 `Element Plus` 的按需加载，并支持自定义主题色
5. 在 `git commit` 前自动执行 `eslint` 和 `prettier` 代码规范检查
6. 在 `git commit` 时校验提交信息的规范性
7. 支持 `production` 和 `development` 环境的不同配置
8. 实现 `pinia` 状态管理的持久化
9. 配置了 `axios` 实例，支持静态和动态路由配置
10. 初始化路由信息，包含路由守卫
11. 通过插件全局注册了自定义指令
12. 路由切换时显示进度条
13. 支持根据不同环境配置是否移除 `console.log` 和 `debugger`
14. 推荐适用于 `VSCode` 的插件
15. 包含自定义的 404 错误页面
16. 集成国际化配置
