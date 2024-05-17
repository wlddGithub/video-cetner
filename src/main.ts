// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {
  Tabbar,
  TabbarItem,
  Search,
  NavBar,
  Tab,
  Tabs,
  Icon,
  Divider,
  Space,
  Image,
  Col,
  Row,
  ConfigProvider,
  TextEllipsis
} from 'vant'

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
app.use(Tab)
app.use(Tabs)
app.use(Icon)
app.use(Divider)
app.use(Space)
app.use(Image)
app.use(Row)
app.use(Col)
app.use(TextEllipsis)

app.mount('#app')
