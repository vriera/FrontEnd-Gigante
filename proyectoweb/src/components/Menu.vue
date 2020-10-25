<template>
  <div>
    <v-img :src="require('../assets/LogoGigante.png')" @click="$router.push(registro_link)" alt="Logo Gigante" id="logo"></v-img>

    <v-row id="filaMenu" class="blue lighten-3" >
      <v-col xs='6' sm='4' md="3" lg="2">
        <v-btn router :to='home_link' id='gigante' text>GIGANTE</v-btn>
      </v-col>
      <v-col xs='6' sm='4' md="3" lg="2">
        <v-btn router :to='quienesSomos_link' id='boton-superior' text>Quiénes somos</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col v-if="!isLoggedIn" xs='6' sm='4' md="3" lg="2">
        <v-btn id='boton-superior' router :to="registro_link" text>Registrarse</v-btn>
      </v-col>
      <v-col v-if="!isLoggedIn" xs='6' sm='4' md="3" lg="2">
        <v-btn id='boton-superior' text @click="loggingIn = !loggingIn">Iniciar sesión</v-btn>
      </v-col>
      <v-col v-if="isLoggedIn" xs='6' sm='4' md="3" lg="2">
        <v-btn id='boton-superior' text>
          <v-icon left>mdi-chevron-down</v-icon>
          <span>Mi perfil</span> 
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="blue lighten-5">
    <v-app-bar v-if="showDetail" id="filaMenu" color="blue lighten-5" flat width="100%" height="50%">
      <v-icon color='black' style="margin: 0 1%;" @click="showDetail = !showDetail">mdi-chevron-right</v-icon>
      <v-btn :to="noticias_link" text>
        <v-icon left>mdi-newspaper-variant-outline</v-icon>
        <span>Noticias</span>
      </v-btn>
      <v-btn text>
        <v-icon left>mdi-package-variant-closed</v-icon>
        <span>Donaciones</span>
      </v-btn>
      <v-btn text>
        <v-icon left>mdi-handshake-outline</v-icon>
        <span>Voluntariado</span>
      </v-btn>
      <v-btn text>
        <v-icon left>mdi-bullhorn-outline</v-icon>
        <span>Campañas</span>
      </v-btn>
      <v-btn v-if="isLoggedIn" text>
        <v-icon left>mdi-account-multiple-outline</v-icon>
        <span>Actividad</span>
      </v-btn>
    </v-app-bar>

    <v-app-bar v-else id="filaMenu" color="blue lighten-5" flat width="100%" height="50%">
      <v-icon color='black' style="margin: 0 1%;" @click="showDetail = !showDetail">mdi-chevron-down</v-icon>
      <v-btn :to="noticias_link" text>
        <v-icon left>mdi-newspaper-variant-outline</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon left>mdi-package-variant-closed</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon left>mdi-handshake-outline</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon left>mdi-bullhorn-outline</v-icon>
      </v-btn>
      <v-btn v-if="isLoggedIn" text>
        <v-icon left>mdi-account-multiple-outline</v-icon>
      </v-btn>
    </v-app-bar>
    </v-row>

    <login v-if="loggingIn"></login>
    
  </div>
</template>

<script>
import Login from "@/components/Login";

export default {
  components: {
    'login' : Login,
  },

  data(){
    return {
      showDetail: false,
      isLoggedIn: false,
      loggingIn: false,
      
      home_link: '/',
      registro_link: '/Registro',
      quienesSomos_link: '/AcercaDeNostros',
      noticias_link: 'Noticias',
    }
  },

}
</script>

<style scoped>

#logo{
  width: 120px;
  position: absolute;
  z-index: 1000;
}

#filaMenu{
  padding: 0 0 0 8%;
}

.v-btn {
    text-transform: none;
}

#boton-superior{
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  padding: 10% 10% 10% 10%;
}

#gigante{
  color:white;
  margin: 0 5%;
  font-weight: bold;
  font-size: 2.3em;
  padding: 10% 10% 10% 10%;
}



</style>