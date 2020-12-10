<template>
  <v-container fluid>
    <v-layout column align-center class="py-5">
        <h1 class="text-center">Una pequeña ayuda siempre es GIGANTE</h1>
        <h3 class="text-center">Explora las distintas opciones y empieza hoy con esta increíble experiencia</h3>
    </v-layout>
    <v-row>
          <v-col>
              <div style="margin:0px; margin-left: 10px; margin-top:30%">
               <Tarjeta v-bind:DatosTarjeta="infoTarjeta[0]"></Tarjeta>
              </div>
          </v-col>
          <v-col>
              <div style="margin:0px;">
                <Tarjeta v-bind:DatosTarjeta="infoTarjeta[1]"></Tarjeta>
              </div>
          </v-col>
          <v-col>
              <div style="margin:0px; margin-top:30%; margin-right: 10px">
                <Tarjeta v-bind:DatosTarjeta="infoTarjeta[2]"></Tarjeta>
              </div>
          </v-col>
    </v-row>
  </v-container>
</template>


<script>
import Tarjeta from "./Tarjeta"
export default {
  name: 'BotonesPrincipales2',
  components: {
    Tarjeta
  },
  data(){
    return {
      infoTarjeta:[
        {
          text1: "mdi-hand-heart-outline",
          text2: "Realizar donaciones",
          text3: "Registrándose como colaborador se pueden realizar y registrar todas las donaciones hechas para diferentes campañas."
        },
        {
          text1: "mdi-handshake-outline",
          text2: "Participar en voluntariados",
          text3: "Registrándose como colaborador se pueden buscar campañas a las que donar tiempo para diversas causas."
        },
        {
          text1:"mdi-account-group",
          text2:"Administrar organizaciones",
          text3:"Registrándose como organización se pueden crear, editar y supervisar campañas propias, registrando los aportes recibidos."
        }
      ],
      aboutLink: '/about',
      homeLink: '/'
    }
  },
  methods: {
    change(){
      this.$router.push('404');
    }
  }
}
</script>
