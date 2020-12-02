<template>
  <v-card color="blue" class="white--text mb-5">
    <v-card-title>{{ info.usuario }}</v-card-title>
    <v-divider class="mx-4" color="white"/>
    <v-card-text class="text-justify white--text">{{ info.msj }}</v-card-text>
    <v-card-actions>
        <v-spacer/>
        <v-btn dark color="red">Datos incorrectos</v-btn>
        <v-btn dark color="green">Confirmar aporte</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
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
            this.loaded();
        } catch(e) {
          console.log('NO SE PUDO CARGAR LA INFO');

        }
    }
})
</script>

<style>

</style>