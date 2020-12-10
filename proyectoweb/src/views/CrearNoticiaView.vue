<template>
  <div id="fondo">
    <div style="background-image: url('../assets/fondoColores2.png');">
      <crear-noticias/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CrearNoticias from "@/components/CrearNoticias";

export default {
  components: {
    'crear-noticias' : CrearNoticias,
  }
}
</script>

<style scoped>

</style>
