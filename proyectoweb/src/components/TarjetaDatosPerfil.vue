<template>
  <div id="profileId">
      <v-card width="600px" style="border-radius: 50px">
        <v-row justify="center" class="pt-5">
          <h1 class="azulGigante mb-2">PERFIL</h1>
        </v-row>
        <v-row class="ml-10">
          <v-icon color="black" class="mr-3">{{ isOng ? "mdi-account-group":"mdi-account-details" }}</v-icon>
          <h3>{{ isOng ? "Datos de la organización":"Mis datos" }}</h3>
        </v-row>

          <v-row class="ml-10">
            <h4 class="mr-3"> Nombre: </h4>
            <h4>{{currentUser.fullname}}</h4>
          </v-row>

        <v-row class="ml-10">
            <h4 class="mr-3"> Mail: </h4>
            <h4>{{currentUser.email}}</h4>
        </v-row>

        <v-row class="ml-10">
            <h4 class="mr-3"> Dirección: </h4>
            <h4>{{currentUser.street}} {{currentUser.street_number}}{{currentUser.floor != '-' ? " - Piso "+currentUser.floor:"" }}, {{currentUser.region}}.</h4>
        </v-row>

        <div v-if="isOng">
          <v-row class="ml-10 mt-5">
            <v-icon color="black" class="mr-3">mdi-account-details</v-icon>
            <h3>Datos del representante</h3>
          </v-row>

          <v-row class="ml-10">
              <h4 class="mr-3"> Nombre: </h4>
              <h4>{{currentUser.rep_name}}</h4>
          </v-row>

          <v-row class="ml-10">
              <h4 class="mr-3"> DNI: </h4>
              <h4>{{currentUser.rep_dni}}</h4>
          </v-row>

        </div>

        <v-row class="ml-10 mt-5 mb-2">
           <v-icon color="black" class="mr-3">mdi-cog</v-icon>
          <h3>Configuración</h3>
        </v-row>

        <v-row class="pb-5 pl-13">
          <v-btn dark :to="edit_link" rounded color="black" class="mr-5">
                <v-icon left small>mdi-pencil</v-icon>
                Editar perfil
          </v-btn>
          <v-btn dark @click="logOut()" rounded color="blue">
                <v-icon small left>mdi-logout</v-icon>
                Cerrar sesión
          </v-btn>
        </v-row>

        <v-alert
            prominent
            max-width="50%"
            style="margin: 3% auto;"
            class="mx-auto"
            v-if="editProfileError"
            color="red"
            icon="mdi-bullhorn"
            type="error" >
          <v-row align="center">
            <v-col>
              {{ mensajeAlertEditProfile}}
            </v-col>
            <v-col class="shrink">
              <v-btn @click="editProfileError = !editProfileError">Aceptar</v-btn>
            </v-col>
          </v-row>
        </v-alert>

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
      currentUser: {},
      userStore: UserStore,
      isOng: false,
      editProfileError: false,
      mensajeAlertEditProfile: '',
    }
  },
  methods: {
    async logOut() {
      const result = await UserStore.logout();
      if (!result.success){
        this.loading = false;
        this.editProfileError = true;
        this.mensajeAlertEditProfile = 'Error al desloguearse , inténtelo más tarde';
      }
      else{
        //await this.$router.push('/');
        await this.$router.go({
          path: "/",
          force: true
        });
        // await this.$router.go((window.history.length -1 ) * (-1));
        // await this.$router.go(-2);
      }
    }
  },

  async created() {

      this.currentUser = await this.userStore.getCurrentUser();
      this.isOng = await this.userStore.isOng();

  }
}

</script>

<style scoped>
.azulGigante {
        color: rgb(88, 118, 189);
    }
#profileId{
  margin: 0 auto;
}
</style>