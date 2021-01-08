import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    name: 'Basic',
    component: () => import('@/components/basicComponent/index.vue'),
    redirect: 'home',
    children: [
      { path: 'home', component: () => import('@/views/Home.vue'), name: 'Home' }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
