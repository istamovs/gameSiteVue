<template>
  <v-app>
    <v-main>
      <nav-bar/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Games from "./components/Games.vue";
import Developers from "./components/Developers.vue";
import NavBar from "./components/NavBar.vue";
import platforms from "./components/Platforms.vue";
import creators from "./components/Creators.vue";

export default {
  name: 'App',

  components: {
    Games,
    Developers,
    NavBar,
    platforms,
    creators
  },

  data: () => ({
    //
  }),
}
</script>
