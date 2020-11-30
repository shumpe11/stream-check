import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Streamers from '../views/Streamers.vue'
import StreamersForm from '../views/StreamersFrom.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/streamers',
    name: 'streamers',
    component: Streamers
  },
  {
    path: '/streamers/:streamer_id?/edit',
    name: 'streamer_edit',
    component: StreamersForm
  },
  {
    path: '/about',
    name: 'about',
    
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
