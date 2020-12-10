<template>
  <div id="fondo">
    <div style="background-image: url('../assets/fondoColores2.png');">
      <editar-noticias/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EditarNoticias from "@/components/EditarNoticias";

export default {
  components: {
    'editar-noticias' : EditarNoticias,
  }
}
</script>

<style scoped>

</style>
