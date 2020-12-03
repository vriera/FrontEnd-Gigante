<template>
  <v-card color="blue" class="white--text mb-5">
    <v-card-title>{{ donator.fullname }}</v-card-title>
    <v-divider class="mx-4" color="white"/>
    <v-card-text class="text-justify white--text">{{ info.description }}</v-card-text>
    <v-card-actions v-if="incoming">
        <v-spacer/>
        <v-btn dark color="red" v-on:click="deleteDonation()">Datos incorrectos</v-btn>
        <v-btn dark color="green" v-on:click="verifyDonation()">Confirmar ayuda</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from 'vue'
// import UserStore from '@/store/UserStore'
// import CampaignStore from '@/store/CampaignStore'

export default Vue.extend({
    data() {
        return {
            donator: {
                fullname: "María Gonzalez"
            }
        }
    },
    props: {
        info: Object,
        infoId: Number,
        incoming: Boolean
    },
    methods: {
        loaded() {
            this.$emit('loaded');
        },
        deleteDonation() {
            // CamapaignStore.deleteDonation(this.infoId);
        },
        verifyDonation() {
            // CampaignStore.modifyDonation(this.infoId,this.info.description,true);
            this.info.verified = true;
        }
    },
    async mounted() {
        try {
            // this.donator = await UserStore.getDonators(this.info.id_donator);
            this.loaded();
        } catch(e) {
          console.log('NO SE PUDO CARGAR LA INFO');

        }
    }
})
</script>

<style>

</style>