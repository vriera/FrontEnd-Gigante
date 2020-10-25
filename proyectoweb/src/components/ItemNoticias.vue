<template>
  <div>
    <v-card max-width="450" style="padding-top: 1%; padding-bottom: 1%; padding-left: 1%; padding-right: 1%;">
      <v-img height="300" :src="image"/>
      <h1 style="margin-top: 5%;">{{title}}</h1>
      <v-row style="margin-top: 2%;align-content: center;">
        <v-col cols="1">
          <v-icon color="blue lighten-3">mdi-pencil</v-icon>
        </v-col>
        <v-col>
          <h2>{{author}}</h2>
        </v-col>
      </v-row>
      <body style="margin-left: 5%; margin-right: 5%">{{desc}}</body>
      <v-btn :to="readMoreLink" style="margin-top: 5%; margin-left: 30%;" color="blue lighten-3"> Ver más <v-icon>mdi-arrow-right</v-icon></v-btn>
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