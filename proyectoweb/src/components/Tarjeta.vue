<template>
      <v-card class="anita pa-5" shaped elevation="5" width="440px" height="250px">
        <h1>{{DatosTarjeta.text2}}</h1>
        <v-divider/>
        <h3 class="mt-5">{{DatosTarjeta.text3}}</h3>
        <v-spacer/>
        <v-card-actions class="mb-3 mr-3">
          <v-spacer/>
          <v-icon color="black" large>{{DatosTarjeta.text1}}</v-icon>
        </v-card-actions>
      </v-card>
</template>

<script>
  export default {
    name: "Tarjeta",
    props: ['DatosTarjeta'],
  }
</script>

<style scoped>
  .anita{
    background-color: #8AC5EB;
  }
</style>