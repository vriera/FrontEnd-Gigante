<template>
  <div id="fondo">
    <div style="background-image: url('../assets/fondoColores2.png');">
      <quienes-somos/>
    </div>
  </div>
</template>

<script>

import QuienesSomos from "@/components/QuienesSomos";

export default {
  components: {
    'quienes-somos' : QuienesSomos,
  }
}
</script>

<style scoped>

</style>
