<template>
  <div id="profileId">
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

        <v-card @click="logOut()"  style="border-color: white; background-color: white; box-shadow: none">
          <v-row style="margin-left: 5%" >
            <v-col cols="2">
              <v-icon >mdi-logout</v-icon>
            </v-col>
            <v-col >
              <h3>Cerrar sesión</h3>
            </v-col>
          </v-row>
        </v-card>

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

#profileId{
  margin: 0 auto;
}
</style>