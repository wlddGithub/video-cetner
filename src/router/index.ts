import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '../views/HomeView.vue'
import PersonalView from '../views/PersonalView.vue'
import SearchView from '../views/SearchView.vue'
import VideoDetailView from '@/views/VideoDetailView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/personal',
          name: 'Personal',
          component: PersonalView
        },
        {
          path: '/search',
          name: 'Search',
          component: SearchView
        },
        {
          path: '/videoDetail',
          name: 'VideoDetail',
          component: VideoDetailView
        }
      ]
    }
  ]
})

export default router
