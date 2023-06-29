import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import { codeBlockPlugin } from '@yanyu-fe/vuepress-plugin-code-block'
import { getDirname, path } from '@vuepress/utils'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { navEn, navZh, sideEn, sideZh } from './configs'
// import { resolve } from 'path'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  // lang: 'zh-CN',
	// title: '前端组件库',
  // description: '这是我的第一个 VuePress 站点',
	base: process.env.NODE_ENV === 'production' ? '/f2e-vue3-componens/' : '/',
	plugins: [
    codeBlockPlugin(),
  ],
	locales: {
    '/': {
      lang: 'en-Us',
      title: 'vue3-ui',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
			lang: 'zh-CN',
			title: 'vue3-ui',
      description: '基于Vue3 Vite构建的UI组件库',
		},
	},
	theme: defaultTheme({
    docsDir: 'site',
		locales: {
			'/': {
				navbar: navEn,
				sidebar: sideEn,
			},
      '/zh/': {
        navbar: navZh,
				sidebar: sideZh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
		},
	}),
	bundler: viteBundler({
		viteOptions: {
			plugins: [vueJsx()],
			resolve: {
				alias: {
					'@m-f2e/vue3-ui/style': path.resolve(
						__dirname,
						'../../packages/components/src/style.ts'
					),
					'@m-f2e/vue3-ui': path.resolve(__dirname, '../../packages/components/src/index.ts'),
				},
			},
			css: {
				preprocessorOptions: {
					less: {
						modifyVars: {
							'html-dark-selector': "~'html.dark'",
						},
					},
				},
			},
		},
	}),
})
