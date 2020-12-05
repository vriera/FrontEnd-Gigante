<template>
  <div id="fondo">
    <div style="background-image: url('../assets/fondoColores2.png');">
      <camp-activas/>
    </div>
  </div>
</template>

<script>

import CampañasActivas from "@/components/CampañasActivas";

export default {
  components: {
    'camp-activas' : CampañasActivas,
  }
}
</script>

<style scoped>

</style>