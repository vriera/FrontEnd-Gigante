<template>
  <div id="fondo" class="pa-5">
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