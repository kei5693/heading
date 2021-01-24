<template>
  <v-app>
    <AppStatus />
    <v-content>
      <Home/>
      <User/>
    </v-content>
  </v-app>
</template>

<script>
import User from "./components/User"
import Home from "./Home"

export default {
  name: "App",
  components: {
    User,
    Home
  }
}
</script>