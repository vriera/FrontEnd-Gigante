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

      <div align="center">
        <v-btn v-if="isOng" color="primary"  :to="editNoticiasLink + id">Editar</v-btn>
      </div>

    </v-card>
  </div>

</template>

<script>
export default {
  name: "ItemNoticias",
  props: ['id','image','title','author','desc','readMoreLink', 'isOng'],
  data(){
    return {
      editNoticiasLink: '/EditarNoticia/'
    }
  },
  methods:{
  },
}
</script>

<style scoped>

</style>