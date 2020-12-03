<template>
  <v-card color="blue" class="white--text mb-5">
    <v-card-title>{{ donator.fullname }}</v-card-title>
    <v-divider class="mx-4" color="white"/>
    <v-card-text class="text-justify white--text">{{ info.description }}</v-card-text>
    <v-card-actions>
        <v-spacer/>
        <v-btn dark color="red">Datos incorrectos</v-btn>
        <v-btn dark color="green">Confirmar aporte</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from 'vue'
// import UserStore from '@/store/UserStore'

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
        infoId: Number
    },
    methods: {
        loaded() {
            this.$emit('loaded');
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