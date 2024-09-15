import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ExploreView from '@/views/ExploreView.vue'
import MessagesView from '@/views/MessagesView.vue'
import SavedItemsView from '@/views/SavedItemsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/explore', name: 'Explore', component: ExploreView },
  { path: '/messages', name: 'Messages', component: MessagesView },
  { path: '/saved-items', name: 'Saved items', component: SavedItemsView },
  { path: '/profile', name: 'Profile', component: ProfileView },
  { path: '/:pathMatch(.*)*', name: 'Not Found', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
