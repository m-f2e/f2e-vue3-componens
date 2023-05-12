import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import * as navbar from './configs/navbar'
import * as sidebar from './configs/sidebar'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { codeBlockPlugin } from '@yanyu-fe/vuepress-plugin-code-block'
import { resolve } from 'path'

export default defineUserConfig({
  lang: 'zh-CN',
	title: '前端组件库',
  description: '这是我的第一个 VuePress 站点',
	base: process.env.NODE_ENV === 'production' ? '/f2e-vue3-componens' : '/',
	plugins: [codeBlockPlugin()],
	locales: {
    '/': {
			lang: 'zh-CN',
			title: 'vue3-ui',
		},
    '/en/': {
      lang: 'en-Us',
      title: 'ui-design',
    },
	},
	theme: defaultTheme({
		locales: {
			'/': {
        selectLanguageText: '语言',
        selectLanguageName: '简体中文',
				navbar: navbar.zh,
				sidebar: sidebar.zh,
			},
      '/en/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        navbar: navbar.en,
				sidebar: sidebar.en,
      },
		},
	}),
	bundler: viteBundler({
		viteOptions: {
			plugins: [vueJsx()],
			resolve: {
				alias: {
					'@m-f2e/vue3-ui/style': resolve(
						__dirname,
						'../../packages/components/src/style.ts'
					),
					'@m-f2e/vue3-ui': resolve(__dirname, '../../packages/components/src/index.ts'),
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
