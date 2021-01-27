<template>
  <v-app>
      <v-content>
        <AppStatus />
        <div id="nav">
          <router-link to="/">User</router-link>
          <router-link to="/Game">Game</router-link>
          <router-link to="/Todo">Todo</router-link>
        </div>
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
  #nav a {position:relative;padding-left:20px;}
  #nav a + a:after {content:'|';position:absolute;top:-2px;left:9px;}
</style>