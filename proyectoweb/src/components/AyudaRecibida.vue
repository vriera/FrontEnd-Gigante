<template>
  <div id="fondo">
    <v-container fluid grid-list-xl>
      <v-card flat class="ma-10 pa-5">
        <h1 class="ml-4 azulGigante">AYUDA RECIBIDA</h1>
        <div v-if="loaded">
          <v-flex v-for="c in campañas" :key="c.id_campaign">
            <CampCard v-if="c.active" :camp="c" :campId="c.id_campaign" />
          </v-flex>
        </div>
        <v-layout v-if="!loaded" column align-center class="py-5">
          <v-progress-circular indeterminate color="blue"/>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import CampCard from "../components/CampCard";
import Vue from 'vue'

export default Vue.extend({
  components: {
    CampCard
  },
  data () {
    return {

      // campañas: [] as Campaña[],
      loaded: false,

      campañas: [
        { id_campaign: 1, name: "Colecta de tapitas: Diciembre 2020", active:true },
        { id_campaign: 2, name: "Alimentos no perecederos para el Hogar Escuela", active:true },
        { id_campaign: 3, name: "Platos y tazas para el Merendero Sonrisas", active:true },
        { id_campaign: 4, name: "Voluntariado: Pintemos la Salita Nro 32", active:true },
      ]
    }
  },
  async mounted() {
    try {
      // this.campañas = ;
      this.loaded = true;
    } catch (e) {
      console.log('ERROR AL CARGAR CAMPAÑAS');
    }
  }
})
</script>

<style>
.azulGigante {
  color: rgb(88, 118, 189);
}
</style>