import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register')
  },
  {
    path: '/Main',
    name: 'main',
    component: () => import('@/views/main'),
    children: [
      {
        path: 'index',
        name: 'courses',
        component: () => import('@/views/courseList')
      }
    ]
  },
  {
    path: '/Teacher',
    name: 'teacher',
    component: () => import('@/views/teacher/course'),
    children: [
      {
      path: 'classInteract/:id',
      name: 'ClassInteract',
      component: () => import('@/views/teacher/interact')
      },
      {
        path: 'assignment/:id',
        name: 'Assignment',
        component: () => import('@/views/teacher/assignment')
      }
    ]
  },
  {
    path: '/Student',
    name: 'student',
    component: () => import('@/views/student/course'),
    children: [
      {
      path: 'interact/:id',
      name: 'ClassInteract',
      component: () => import('@/views/student/interact')
      },
      {
        path: 'courseWork/:id',
        name: 'Assignment',
        component: () => import('@/views/student/courseWork')
      }
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/student/courseWorkDetail'),
    children: [
      {
        path: 'submit/:cid/:id',
        name: 'Submit',
        component:() => import('@/views/student/submit')
      }
      ]
  },
  {
    path: '/markScore/:cid/:id',
    name: 'MarkScore',
    component: () => import('@/views/teacher/markScore')
  },
  {
    path:'/sss',
    name:'sss',
    component:() => import('@/components/canvas')
  },
  {
    path:'/1/login',
    name:'sss',
    component:() => import('@/components/login')
  },{
    path:'/1/register',
    name:'sss',
    component:() => import('@/components/register')
  }
]

const router = new VueRouter({
  routes
})

export default router
