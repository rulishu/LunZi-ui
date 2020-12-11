import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Frank1 from './components/Frank1.vue'
import  Frank2 from './components/frank2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path: '/', component: Frank1},
        {path: '/xxx', component: Frank2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
