<template>
  <div id="fondo">
    <div style="background-image: url('../assets/fondoColores2.png');">
      <edit-profile/>
    </div>
  </div>
</template>

<script>

import EditarPerfil from "@/components/EditarPerfil";

export default {
  components: {
    'edit-profile' : EditarPerfil,
  }
}
</script>

<style scoped>

</style>
