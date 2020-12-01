<template>
  <div id="fondo">
      <div style="background-image: url('../assets/fondoColores2.png');">
        <edit-campaign v-bind:id="$route.params.id"/>
      </div>
  </div>
</template>

<script>

import EditCampaign from '@/components/EditarCampaña.vue'

export default {
  components: {
    'edit-campaign' : EditCampaign,
  }
}
</script>

<style scoped>

</style>
