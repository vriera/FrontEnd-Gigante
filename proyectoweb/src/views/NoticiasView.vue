<template>
  <div id="fondo">
    <div style="background-image: url('../assets/fondoColores2.png');">
      <noticias/>
    </div>
  </div>
</template>

<script>

import Noticias from "@/components/Noticias";

export default {
  components: {
    'noticias' : Noticias,
  }
}
</script>

<style scoped>

</style>