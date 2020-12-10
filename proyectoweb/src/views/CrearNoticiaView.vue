<template>
  <div id="fondo">
    <v-row justify="center">
      <h1 class="ml-5">CREAR NOTICIA</h1>
    </v-row>
    <v-card class="justify-center" style="margin-left: 10%;margin-right: 10%">

      <v-layout column align-center class="py-5">
        <v-img contain max-height="220" :src="avatarURLFUNC" lazy-src="@/assets/default.png"/>
      </v-layout>

      <v-row>
        <v-col cols="2" style="margin-top: 20px">
          <h2 style="margin-left: 20%;" >Imágen</h2>
        </v-col>
        <v-col cols="7">
          <v-text-field hint="Insertá el link a tu imágen"> </v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="2" style="margin-top: 20px">
          <h2 style="margin-left: 20%;" >Título</h2>
        </v-col>
        <v-col cols="7">
          <v-text-field hint="Dale un título"> </v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="2" style="margin-top: 20px">
          <h2 style="margin-left: 20%;" >Texto</h2>
        </v-col>
        <v-col cols="7">
          <v-text-field hint="Completá el texto"> </v-text-field>
        </v-col>
      </v-row>

      <div style="text-align: center;" class="my-8">
        <v-btn height="64px" width="200px" style="margin-right: 50px" class="rounded-pill"
               depressed router :to="noticiaslink">
          <v-icon large style="position: relative; left: -12px;">mdi-arrow-left</v-icon>
          Volver
        </v-btn>

        <v-btn height="64px" width="200px" style="margin-left: 50px" class="rounded-pill" depressed
               color="primary" @click="publicar">
          <v-icon large style="position: relative; left: -12px;">mdi-content-save-outline</v-icon>
          Publicar
        </v-btn>
      </div>

    </v-card>
  </div>
</template>

<script>
export default {
name: "CrearNoticiaView",

  data(){
    return{
        noticiaslink: 'Noticias',
        imagen: '',
        titulo: '',
        texto: '',
    }
  },
  methods: {
    publicar(){

    }
  },
}
</script>

<style scoped>

</style>