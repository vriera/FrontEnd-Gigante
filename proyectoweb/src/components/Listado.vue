<template>
  <div>
    <v-card color="#FFFFFF" height="800px">
      <p class ="titulo">Asociaciones</p>
      <v-container>
        <v-card v-for="desc in descriptions" :key="desc" style="margin-top: 10px" color="#DBEDF8" >
          <v-card-title >{{desc.title}}</v-card-title>
          <v-card-text style="margin-top: -15px; margin-left: 20px">{{desc.direccion}}</v-card-text>
          <v-card-text style="margin-top: -15px; margin-left: 20px">{{desc.horario}}</v-card-text>
          <v-card-text style="margin-top: -15px; margin-left: 20px">{{desc.lista}}</v-card-text>
        </v-card>
      </v-container>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Listado',
  data() {
    return {
      descriptions: [
        {
          title: 'Fundación Sí',
          direccion: 'Calle 1234 piso 1A',
          horario: 'Lunes a viernes, 12:00- 18:00',
          lista: 'ropa de abrigo, donaciones monetarias'
        },
        {
          title: 'Fundación Sí',
          direccion: 'Calle 1234 piso 1A',
          horario: 'Lunes a viernes, 12:00- 18:00',
          lista: 'ropa de abrigo, donaciones monetarias'
        },
        {
          title: 'Fundación Sí',
          direccion: 'Calle 1234 piso 1A',
          horario: 'Lunes a viernes, 12:00- 18:00',
          lista: 'ropa de abrigo, donaciones monetarias'
        },
        {
          title: 'Fundación Sí',
          direccion: 'Calle 1234 piso 1A',
          horario: 'Lunes a viernes, 12:00- 18:00',
          lista: 'ropa de abrigo, donaciones monetarias'
        },

      ]
    }
  }
}

</script>

<style scoped>
  .titulo {
    font-size: 50px;
    font-family: "Arial Black";
    text-align: center;

  }
</style>