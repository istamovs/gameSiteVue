<template>
  <v-card max-width="1200" class="mx-auto mt-15">
    <v-container>
      <v-row>
        <v-col v-for="platform in platforms" :key="platform.id" cols="3">
          <v-card class="w-100 h-100">
            <v-card-text>
              <v-img max-height="200"
                     max-width="280"
                     :src="platform.image_background"
                     aspect-ratio="1"
                     cover/>
            </v-card-text>
            <v-card-actions>
              {{ platform.name }}
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "Platforms",
  data() {
    return {
      platforms: []
    }
  },
  mounted() {
    axios.get('https://api.rawg.io/api/platforms', {
      params: {
        key: '99e5adaed8ca4668859d5e1c99e34937'
      }
    }).then(response => {
      this.platforms = response.data.results;
    })
  }
}
</script>

<style scoped>

</style>