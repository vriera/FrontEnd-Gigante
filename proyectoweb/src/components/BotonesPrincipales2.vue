<template>
  <div>
    <v-row>
          <v-col>
            <div @click="change()" style="margin:0px; margin-left: 10px; margin-top:50%">
              <Tarjeta v-bind:DatosTarjeta="infoTarjeta[0]"></Tarjeta>
            </div>
          </v-col>
          <v-col>
            <div @click="change()" style="margin:0px;">
              <Tarjeta v-bind:DatosTarjeta="infoTarjeta[1]"></Tarjeta>
            </div>
          </v-col>
          <v-col>
            <div @click="change()" style="margin:0px; margin-top:50%; margin-right: 10px">
              <Tarjeta v-bind:DatosTarjeta="infoTarjeta[2]"></Tarjeta>
            </div>
          </v-col>
    </v-row>
  </div>
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