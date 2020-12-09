<template>
  <v-card class="mx-7 my-5" width="600" min-height="250">
            <v-card-title>{{ c.name }}</v-card-title>
            <v-card-subtitle v-if="c.end_date != undefined">{{ "Activa hasta el " + c.end_date }}</v-card-subtitle>
            <v-card-text>
                <v-layout column>
                    <v-flex><v-icon small color="#72BAE6" class="">mdi-map-marker sm</v-icon> {{"Dirección: " + c.street + ' ' + c.street_number + ', ' + c.location + ', ' + c.city }}</v-flex>
                    <v-flex class="my-2"><v-icon small color="#72BAE6">mdi-clock</v-icon> {{"Horario de atención: " + c.schedule}}</v-flex>
                    <v-flex><v-icon small color="#72BAE6">mdi-format-list-numbered</v-icon> {{"Descripción: " + c.description}}</v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions class="mb-5 mx-3">
                <v-layout v-if="!loaded" column align-center class="py-5">
                    <v-progress-circular indeterminate color="blue"/>
                </v-layout>
                <v-chip v-for="tag in categories" :key="tag" class="mr-2">{{ tag }}</v-chip>
                <v-spacer/>
                <v-btn dark color="blue" :to="'/VerCampaña/' + c.id_campaign">Más información</v-btn>
            </v-card-actions>
        </v-card>
</template>

<script>
import CampaignStore from "@/store/CampaignStore";

export default {
    props: {
        c: Object
    },
    data() {
        return {
            categories: [],
            loaded: false
        }
    },
        async mounted() {
            const campCat = await CampaignStore.getCampaignCategories(this.c.id_campaign);
            for(let i=0; i<campCat.results.length; i++) {
                let cat = await CampaignStore.getCategories(campCat.results[i].id_category);
                this.categories.push(cat.description);
                console.log(this.c.name + cat.description);
            }
            this.loaded = true;
        }
}
</script>

<style>

</style>