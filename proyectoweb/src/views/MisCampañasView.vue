<template>
  <div id="fondo">
      <div style="background-image: url('../assets/fondoColores2.png');">
        <my-campaigns/>
      </div>
  </div>
</template>

<script>

import MisCampañas from '@/components/MisCampañas.vue'

export default {
  components: {
    'my-campaigns' : MisCampañas,
  }
}
</script>

<style scoped>

</style>
