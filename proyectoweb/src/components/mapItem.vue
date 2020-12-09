<template>
    <v-card class="mx-2" color="#DBEDF8" height="270">
        <v-card-title>{{ camp.name }}</v-card-title>
        <v-card-subtitle>{{ ong }}</v-card-subtitle>
        <v-card-text>
            <v-layout column>
                <v-flex><v-icon small color="#72BAE6">mdi-map-marker sm</v-icon> {{"Dirección: " + camp.street + ' ' + camp.street_number + ', ' + camp.location + ', ' + camp.city }}</v-flex>
                <v-flex><v-icon small class="my-3" color="#72BAE6">mdi-clock</v-icon> {{camp.schedule}}</v-flex>
                <v-flex class="d-inline-block text-truncate"><v-icon small color="#72BAE6">mdi-format-list-numbered</v-icon> {{camp.description}}</v-flex>
            </v-layout>
        </v-card-text>
        <v-card-actions class="mx-3">
            <v-layout v-if="!loaded" column align-center class="py-5">
                <v-progress-circular indeterminate color="blue"/>
            </v-layout>
            <v-chip-group show-arrows v-if="loaded">
                <v-chip v-for="tag in getCategories" :key="tag.id" class="mr-2 black--text">{{ tag.description }}</v-chip>
            </v-chip-group>
            <v-spacer/>
            <v-btn dark color="blue" :to="'/VerCampaña/' + camp.id_campaign">Más información</v-btn>
        </v-card-actions>
  </v-card>
</template>

<script>
import CampaignStore from "@/store/CampaignStore";

export default {
    props: {
        camp: Object,
        ong: String
    },
    data() {
        return { 
            categories: [],
            loaded: false,
        }
    },
    computed: {
        getCategories() {
            return this.categories;
        }
    },
    async created() {
        // for(let i=0; i<this.cat_list.length; i++) {
        //     let cat = await CampaignStore.getCategories(this.cat_list[i]);
        //     this.categories.push({ id: cat.id_category, description: cat.description});
        // }
        const campCat = await CampaignStore.getCampaignCategories(this.camp.id_campaign);
        for(let i=0; i<campCat.results.length; i++) {
            let cat = await CampaignStore.getCategories(campCat.results[i].id_category);
            this.categories.push({ id: cat.id_category, description: cat.description});
        }
        this.loaded = true;
    }

}
</script>

<style>

</style>