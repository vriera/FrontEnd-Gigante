<template>
  <v-footer padless color="rgb(88, 118, 189)">
    <v-row class="my-2 white--text">
        <v-btn to="/" color="white" text rounded class="mr-3 ml-8">Página de inicio</v-btn>
        <v-btn href="https://forms.gle/Jc6VpirPEDtkbmri7" target="_blank" color="white" text rounded>Contáctanos</v-btn>
        <v-spacer/>
        <span class="my-auto pr-10">{{ new Date().getFullYear() }} — <strong>DockerStars</strong></span>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: 'Inicio', url: '/' },
                { name: 'Contáctanos', url: 'https://forms.gle/Jc6VpirPEDtkbmri7' }
            ]
        }
    }
}
</script>

<style>

</style>