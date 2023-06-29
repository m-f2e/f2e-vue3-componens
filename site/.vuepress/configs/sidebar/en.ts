import type { SidebarConfig } from '@vuepress/theme-default'

export const sideEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/markdown.md',
      ],
    },
  ],
  '/components/': [
    {
      text: 'Components',
      children: [
        {
          text: 'MButton',
          link: '/components/button/',
        }
      ]
    },
    {
      text: 'Components2',
      // link: '/components/',
    }
  ]
}