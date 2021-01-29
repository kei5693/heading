import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../components/User.vue'
import Game from '../views/Game.vue'
import Todo from '../views/Todo.vue'
import TestRouter from '../views/TestRouter.vue'

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
    component: TestRouter
  },
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
