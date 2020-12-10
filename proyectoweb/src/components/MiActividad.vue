<template>
    <v-container fluid grid-list-md>
      <v-card flat class="ma-10 pa-5">
        <v-row>
          <h1 class="ml-7 mb-3 azulGigante">MI ACTIVIDAD</h1>
        </v-row>
        <v-layout wrap justify-space-around v-if="loaded" class="mx-3">
          <v-flex v-for="f in forms" :key="f.id_donation">
            <activity-card :camp_id="f.id_campaign" :cat_id="f.id_category" :desc="f.description" :status="f.verified" />
          </v-flex>
        </v-layout>
        <v-layout v-if="!loaded" column align-center class="py-5">
          <v-progress-circular indeterminate color="blue"/>
        </v-layout>
        <v-layout v-if="loaded && empty" column align-center class="pb-5">
          <span>No se registran aportes a campañas. ¡Busca en el mapa para comenzar a ayudar!</span>
        </v-layout>
      </v-card>
    </v-container>
</template>

<script>
import CampaignStore from "@/store/CampaignStore";
import UserStore from "@/store/UserStore";
import ActivityCard from './ActivityCard.vue';

export default {
  components: { ActivityCard },
    data() {
        return {
            forms: [],
            loaded: false,
            empty: true
        }
    },
    async created() {
        try {
            const id = await UserStore.getCurrentId();
            const ans = await CampaignStore.getDonations();
            this.forms = ans.results.filter(d => d.id_donator==id);
            if(this.forms.length > 0) {
              this.empty = false;
            }
            this.loaded = true;
        } catch (e) {
            console.log('ERROR AL CARGAR CAMPAÑAS');
        }
    },
    methods: {
      
    }
}
</script>

<style>
    .azulGigante {
        color: rgb(88, 118, 189);
    }
</style>