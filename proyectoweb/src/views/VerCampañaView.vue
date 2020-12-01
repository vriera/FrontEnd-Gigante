<template>
  <div id="fondo">
      <div style="background-image: url('../assets/fondoColores2.png');">
        <view-campaign v-bind:id="$route.params.id"/>
      </div>
  </div>
</template>

<script>

import ViewCampaign from '@/components/VerCampaña.vue'

export default {
  components: {
    'view-campaign' : ViewCampaign,
  }
}
</script>

<style scoped>

</style>
