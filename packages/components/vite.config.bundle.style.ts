import { defineConfig } from 'vite'
import fg from 'fast-glob'

const files = fg.sync('**/style/index.ts', {
  cwd: process.cwd(),
  onlyFiles: true,
})

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'dist',
    emptyOutDir: false,
    minify: false,
    lib: {
      entry: './src/style.ts',
      formats: ['umd', 'cjs', 'es'],
      name: 'vue3UI',
    },
    rollupOptions: {
      input: files,
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
        },
      },
    },
  },
})