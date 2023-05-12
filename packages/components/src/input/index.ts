import { App } from 'vue';
import MInput from './index.vue';

MInput.install = (app: App) => {
  app.component(MInput.name, MInput)
}

export default MInput
