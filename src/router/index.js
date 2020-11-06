import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Main',
    name: 'main',
    component: () => import('@/views/main'),
    children:[{
      path:'index',
      name:'',
      component: ()=> import('@/views/courseList')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
