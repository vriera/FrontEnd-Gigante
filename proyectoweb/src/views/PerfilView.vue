<template>
  <div id="fondo" class="pa-5">
    <v-row justify="center">
      <h1 class="ml-5">PERFIL</h1>
    </v-row>
    <v-row>
      <tarjeta-datos-perfil/>
    </v-row>

  </div>
</template>

<script>
import TarjetaDatosPerfil from "@/components/TarjetaDatosPerfil";
export default {
name: "PerfilView",
  components: {'tarjeta-datos-perfil' : TarjetaDatosPerfil}
}
</script>

<style scoped>

</style>