<template>
  <v-card max-width="1200" class="mx-auto mt-15">
    <v-container>
      <v-row>
        <v-col v-for="creator in creators" :key="creator.id" cols="3">
          <v-card class="w-100 h-100">
            <v-card-text>
              <v-img max-height="200"
                     max-width="280"
                     :src="creator.image"
                     aspect-ratio="1"
                     cover/>
            </v-card-text>
            <v-card-actions>
              {{ creator.name }}
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
  name: "Creators",
  data() {
    return {
      creators: []
    }
  },
  mounted() {
    axios.get('https://api.rawg.io/api/creators', {
      params: {
        key: '99e5adaed8ca4668859d5e1c99e34937'
      }
    }).then(response => {
      this.creators = response.data.results;
    })
  }
}
</script>

<style scoped>

</style>