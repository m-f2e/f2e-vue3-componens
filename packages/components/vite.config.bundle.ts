import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vueJsx(), vue()],
	build: {
		// 打包文件目录
		outDir: 'dist',
    emptyOutDir: false,
		// 压缩
		minify: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['umd', 'cjs', 'es'],
      name: 'vue3UI',
    },
		rollupOptions: {
			// 忽略打包vue文件
			external: ['vue'],
			output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
        },
      }
		},
	},
})