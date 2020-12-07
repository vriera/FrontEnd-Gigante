<template>
  <div id="fondo">
    <div style="background-image: url('../assets/fondoColores2.png');">
      <mi-actividad/>
    </div>
  </div>
</template>

<script>

import MiActividad from "@/components/MiActividad";

export default {
  components: {
    'mi-actividad' : MiActividad,
  }
}
</script>

<style scoped>

</style>