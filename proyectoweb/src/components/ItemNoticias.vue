<template>
  <div>
    <v-card max-width="400" class="pa-3">
      <v-img height="250" :src="image"/>
      <h2 style="margin-top: 5%;">{{title}}</h2>
      <v-row class="pl-3">
          <v-icon color="blue lighten-3">mdi-pencil</v-icon>
          <h3 class="pl-2">{{author}}</h3>
      </v-row>
      <body class="text-justify mx-1">{{desc}}</body>
      <!-- <body class="text-center">
        <v-btn :to="readMoreLink" class="text-center mt-3 mb-1" color="blue lighten-3"> Ver más <v-icon right>mdi-arrow-right</v-icon></v-btn>
      </body> -->
    </v-card>
  </div>

</template>

<script>
export default {
  name: "ItemNoticias",
  props: ['image','title','author','desc','readMoreLink'],
  data(){
    return {

    }
  },
  methods:{
  },
}
</script>

<style scoped>

</style>