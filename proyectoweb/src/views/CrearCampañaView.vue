<template>
  <div id="fondo">
      <div style="background-image: url('../assets/fondoColores2.png');">
        <create-campaign/>
      </div>
  </div>
</template>

<script>

import CreateCampaign from '@/components/CrearCampaña.vue'

export default {
  components: {
    'create-campaign' : CreateCampaign,
  }
}
</script>

<style scoped>

</style>
