<template>
  <v-card color="blue" class="white--text mb-5">
    <v-container v-if="loading" class="text-center" >
      <v-progress-circular
          :size="50"
          color="white"
          indeterminate
      ></v-progress-circular>
    </v-container>
    <v-card-title>{{ donator.fullname }}</v-card-title>
    <v-divider class="mx-4" color="white"/>
    <v-card-text class="text-justify white--text">Categoria: {{category.description}} <br/> Descripcion: {{ info.description }}</v-card-text>
    <v-card-actions v-if="incoming">
        <v-spacer/>
        <v-btn dark color="red" v-on:click="deleteDonation()">Datos incorrectos</v-btn>
        <v-btn dark color="green" v-on:click="verifyDonation()">Confirmar ayuda</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from 'vue'
import UserStore from '@/store/UserStore'
import CampaignStore from '@/store/CampaignStore'

export default Vue.extend({
    data() {
        return {
            donator: {
                fullname: ''
            },
            category: '',
            loading: false
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
        async deleteDonation() {
            const result = await CampaignStore.deleteDonation(this.infoId);
            if(result.success){
              location.reload();
            }
            else{
              this.$emit('verifyErrorEvent','Error durante la eliminación de la donación, inténtelo más tarde');
            }
        },
        async verifyDonation() {
            const result = await CampaignStore.modifyDonation(this.infoId,this.info.description,true);
            if(result.success){
              location.reload();
            }
            else{
              this.$emit('verifyErrorEvent','Error durante la verificación de la donación, inténtelo más tarde');
            }
        },
        async unverifyDonation() {
          const result = await CampaignStore.modifyDonation(this.infoId,this.info.description,false);
          if(result.success){
            location.reload();
          }
          else{
            this.$emit('verifyErrorEvent','Error durante la desverificación de la donación, inténtelo más tarde');
          }
        }
    },
    async mounted() {
        try {
            this.loading = true;
            this.donator = await UserStore.getDonators(this.info.id_donator);
            this.category = await CampaignStore.getCategories(this.info.id_category);
            this.loaded();
            this.loading = false;
        } catch(e) {
          console.log('NO SE PUDO CARGAR LA INFO');

        }
    }
})
</script>

<style>

</style>