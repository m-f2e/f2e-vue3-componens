---
home: true
heroImage: https://vuejs.org/images/logo.png
heroText: Vue3中后台UI组件库
tagline: 基于vue3、Vite构建
actions:
  - text: 快速上手
    link: /guide/getting-started.md
    type: primary
  - text: 项目简介
    link: guide/
    type: secondary
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue 驱动
    details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2023 MZ
---

en version

<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash
# install in your project
pnpm add -D vuepress@next @vuepress/client@next vue

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
pnpm vuepress dev

# build to static files
pnpm vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
# install in your project
yarn add -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
yarn vuepress dev

# build to static files
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash
# install in your project
npm install -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
npx vuepress dev

# build to static files
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>