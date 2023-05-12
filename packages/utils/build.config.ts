import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index',
  ],
  declaration: true, // 生成类型
  rollup: {
    emitCJS: true,
  },
})