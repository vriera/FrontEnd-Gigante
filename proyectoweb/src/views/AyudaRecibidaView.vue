<template>
  <div id="fondo">
    <div style="background-image: url('../assets/fondoColores2.png');">
      <ayuda-recibida/>
    </div>
  </div>
</template>

<script>

import AyudaRecibida from "@/components/AyudaRecibida";

export default {
  components: {
    'ayuda-recibida' : AyudaRecibida,
  }
}
</script>

<style scoped>

</style>