<template>
  <v-app-bar>
    <v-app-bar-title>
      Games Platform
    </v-app-bar-title>

    <router-link to="/games">
      <v-btn>
        Games
      </v-btn>
    </router-link>

    <router-link to="/platforms">
      <v-btn>
        Platforms
      </v-btn>
    </router-link>

    <router-link to="/developers">
      <v-btn>
        Developers
      </v-btn>
    </router-link>

    <router-link to="/creators">
      <v-btn>
        Creators
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>