<template>
  <div id="fondo">
      <div style="background-image: url('../assets/fondoColores2.png');">
        <botones/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Botones from '@/components/BotonesPrincipales2.vue';

export default {
  components: {
    'botones' : Botones,
  }
}
</script>

<style scoped>

</style>
