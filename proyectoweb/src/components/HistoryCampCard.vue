<template>
    <div>
      <v-alert
          prominent
          max-width="50%"
          class="mx-auto"
          v-if="verifyError"
          color="red"
          icon="mdi-account"
          type="error" >
        <v-row align="center">
          <v-col>
            {{ messageAlertVerify}}
          </v-col>
          <v-col class="shrink">
            <v-btn @click="verifyError = !verifyError">Aceptar</v-btn>
          </v-col>
        </v-row>
      </v-alert>

      <v-card flat>
        <v-card-title>{{ camp.name }}</v-card-title>
        <v-card-subtitle v-if="empty">No se registra ayuda recibida.</v-card-subtitle>
        <v-layout v-if="!loaded" column align-center class="py-5">
          <v-progress-circular indeterminate color="blue"/>
        </v-layout>
        <v-flex v-for="f in formsAyuda" :key="f.id_donation" class="infoForm mx-4">
          <InfoAyuda v-on:verifyErrorEvent="updateVerifyErrorAlert($event)" v-if="f.verified" :info="f" :infoId="f.id_donation" v-on:loaded="empty=false"/>
        </v-flex>
      </v-card>
    </div>
</template>

<script>
import CampaignStore from '@/store/CampaignStore'
import InfoAyuda from "./InfoAyuda.vue"
import Vue from 'vue'

export default Vue.extend({
    props: {
        camp: Object,
        campId: Number
    },
    components: {
        InfoAyuda
    },
    data () {
        return {

            formsAyuda: [],
            empty: true,
            loaded: false,
            messageAlertVerify: '',
            verifyError : false,
            // formsAyuda: [
            //     { id_donation: 1, id_campaign: 1, id_donator: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate quae quibusdam tempora ullam assumenda voluptatem quos consequatur, corporis ipsa architecto repellendus rerum in itaque quam nam nostrum praesentium asperiores?", verified: true },
            //     { id_donation: 2, id_campaign: 1, id_donator: 2, description: "Eius cupiditate quae quibusdam tempora ullam assumenda voluptatem quos consequatur, corporis ipsa architecto repellendus rerum in itaque.", verified: false },
            //     { id_donation: 3, id_campaign: 2, id_donator: 3, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate quae quibusdam tempora ullam rerum in itaque quam nam nostrum praesentium asperiores?", verified: false },
            //     { id_donation: 4, id_campaign: 2, id_donator: 1, description: "Adipisicing elit. Eius cupiditate quae quibusdam tempora ullam assumenda voluptatem quos consequatur, corporis ipsa architecto repellendus rerum in itaque quam nam nostrum praesentium asperiores?", verified: false },
            //     { id_donation: 5, id_campaign: 3, id_donator: 2, description: "Cupiditate quae quibusdam tempora ullam assumenda nam nostrum praesentium asperiores?", verified: false },
            //     { id_donation: 6, id_campaign: 3, id_donator: 4, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate quae quibusdam tempora ullam assumenda voluptatem quos consequatur, corporis ipsa architecto repellendus rerum in itaque quam nam nostrum praesentium asperiores?", verified: false },
            //     { id_donation: 7, id_campaign: 3, id_donator: 5, description: "Eius cupiditate quae quibusdam tempora ullam assumenda voluptatem quos consequatur, corporis ipsa architecto repellendus.", verified: false },
            // ]
        }
    },
    methods :{
      updateVerifyErrorAlert(errorMessage){
          this.messageAlertVerify = errorMessage;
          this.verifyError = true;
      }
    },
    async mounted() {
        try {
            const answer = await CampaignStore.getDonationByCampaign(this.campId);
            this.formsAyuda = answer.results;
            this.loaded = true;
        } catch (e) {
            console.log('ERROR AL CARGAR FORMULARIOS DE AYUDA RECIBIDA');
        }
    }
})
</script>

<style>
    .infoForm {
        padding: 0%;
        margin: 0%;
    }
</style>