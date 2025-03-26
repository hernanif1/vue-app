import { createRouter, createWebHistory } from 'vue-router'
import ExtensionsView from '@/views/ExtensionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ExtensionsView,
    },
  ],
})

export default router
