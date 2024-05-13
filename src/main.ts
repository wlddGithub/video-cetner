// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Tabbar, TabbarItem, Search, NavBar } from 'vant'

import 'vant/lib/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

app.use(router)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(NavBar)

app.mount('#app')
