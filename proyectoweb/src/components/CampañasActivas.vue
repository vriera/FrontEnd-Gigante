<template>
    <v-container fluid grid-list-md>
        <h1 class="ml-7 azulGigante">CAMPAÑAS ACTIVAS</h1>
        <v-layout wrap justify-space-around>
        <v-card v-for="c in campaigns" :key="c.id_campaign" class="mx-7 my-5" width="600" min-height="250">
            <v-card-title>{{ c.name }}</v-card-title>
            <v-card-subtitle v-if="c.end_date != undefined">{{ "Activa hasta el " + c.end_date }}</v-card-subtitle>
            <v-card-text>
                <v-layout column>
                    <v-flex><v-icon small color="#72BAE6" class="">mdi-map-marker sm</v-icon> {{"Dirección: " + c.street + ' ' + c.street_number + ', ' + c.location + ', ' + c.city }}</v-flex>
                    <v-flex class="my-2"><v-icon small color="#72BAE6">mdi-clock</v-icon> {{"Horario de atención: " + c.schedule}}</v-flex>
                    <v-flex><v-icon small color="#72BAE6">mdi-format-list-numbered</v-icon> {{"Descripción: " + c.description}}</v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-btn small dark color="blue mr-10 ml-auto mb-5" :to="'/VerCampaña/' + c.id_campaign">Ver más</v-btn>
            </v-card-actions>
        </v-card>
        </v-layout>
    </v-container>
</template>

<script>
import CampaignStore from "@/store/CampaignStore";

export default {
    data() {
        return {
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