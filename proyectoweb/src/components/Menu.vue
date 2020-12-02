<template>
  <div>
    <v-img :src="require('../assets/LogoGigante.png')" @click="$router.push(home_link)" alt="Logo Gigante" id="logo" class="mx-3"></v-img>

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
        <v-menu v-model="loggingIn" :close-on-content-click="false" offset-y nudge-bottom="10">
          <template v-slot:activator="{on}">
            <v-btn id='boton-superior' text v-on="on">Iniciar sesión</v-btn>
          </template>
          <login/>
        </v-menu>
      </v-col>
      <v-col v-if="isLoggedIn" xs='6' sm='4' md="3" lg="2">
        <v-btn v-if="isUser" id='boton-superior' text>
          <v-icon left>mdi-chevron-down</v-icon>
          <span>Mi perfil</span> 
        </v-btn>
        <v-btn v-else id='boton-superior' text>
          <v-icon left>mdi-chevron-down</v-icon>
          <span>Mi organización</span> 
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="blue lighten-5 pl-6">
    <!-- donante -->
    <v-app-bar v-if="showDetail && isUser" id="filaMenu" color="blue lighten-5" flat width="100%" height="50%">
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

    <!-- donante -->
    <v-app-bar v-if="!showDetail && isUser" id="filaMenu" color="blue lighten-5" flat width="100%" height="50%">
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

    <!-- ong -->
    <v-app-bar v-if="showDetail && !isUser" id="filaMenu" color="blue lighten-5" flat width="100%" height="50%">
      <v-icon color='black' style="margin: 0 1%;" @click="showDetail = !showDetail">mdi-chevron-right</v-icon>
      <v-btn :to="mis_campañas_link" text>
        <v-icon left>mdi-bullhorn-outline</v-icon>
        <span>Mis campañas</span>
      </v-btn>
      <v-btn :to="noticias_link" text>
        <v-icon left>mdi-newspaper-variant-outline</v-icon>
        <span>Noticias</span>
      </v-btn>
      <v-btn :to="recibido_link" text>
        <v-icon left>mdi-handshake-outline</v-icon>
        <span>Ayuda recibida</span>
      </v-btn>
    </v-app-bar>

    <!-- ong -->
    <v-app-bar v-if="!showDetail && !isUser" id="filaMenu" color="blue lighten-5" flat width="100%" height="50%">
      <v-icon color='black' style="margin: 0 1%;" @click="showDetail = !showDetail">mdi-chevron-down</v-icon>
      <v-btn :to="mis_campañas_link" text>
        <v-icon left>mdi-bullhorn-outline</v-icon>
      </v-btn>
      <v-btn :to="noticias_link" text>
        <v-icon left>mdi-newspaper-variant-outline</v-icon>
      </v-btn>
      <v-btn :to="recibido_link" text>
        <v-icon left>mdi-handshake-outline</v-icon>
      </v-btn>
    </v-app-bar>
    </v-row>
   
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
      isUser: true,       //Si es true es donante, sino es ong
      isLoggedIn: false,
      loggingIn: false,
      
      home_link: '/',
      registro_link: '/Registro',
      quienesSomos_link: '/QuienesSomos',
      noticias_link: '/Noticias',
      mis_campañas_link: '/MisCampañas',
      recibido_link: '/AyudaRecibida'
    }
  },

  created() {
    if (sessionStorage.getItem('token') != undefined){
      this.isLoggedIn = true;
      this.isUser = sessionStorage.getItem('category') === 'ong'? false:true;
    }
    else{
      this.isLoggedIn = false;
      this.isUser = true;
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