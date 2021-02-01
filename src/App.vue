<template>
  <v-app>
      <v-content>
        <AppStatus />
        <div id="nav">
          <router-link to="/">User</router-link>
          <router-link to="/Todo">TodoList</router-link>
          <router-link to="/Game">Game</router-link>
          <!-- <router-link to="/TestRouter">TestRouter</router-link> -->
          <!-- 라우터와 함께 값을 전달, TestRouter/4321?group=member&category=trial -->
          <router-link
            :to="{
              name: 'TestRouter',
              /*
              params: {
                userId: 4321,
                name: 'hdk236p'
              },
              query: {
                group:'member',
                category:'trial'
              }
              */
            }"
          >TestRouter</router-link>
          <router-link to="/TestVuex">TestVuex</router-link>
        </div>
        <!-- <div id="nav">
          <span @click="$router.push({path: '/'})">User</span>
          <span @click="$router.push({path: '/Game'})">Game</span>
          <span @click="$router.push({path: '/Todo'})">Todo</span>
        </div> -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
  #nav {text-align: center;}
  #nav a {position:relative;}
  #nav a + a {padding-left:20px;}
  #nav a + a:after {content:'|';position:absolute;top:-2px;left:9px;}
</style>