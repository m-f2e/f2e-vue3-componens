import type { App, Plugin } from 'vue'
import MSelect from './select'

MSelect.install = (app: App) => {
  app.component(MSelect.name, MSelect)
}

export default MSelect as typeof MSelect & Plugin