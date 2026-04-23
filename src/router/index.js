import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Home - My Portfolio",
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "About - My Portfolio",
      },
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkView.vue'),
      meta: {
        title: "Work - My Portfolio",
      },
    }
  ],
})


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})


export default router
