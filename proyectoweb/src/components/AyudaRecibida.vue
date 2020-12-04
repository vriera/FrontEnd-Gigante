<template>
  <div>
    <v-container fluid grid-list-xl>
      <v-card flat class="ma-10 pa-5">
        <v-row>
          <h1 class="ml-7 azulGigante">{{ history ? "HISTORIAL":"AYUDA ENTRANTE" }}</h1>
          <v-spacer/>
          <v-btn small dark depressed class="mr-7 mt-2" v-on:click="history=!history">{{ history ? "Ver ayuda entrante":"Ver historial" }}</v-btn>
        </v-row>
        <div v-if="loaded && !history">
          <v-flex v-for="c in campañas" :key="c.id_campaign">
            <CampCard v-if="c.active" :camp="c" :campId="c.id_campaign" :incoming="history" />
          </v-flex>
        </div>
        <div v-if="loaded && history">
          <v-flex v-for="c in campañas" :key="c.id_campaign">
            <HistoryCampCard :camp="c" :campId="c.id_campaign" />
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
import CampaignStore from '@/store/CampaignStore'
import CampCard from "../components/CampCard"
import HistoryCampCard from "../components/HistoryCampCard"
import Vue from 'vue'

export default Vue.extend({
  components: {
    CampCard, HistoryCampCard
  },
  data () {
    return {
      campañas: [],
      history: false,
      loaded: false,
      // campañas: [
      //   { id_campaign: 1, name: "Colecta de tapitas: Diciembre 2020", active:true },
      //   { id_campaign: 2, name: "Alimentos no perecederos para el Hogar Escuela", active:true },
      //   { id_campaign: 3, name: "Platos y tazas para el Merendero Sonrisas", active:true },
      //   { id_campaign: 4, name: "Voluntariado: Pintemos la Salita Nro 32", active:true },
      // ]
    }
  },
  async mounted() {
    try {
      const answer = await CampaignStore.getMyCampaigns();
      // if(answer.results !== undefined)
      //   console.log("TODO OK");
      // else
      //   console.log(answer.message);
      this.campañas = answer.results;
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