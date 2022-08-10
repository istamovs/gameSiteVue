<template>
  <v-card max-width="1200" class="mx-auto mt-15">
    <v-container>
      <v-row>
        <v-col v-for="game in games" :key="game.id" cols="3">
          <v-card class="w-100 h-100">
            <v-card-title> {{ game.name }} </v-card-title>
            <v-card-text>
              <v-img max-height="200"
                     max-width="280"
                     :src="game.background_image"
                     aspect-ratio="1"
                     cover/>
            </v-card-text>
            <v-card-subtitle> Дата релиза: {{ game.released }} </v-card-subtitle>
            <v-card-text> Рейтинг игроков: {{ game.rating }} </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "Games",
  data() {
    return {
      games: []
    }
  },
  mounted() {
    axios.get('https://api.rawg.io/api/games', {
      params: {
        key: '99e5adaed8ca4668859d5e1c99e34937'
      }
    }).then(response => {
      this.games = response.data.results;
    })
  }
}
</script>

<style scoped>

</style>