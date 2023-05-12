## 技术栈
  - vue3
  - jsx
  - vite
  - vuepress
  - unbuild
  - vitest
  - typescript

## 工程结构
由pnpm `workspace` 管理的
```js
  -example // 测试demo
  -packages
    -components // UI组件库
    -utils // 工具库
  -site // UI组件站点
```

## 发包
发布需要使用pnpm, pnpm7之后提供了`-F`（--filter的简写）
```js
  pnpm publish -F @m-f2e/vue3-ui
```

## 更新包
`-r` 遍历所有项目更新
```js
  pnpm up -r 
```