<template>
  <div>
    <v-img :src="require('../assets/LogoGigante.png')" @click="$router.push(home_link)" alt="Logo Gigante" id="logo" class="mx-3"></v-img>

    <v-row class="filaMenu blue lighten-3">
      <v-col xs='6' sm='4' md="3" lg="2">
        <v-btn router :to='home_link' id='gigante' text>GIGANTE</v-btn>
      </v-col>
      <v-col id='topCol' xs='6' sm='4' md="3" lg="2">
        <v-btn router :to='quienesSomos_link' class='boton-superior' text>Quiénes somos</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col v-if="!isLoggedIn" id='topCol' xs='6' sm='4' md="3" lg="2">
        <v-btn class='boton-superior' router :to="registro_link" text>Registrarse</v-btn>
      </v-col>
      <v-col v-if="!isLoggedIn" id='topCol' xs='6' sm='4' md="3" lg="2"  class="mr-10">
        <v-menu v-model="loggingIn" :close-on-content-click="false" offset-y nudge-bottom="10">
          <template v-slot:activator="{on}">
            <v-btn class='boton-superior' text v-on="on">Iniciar sesión</v-btn>
          </template>
          <login/>
        </v-menu>
      </v-col>
      
      <v-spacer v-if="isLoggedIn"/>

      <v-col v-if="isLoggedIn" id='topCol' xs='6'>

      <v-menu
      offset-y
      class="ml-10"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-if="isUser" class='boton-superior' text v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Mi perfil</span> 
          </v-btn>
          <v-btn v-else class='boton-superior' text v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Mi organización</span> 
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in profileBtns"
            :key="index"
          >
            <v-btn v-if="index == 0" :to="perfil_link" class="blue lighten-5" text style="width: 100%;">
              <span>{{ item.title }}</span>
            </v-btn>
            <v-btn v-else @click="logout()" class="blue lighten-5" text style="width: 100%;">
              <v-icon left style="color: red;">mdi-logout</v-icon>
              <span style="color: red;">{{ item.title }}</span>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      </v-col>
    </v-row>

    <v-row v-if="!isLoggedIn" class="blue lighten-5 pl-6">
      <v-app-bar class="filaMenu" color="blue lighten-5" flat width="100%" height="50%">
          <v-icon left color="black">mdi-hand-heart-outline</v-icon>
          <span><b>Inicia sesión para ver todas las funcionalidades</b></span>
      </v-app-bar>
    </v-row>

    <v-row v-if="isLoggedIn" class="blue lighten-5 pl-6">
    <!-- donante -->
    <v-app-bar v-if="showDetail && isUser" class="filaMenu" color="blue lighten-5" flat width="100%" height="50%">
      <v-icon color='black' style="margin: 0 1%;" @click="showDetail = !showDetail">mdi-chevron-right</v-icon>
      <v-btn :to="noticias_link" text>
        <v-icon left>mdi-newspaper-variant-outline</v-icon>
        <span>Noticias</span>
      </v-btn>
      <v-btn :to="mapa_link" text>
        <v-icon left>mdi-map-search-outline</v-icon>
        <span>Mapa</span>
      </v-btn>
      <v-btn text :to="camp_activas">
        <v-icon left>mdi-bullhorn-outline</v-icon>
        <span>Campañas</span>
      </v-btn>
      <v-btn v-if="isLoggedIn" text :to="mi_actividad">
        <v-icon left>mdi-hand-heart-outline</v-icon>
        <span>Mi actividad</span>
      </v-btn>
    </v-app-bar>

    <!-- donante -->
    <v-app-bar v-if="!showDetail && isUser" class="filaMenu" color="blue lighten-5" flat width="100%" height="50%">
      <v-icon color='black' style="margin: 0 1%;" @click="showDetail = !showDetail">mdi-chevron-down</v-icon>
      <v-btn :to="noticias_link" text>
        <v-icon left>mdi-newspaper-variant-outline</v-icon>
      </v-btn>
      <v-btn :to="mapa_link" text>
        <v-icon left>mdi-map-search-outline</v-icon>
      </v-btn>
      <v-btn text :to="camp_activas">
        <v-icon left>mdi-bullhorn-outline</v-icon>
      </v-btn>
      <v-btn v-if="isLoggedIn" text :to="mi_actividad">
        <v-icon left>mdi-hand-heart-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- ong -->
    <v-app-bar v-if="showDetail && !isUser" class="filaMenu" color="blue lighten-5" flat width="100%" height="50%">
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
        <v-icon left>mdi-hand-heart-outline</v-icon>
        <span>Ayuda recibida</span>
      </v-btn>
    </v-app-bar>

    <!-- ong -->
    <v-app-bar v-if="!showDetail && !isUser" class="filaMenu" color="blue lighten-5" flat width="100%" height="50%">
      <v-icon color='black' style="margin: 0 1%;" @click="showDetail = !showDetail">mdi-chevron-down</v-icon>
      <v-btn :to="mis_campañas_link" text>
        <v-icon left>mdi-bullhorn-outline</v-icon>
      </v-btn>
      <v-btn :to="noticias_link" text>
        <v-icon left>mdi-newspaper-variant-outline</v-icon>
      </v-btn>
      <v-btn :to="recibido_link" text>
        <v-icon left>mdi-hand-heart-outline</v-icon>
      </v-btn>
    </v-app-bar>
    </v-row>
   
  </div>
</template>

<script>
import Login from "@/components/Login";
import UserStore from "@/store/UserStore";

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
      recibido_link: '/AyudaRecibida',
      perfil_link: '/Perfil',
      mapa_link: '/Mapa',
      camp_activas: '/CampañasActivas',
      mi_actividad: '/MiActividad',

      profileBtns: [
        { title: 'Ver perfil' },
        { title: 'Cerrar sesión' },
      ],
    }
  },


  created() {
    if (sessionStorage.getItem('token') != null){
      this.isLoggedIn = true;
      this.isUser = sessionStorage.getItem('category') !== 'ong';
    }
    else{
      this.isLoggedIn = false;
      this.isUser = true;
    }
  },

  methods:{

    async logout(){
      let success = false;
      success = await UserStore.logout();

      this.isLoggedIn = false;
      if (!success)
        console.log("Error al cerrar sesión");
      else
        console.log("Sesión cerrada con éxito")
      location.reload();
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

.filaMenu{
  padding: 0 0 0 8%;
}

#topCol{
  padding: 1.2%;
}

.v-btn {
    text-transform: none;
}

.boton-superior{
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