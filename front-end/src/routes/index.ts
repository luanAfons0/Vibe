import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/:pathMatch(.*)*', name: 'Not Found', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
