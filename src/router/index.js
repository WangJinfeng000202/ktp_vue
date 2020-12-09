import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
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
        name: 'Index',
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
    path: '/members/:id',
    name: 'Members',
    component: () => import('@/views/Members')
  }
  ,
  {
    path: '/Student',
    name: 'Student',
    component: () => import('@/views/student/course'),
    children: [
      {
      path: 'interact/:id',
      name: 'Interact',
      component: () => import('@/views/student/interact')
      },
      {
        path: 'courseWork/:id',
        name: 'CourseWork',
        component: () => import('@/views/student/courseWork')
      }
    ]
  },
  {
    path: '/detail/:cid',
    name: 'Detail',
    component: () => import('@/views/student/courseWorkDetail'),
    children: [
      {
        path: 'submit/:id',
        name: 'Submit',
        component:() => import('@/views/student/submit')
      }]
  },
  {
    path: '/markTalk/:cid/',
    name: 'MarkTalk',
    component: () => import('@/views/teacher/markTalk'),
    children: [{
      path: 'markScore/:id',
      name: 'MarkScore',
      component: () => import('@/views/teacher/markScore'),
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
