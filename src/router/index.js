import { createRouter, createWebHistory } from 'vue-router'
import PageRoot from '../views/PageRoot.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/PageRoot' },
    { path: '/PageRoot', name: 'Root', component: PageRoot },
  ],
})

export default router
