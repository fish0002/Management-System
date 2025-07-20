# 后台开发模板

## 技术栈

**Vue 3 + Ts + Vite**

```bash
# 初始化
pnpm create vite@latest
pnpm add vue-router@4
pnpm i vue-router-tab -S
pnpm install pinia
pnpm install sass sass-loader --save-dev
pnpm install axios
pnpm install element-plus
pnpm install -D unplugin-vue-components unplugin-auto-import
```

## 项目启动

```bash
# 安装依赖
npm install

# 启动项目
npm run dev

# 打包项目
npm run build
```

## 项目使用核心库

```bash
# axios
# vue-router
# pinia
# element-plus
# vue-router-tab
# echarts
# sass
# element-plus [https://element-plus.org/zh-CN/component/overview.html]
```

## 路由结构

- 首页
- 用户管理（管理员才能访问）
- 管理中心
- 题目管理（用户和管理员都能访问）
- 提交答案管理（用户和管理员都能访问）
- 评论管理（用户和管理员都能访问）

### day-01

- 路由搭建 -.-
- 页面搭建 -.-
- 动态路由 -.-
- 权限校验

## 目录结构

├── src
│ ├── api
│ ├── assets
│ ├── components
│ ├── config
│ ├── icons
│ ├── layout
│ ├── router
│ ├── store
│ ├── styles
│ ├── utils
│ ├── views
│ ├── App.vue
│ ├── main.js
├── .env.development
├── .env.production
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── package.json
├── README.md
