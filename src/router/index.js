import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import PublicLayout from "@/layouts/PublicLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        layout: PublicLayout,
        requiresAuth: false,
      }
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: Index,
      meta: {
        layout: PublicLayout,
        requiresAuth: false,
      }
    },
  ],
})

export default router
