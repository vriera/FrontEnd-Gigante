<template>
  <div>
      <v-card width="500px" style="border-radius: 50px">
        <v-row style="margin-top: 5%; margin-left: 5%">
          <h3 style="margin-top: 5%">Datos</h3>
        </v-row>

          <v-row style="margin-left: 5%" >
            <v-col cols="3">
              <h3> Nombre : </h3>
            </v-col>
            <v-col >
              <h3>{{currentUser.fullname}}</h3>
            </v-col>
          </v-row>

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

        <div v-if="isOng">
          <v-row  style="margin-top: 5%; margin-left: 5%">
            <h3 >Datos del representante</h3>
          </v-row>

          <v-row style="margin-left: 5%">
            <v-col cols="3">
              <h3> Nombre : </h3>
            </v-col>
            <v-col >
              <h3>{{currentUser.rep_name}}</h3>
            </v-col>
          </v-row>

          <v-row style="margin-left: 5%">
            <v-col cols="3">
              <h3> DNI : </h3>
            </v-col>
            <v-col >
              <h3>{{currentUser.rep_dni}}</h3>
            </v-col>
          </v-row>

        </div>

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

        <v-row></v-row>



      </v-card>
  </div>

</template>


<script>

import UserStore from "@/store/UserStore";

export default {
  name: "TarjetaDatosPerfil",

  data() {
    return {
      edit_link: "/EditarPerfil",
      currentUser : {},
      userStore: UserStore,
      isOng: false,
    }
  },

  async created() {

      this.currentUser = await this.userStore.getCurrentUser();
      this.isOng = await this.userStore.getCurrentCategory() === 'ong';

  }
}

</script>

<style scoped>

</style>