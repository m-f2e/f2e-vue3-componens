import { App } from 'vue'
import * as components from './components'

export * from './components'

// const install = (app: any) => {
// 	for (const comKey in components) {
// 		app.component((components as any)[comKey].name, (components as any)[comKey])
// 	}
// }

export default {
	install(app: App) {
    for (const comKey in components) {
      // @ts-ignore
      const com = components[comKey];
      if (com.install) {
        app.use(com)
      }
    }
  }
}
