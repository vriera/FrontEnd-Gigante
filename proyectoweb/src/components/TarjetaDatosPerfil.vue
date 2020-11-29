<template>
  <div>
      <v-card width="500px" style="border-radius: 50px">
        <v-row justify="center">
          <v-col style="margin-left: 5%" cols="3">
            <v-avatar size="100" class="mt-4">
              <v-img src="@/assets/default.png"/>
            </v-avatar>
          </v-col>

          <v-col style="margin-top: 50px">
            <v-text>John Doe</v-text>
          </v-col>
        </v-row>

        <v-row style="margin-top: 5%; margin-left: 5%">
          <v-text>Configuración</v-text>
        </v-row>

        <v-row style="margin-left: 5%" v-on:click="router.to(edit_link)">
          <v-col cols="2">
            <v-icon>mdi-pencil</v-icon>
          </v-col>
          <v-col >
            <v-text>Editar perfil</v-text>
          </v-col>
        </v-row>

        <v-row style="margin-left: 5%">
          <v-col cols="2">
            <v-icon>mdi-bell</v-icon>
          </v-col>
          <v-col >
            <v-text>Notificaciones</v-text>
          </v-col>
        </v-row>

        <v-row style="margin-left: 5%">
          <v-col cols="2">
            <v-icon>mdi-key</v-icon>
          </v-col>
          <v-col>
            <v-text>Privacidad</v-text>
          </v-col>
        </v-row>



      </v-card>
  </div>

</template>

import router from '@/router';

<script>
export default {
  name: "ProfileCard",

  data() {
    return {
      edit_link: "/EditarPerfil"
    }
  },
}

</script>

<style scoped>

</style>