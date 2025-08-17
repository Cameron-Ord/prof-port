import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/About' },
    { path: '/About', name: 'About', component: AboutPage },
    { path: '/Contact', name: 'Contact', component: ContactPage },
    { path: '/Projects', name: 'Projects', component: ProjectsPage },
  ],
})

export default router
