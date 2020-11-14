import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name:'home',
  //   component: ()=>import('@/views/Home')
  // },
  {
    path: '/Main',
    name: 'main',
    component: () => import('@/views/main'),
    children: [{
      path: 'index',
      name: 'courses',
      component: () => import('@/views/courseList')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
