import Vue from 'vue'
import VueRouter from 'vue-router'

import music from '../components/music.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: music }
]

const router = new VueRouter({
    routes
})

export default router