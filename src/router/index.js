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
      component: () => import('@/views/teacher/courseList')
    }]
  },
  {
    path: '/Teacher',
    name: 'teacher',
    component: () => import('@/views/teacher/course'),
    children: [{
      path: 'classInteract/:id',
      name: 'ClassInteract',
      component: () => import('@/views/teacher/interact')
    }, {
      path: 'assignment/:id',
      name: 'Assignment',
      component: () => import('@/views/teacher/assignment')
    }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
