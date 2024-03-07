import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(vxeTable)
app.use(router)
app.mount('#app')
