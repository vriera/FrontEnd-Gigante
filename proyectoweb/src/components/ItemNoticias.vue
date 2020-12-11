<template>
    <v-card width="400" :height="h">
      <v-img height="250" :src="image"/>
      <v-card-title>{{title}}</v-card-title>
      <v-card-subtitle class="ml-3 black--text">
        <v-row>
          <v-icon color="blue lighten-3 pr-2">mdi-account-group</v-icon>
          <h3 class="pl-2 mt-1">{{author}}</h3>
        </v-row>
      </v-card-subtitle>
      <v-card-text v-if="!ver_mas" class="text-justify d-inline-block text-truncate black--text">{{desc}}</v-card-text>
      <v-card-text v-if="ver_mas" class="text-justify black--text">{{desc}}</v-card-text>
      <v-card-actions class="pb-5">
        <v-spacer/>
        <v-btn v-if="show" color="primary" v-on:click="expand()">{{ ver_mas ? "Contraer":"Ver más" }}</v-btn>
        <v-btn v-if="isOng" color="black" :to="editNoticiasLink + id" class="ml-3 white--text">Editar</v-btn>
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
      editNoticiasLink: '/EditarNoticia/',
      ver_mas: false,
      show: false,
      h: 450
    }
  },
  async created() {
    if(this.desc.length > 55)
      this.show = true;
  },
  methods: {
    expand() {
      this.ver_mas = !this.ver_mas;
      if(this.h == 450) {
        this.h = '';
      } else {
        this.h = 450;
      }
    }
  }
}
</script>

<style scoped>

</style>