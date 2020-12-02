<template>
  <div id="fondo">
  <v-container fluid grid-list-xl>
    <v-card flat class="ma-10 pa-5">
        <h1 class="ml-4 azulGigante">AYUDA RECIBIDA</h1>
        <div v-if="loaded">
            <v-flex v-for="c in campañas" :key="c.id">
                <CampCard v-if="c.active" :camp="c" :campId="c.id" />
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
                { id: 1, nombre: "Colecta de tapitas: Diciembre 2020", active:true },
                { id: 2, nombre: "Alimentos no perecederos para el Hogar Escuela", active:true },
                { id: 3, nombre: "Platos y tazas para el Merendero Sonrisas", active:true },
                { id: 4, nombre: "Voluntariado: Pintemos la Salita Nro 32", active:true },
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