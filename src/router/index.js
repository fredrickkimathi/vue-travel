import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Brazil from '../views/Brazil.vue'
// import Kenya from '../views/Kenya.vue'
// import Hawaii from '../views/Hawaii.vue'
// import Jamaica from '../views/Jamaica.vue'
// import Panama from '../views/Panama.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/brazil',
    name:'brazil',
    component: () => import(/* webpackChunkName: "brazil" */ '../views/Brazil.vue')
  },
  
  {
    path:'/hawaii',
    name:'hawaii',
    component: () => import(/* webpackChunkName: "hawaii" */  '../views/Hawaii.vue')
  },
  {
    path:'/jamaica',
    name:'jamaica',
    component: () => import(/* webpackChunkName: "jamaica" */ '../views/Jamaica.vue')
  },
  {
    path:'/panama',
    name:'panama',
    component: () => import(/* webpackChunkName: "panama" */ '../views/Panama.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
