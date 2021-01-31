import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../components/User.vue'
import Game from '../views/Game.vue'
import Todo from '../views/Todo.vue'
import TestRouter from '../views/TestRouter.vue'
import UsersDetail from '../views/UsersDetail.vue'
import UsersEdit from '../views/UsersEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'User',
    component: User
  },
  {
    path: '/Game',
    name: 'Game',
    component: Game
  },
  {
    path: '/Todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/TestRouter',        // /TestRouter
    //path: '/TestRouter/:userId',  // /TestRouter/4321
    name: 'TestRouter',
    beforeEnter: (to, from, next) => {
      // router를 로드 하기 전 실행
      //console.log(from, to)
      next()
      // next('/')
      // next('/User')
      /* 조건 분기
      if(isUserLogin === true){
        next()
      } else {
        next('/')        
      }
      */
    },
    component: TestRouter,
    children:[
      {
        path:":id",
        name:'users-detail',
        component: UsersDetail,
      },
      {
        path:":id/edit",
        name:'users-edit',
        component: UsersEdit,
      },
    ]
  },
  {
    path: '/redirect-me',
    redirect: '/Todo', //redirect: { name: 'Todo' }
  },
  {
    path: '/*',
    redirect: { name: 'User' }
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
