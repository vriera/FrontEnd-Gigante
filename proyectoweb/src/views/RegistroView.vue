<template>
  <div id="fondo">
    <app-menu></app-menu>
      <div style="background-image: url('../assets/fondoColores2.png');">
        <registro/>
      </div>
  </div>
</template>

<script>

import Menu from '@/components/Menu.vue'
import Registro from '@/components/Registro.vue'

export default {
  components: {
    'app-menu' : Menu,
    'registro' : Registro,
  }
}
</script>

<style scoped>

</style>
