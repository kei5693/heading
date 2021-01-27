import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../components/User.vue'
import Game from '../views/Game.vue'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'User',
    component: User
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/Todo',
    name: 'Todo',
    component: Todo
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
