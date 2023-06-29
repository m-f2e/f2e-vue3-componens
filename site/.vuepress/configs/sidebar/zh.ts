import type { SidebarConfig } from '@vuepress/theme-default'

export const sideZh: SidebarConfig = {
  '/guide/': [
    {
      text: '指南',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/markdown.md',
      ],
    },
  ],
  '/zh/components/': [
    {
      text: '组件',
      children: [
        {
          text: 'MButton',
          link: '/zh/components/button/',
        }
      ]
    },
    {
      text: '组件2',
      // link: '/components/',
    }
  ]
}