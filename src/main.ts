import { createApp } from 'vue'
import App from './App.vue'


//挂载less
import '@/assets/less/index.less'

//引入dark css
import 'element-plus/theme-chalk/dark/css-vars.css'

//挂载vue-router
import router from './router'

//挂载element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//挂载element-plus-icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入pinia
import { createPinia } from 'pinia'


//引入mockjs
import './api/mock'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

 
