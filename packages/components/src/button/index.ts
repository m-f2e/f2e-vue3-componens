import type { App, Plugin } from 'vue'
import MButton from './button'

MButton.install = (app: App) => {
  app.component(MButton.name, MButton)
}

export default MButton as typeof MButton & Plugin