import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
import registerComponentsPlugin from '@vuepress/plugin-register-components'
import { codeBlockPlugin } from '@yanyu-fe/vuepress-plugin-code-block'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { head, navEn, navZh, sideEn, sideZh } from './configs'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

export default defineUserConfig({
  // lang: 'zh-CN',
	// title: '前端组件库',
  // description: '这是我的第一个 VuePress 站点',
	base: process.env.NODE_ENV === 'production' ? '/f2e-vue3-componens/' : '/',
  head,
	plugins: [
    codeBlockPlugin(),
    docsearchPlugin({
      appId: '34YFD9IUQ2',
      apiKey: '9a9058b8655746634e01071411c366b8',
      indexName: 'vuepress',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: resolve(__dirname, './components'),
    }),
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
