<template>
  <div >
      <v-card class="anita" shaped elevation="5"  width="420px" height="250px" hover>                             <!-- aaa-->
        <p class="texto">{{DatosTarjeta.text1}}<p>
        <p class="categoria">{{DatosTarjeta.text2}}</p>
        <p class="texto"> {{DatosTarjeta.text3}} </p>
      </v-card>
  </div>
</template>

<script>
  export default {
    props: ['DatosTarjeta'],
    data() {
      return {
        name: "Tarjeta"
      }
    }
  }
</script>

<style scoped>
.categoria {
  font-size: 50px;
  text-align: center;
  font-family: Arial Black;
}
.texto {
  font-size: 25px;
  text-align: left;
  margin-left: 5%;
  margin-top:15px;
  font-family: Arial;
}

.anita{
  color: #8AC5EB;
}
.anita:hover{
  background-color:#069DFF;
}


</style>