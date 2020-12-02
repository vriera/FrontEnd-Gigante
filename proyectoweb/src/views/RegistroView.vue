<template>
  <div id="fondo">
      <div style="background-image: url('../assets/fondoColores2.png');">
        <registro/>
      </div>
  </div>
</template>

<script>

import Registro from '@/components/Registro.vue'

export default {
  components: {
    'registro' : Registro,
  }
}
</script>

<style scoped>

</style>
