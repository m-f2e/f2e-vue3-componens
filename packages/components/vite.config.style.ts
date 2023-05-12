import { defineConfig } from 'vite'
import fg from 'fast-glob'

// 遍历所有组件的样色
const files = fg.sync('**/style/index.ts', {
  cwd: process.cwd(),
  onlyFiles: true,
})

export default defineConfig({
	build: {
		target: 'modules',
		// 打包文件目录
		outDir: 'es',
    emptyOutDir: false,
		// 压缩
		minify: false,
		// css分离
		// cssCodeSplit: true,
    lib: { // 不会用到
			entry: 'src/style.ts',
			// formats: ['es', 'cjs'],
		},
		rollupOptions: {
			// 忽略打包vue文件
			external: (id) => {
        if (id.endsWith('.less')) {
          return true
        }
        return false
      },
			input: files,
			output: [
				{
					format: 'es',
          // 配置打包根目录
					dir: 'es',
					// 不用打包成.es.js,这里我们想把它打包成.js
					entryFileNames: '[name].js',
					// 让打包目录和我们目录对应
					preserveModules: true,
					preserveModulesRoot: 'src',
				},
				{
					format: 'cjs',
          // 配置打包根目录
					dir: 'lib',
					entryFileNames: '[name].js',
					// 让打包目录和我们目录对应
					preserveModules: true,
					preserveModulesRoot: 'src',
				},
			],
		},
	},
  plugins: [
    {
      name: 'vite-plugin-style',
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle)
        for (const key of keys) {
          const bundler: any = bundle[key]
          bundler.code = bundler.code.replace('./style/index.less', '../../style/index.less')
          bundler.code = bundler.code.replace('../../index.less', './index.less')
          this.emitFile({
            type: 'asset',
            fileName: key,
            source: bundler.code.replace(/\.less/g, '.css'),
            // fileName: key.replace('index.js', 'css.js'),
            // source: bundler.code.replace(/\.less/g, '.css'),
          })
        }
      }
    }
  ]
})


// export default defineConfig({
//   plugins: [
//     vue(),
//     dts({ // 生成类型
//       // 指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
//       tsConfigFilePath: '../../tsconfig.json'
//     }),
//     // 因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
//     dts({
//       outputDir:'lib',
//       tsConfigFilePath: '../../tsconfig.json'
//     })
//   ],
// 	build: {
// 		target: 'modules',
// 		// 打包文件目录
// 		outDir: 'es',
// 		// 压缩
// 		minify: false,
// 		// css分离
// 		// cssCodeSplit: true,
//     lib: {
// 			entry: './index.ts',
// 			formats: ['es', 'cjs'],
// 		},
// 		rollupOptions: {
// 			// 忽略打包vue文件
// 			external: ['vue'],
// 			input: ['src/index.ts'],
// 			output: [
// 				{
// 					format: 'es',
// 					// 不用打包成.es.js,这里我们想把它打包成.js
// 					entryFileNames: '[name].js',
// 					// 让打包目录和我们目录对应
// 					preserveModules: true,
// 					// 配置打包根目录
// 					dir: 'es',
// 					preserveModulesRoot: 'src',
// 				},
// 				{
// 					format: 'cjs',
// 					entryFileNames: '[name].js',
// 					// 让打包目录和我们目录对应
// 					preserveModules: true,
// 					// 配置打包根目录
// 					dir: 'lib',
// 					preserveModulesRoot: 'src',
// 				},
// 			],
// 		},
// 	},
// })
