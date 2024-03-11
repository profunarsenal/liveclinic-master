import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/views/Services'),
  },
  {
    path: '/specialists',
    name: 'Specialists',
    component: () => import('@/views/Specialists')
  },
  {
    path: '/specialist',
    name: 'Specialist',
    component: () => import('@/views/Specialist')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('@/views/Info')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('@/views/Article')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/Contacts')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})

export default router;
