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
            <h2>{{currentUser.username}}</h2>
          </v-col>
        </v-row>

        <v-row style="margin-top: 5%; margin-left: 5%">
          <h3>Datos</h3>
        </v-row>

        <v-card  style="border-color: white; background-color: white; box-shadow: none">
          <v-row style="margin-left: 5%" >
            <v-col cols="3">
              <h3> Nombre : </h3>
            </v-col>
            <v-col >
              <h3>{{currentUser.fullname}}</h3>
            </v-col>
          </v-row>
        </v-card>

        <v-row style="margin-left: 5%">
          <v-col cols="3">
            <h3> Mail : </h3>
          </v-col>
          <v-col >
            <h3>{{currentUser.email}}</h3>
          </v-col>
        </v-row>

        <v-row style="margin-left: 5%">
          <v-col cols="3">
            <h3> Dirección : </h3>
          </v-col>
          <v-col>
            <h3>{{currentUser.street}} {{currentUser.street_number}}</h3>
          </v-col>
        </v-row>


        <v-row style="margin-top: 5%; margin-left: 5%">
          <h3>Configuración</h3>
        </v-row>

        <v-card :to="edit_link"  style="border-color: white; background-color: white; box-shadow: none">
          <v-row style="margin-left: 5%" >
            <v-col cols="2">
                <v-icon >mdi-pencil</v-icon>
            </v-col>
            <v-col >
              <h3>Editar perfil</h3>
            </v-col>
          </v-row>
        </v-card>



        <v-row style="margin-left: 5%">
          <v-col cols="2">
            <v-icon>mdi-bell</v-icon>
          </v-col>
          <v-col >
            <h3>Notificaciones</h3>
          </v-col>
        </v-row>

        <v-row style="margin-left: 5%">
          <v-col cols="2">
            <v-icon>mdi-key</v-icon>
          </v-col>
          <v-col>
            <h3>Privacidad</h3>
          </v-col>
        </v-row>



      </v-card>
  </div>

</template>

import router from '@/router';

<script>

import UserStore from "@/store/UserStore";

export default {
  name: "TarjetaDatosPerfil",

  data() {
    return {
      edit_link: "/EditarPerfil",
      currentUser : {}
    }
  },
  async created() {

      this.currentUser = await UserStore.getCurrentUser();

  }
}

</script>

<style scoped>

</style>