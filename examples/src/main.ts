import {createApp} from 'vue'
import App from './App.vue'
// 全部引入
// import MZVue3UI from '@m-f2e/vue3-ui'
// import '@m-f2e/vue3-ui/dist/style.css'

const app = createApp(App)

// 全局引入
// app.use(MZVue3UI)
app.mount('#app')