import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ui from './components/library'

// 1. 重置样式的库
import 'normalize.css'
// 2. 自己项目的重置样式和公共样式
import '@/assets/styles/common.less'

// 创建一个vue应用实例
createApp(App).use(store).use(router).use(ui).mount('#app')
