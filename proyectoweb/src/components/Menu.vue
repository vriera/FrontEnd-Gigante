<template>
  <div>
    <v-img :src="require('../assets/LogoGigante.png')" alt="Logo Gigante" id="logo"></v-img>

    <v-row id="filaMenu" class="blue lighten-3" >
      <v-col xs='6' sm='4' md="3" lg="2">
        <v-btn router :to='homeLink' id='gigante' text>GIGANTE</v-btn>
      </v-col>
      <v-col xs='6' sm='4' md="3" lg="2">
        <v-btn router :to='aboutLink' id='boton-superior' text>Quiénes somos</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col v-if="!isLoggedIn" xs='6' sm='4' md="3" lg="2">
        <v-btn id='boton-superior' text>Registrarse</v-btn>
      </v-col>
      <v-col v-if="!isLoggedIn" xs='6' sm='4' md="3" lg="2">
        <v-btn id='boton-superior' text>Iniciar sesión</v-btn>
      </v-col>
      <v-col v-if="isLoggedIn" xs='6' sm='4' md="3" lg="2">
        <v-btn id='boton-superior' text>
          <v-icon left>mdi-chevron-down</v-icon>
          <span>Mi perfil</span> 
        </v-btn>
      </v-col>
    </v-row>
    <v-row id="filaMenu" class="blue lighten-5">
    <v-app-bar v-if="showDetail" color="blue lighten-5" flat width="100%" height="50%">
      <v-icon color='black' style="margin: 0 1%;" @click="showDetail = !showDetail">mdi-chevron-right</v-icon>
      <v-btn text>
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

    <v-app-bar v-else color="blue lighten-5" flat width="100%" height="50%">
      <v-icon color='black' style="margin: 0 1%;" @click="showDetail = !showDetail">mdi-chevron-down</v-icon>
      <v-btn text>
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

    <v-row>
      <v-img :src="require('../assets/fondoColores2.png')">
        <v-row>
          <v-col>
            <div @click="change()" style="margin:10px; margin-left: 20px; margin-top:50%">
              <Tarjeta v-bind:DatosTarjeta="infoTarjeta[0]"></Tarjeta>
            </div>
          </v-col>
          <v-col>
            <div @click="change()" style="margin:10px;">
              <Tarjeta v-bind:DatosTarjeta="infoTarjeta[1]"></Tarjeta>
            </div>
          </v-col>
          <v-col>
            <div @click="change()" style="margin:10px; margin-top:50%; margin-right: 10px">
                <Tarjeta v-bind:DatosTarjeta="infoTarjeta[2]"></Tarjeta>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-row>
    
  </div>
</template>

<script>
import Tarjeta from "./Tarjeta"
export default {
  components: {
    Tarjeta
  },
  data(){
    return {
      showDetail: false,
      isLoggedIn: false,
      infoTarjeta:[
        {
          text1: "Quiero ayudar con",
          text2: "DONACIONES",
          text3: "Tengo distintos elementos que quisiera donar."
        },
        {
          text1: "Quiero ser",
          text2:"VOLUNTARIO",
          text3:"Quiero donar mi tiempo."
        },
        {
          text1:"Soy una",
          text2:"ONG",
          text3:"Quiero hacerme visible para gente que quiera ayudarnos."
        }
      ]
    }
  },
  methods: {
    change(){
      this.$router.push('404');
    }
  }
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