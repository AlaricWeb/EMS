import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'
import "@/assets/css/main.scss"
const app = createApp(App)
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(ElementPlus)
app.use(vxeTable)
app.use(router)
app.mount('#app')

