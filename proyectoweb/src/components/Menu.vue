<template>
  <div>
    <v-row class="blue lighten-3">
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
    <v-row>
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
      <v-img :src="require('../assets/fondoColores2.png')"/>
    </v-row>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      showDetail: false,
      isLoggedIn: false,
    }
  }
}
</script>

<style scoped>

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