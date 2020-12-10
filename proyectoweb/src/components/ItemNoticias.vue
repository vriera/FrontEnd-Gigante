<template>
    <v-card width="400">
      <v-img height="250" :src="image"/>
      <v-card-title>{{title}}</v-card-title>
      <v-card-subtitle class="ml-3 black--text">
        <v-row>
          <v-icon color="blue lighten-3 pr-2">mdi-pencil</v-icon>
          <h3 class="pl-2">{{author}}</h3>
        </v-row>
      </v-card-subtitle>
      <v-card-text class="text-justify black--text">{{desc}}</v-card-text>
      <v-card-actions v-if="isOng" class="pb-5">
        <v-spacer/>
        <v-btn color="primary" :to="editNoticiasLink + id">Editar</v-btn>
        <v-spacer/>
      </v-card-actions>
    </v-card>
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