<template>
  <div id="fondo">
    <app-menu></app-menu>
      <div style="background-image: url('../assets/fondoColores2.png');">
        <botones/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Botones from '@/components/BotonesPrincipal.vue'

export default {
  components: {
    'app-menu' : Menu,
    'botones' : Botones,
  }
}
</script>

<style scoped>

</style>
