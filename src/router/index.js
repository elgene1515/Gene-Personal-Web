import { createRouter, createWebHistory } from 'vue-router'
import samplepage from '@/components/pages/samplepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: samplepage,
    },
  ],
})

export default router
