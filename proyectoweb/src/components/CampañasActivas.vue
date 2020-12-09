<template>
    <v-container fluid grid-list-md>
        <v-layout column align-center>
            <h1 class="azulGigante">CAMPAÑAS ACTIVAS</h1>
        </v-layout>
        <v-layout v-if="!loaded" column align-center class="py-5">
          <v-progress-circular indeterminate color="blue"/>
        </v-layout>
        <v-layout wrap justify-space-around>
            <camp-item v-for="c in campaigns" :key="c.id_campaign" :c="c"/>
        </v-layout>
    </v-container>
</template>

<script>
import CampaignStore from "@/store/CampaignStore";
import CampItem from './CampItem.vue';

export default {
  components: { CampItem },
    data() {
        return {
            loaded: false,
            campaigns: {}
        }
    },
    async mounted() {
        try {
            const ans = await CampaignStore.getActiveCampaigns();
            this.campaigns = ans.results;
            this.loaded = true;
        } catch (e) {
            console.log('ERROR AL CARGAR CAMPAÑAS');
        }
    }
}
</script>

<style>
    .azulGigante {
        color: rgb(88, 118, 189);
    }
</style>