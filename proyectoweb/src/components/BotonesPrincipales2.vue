<template>
  <div>
    <v-row>
          <v-col>
              <div style="margin:0px; margin-left: 10px; margin-top:50%">
               <Tarjeta v-bind:DatosTarjeta="infoTarjeta[0]"></Tarjeta>
              </div>
          </v-col>
          <v-col>
              <div style="margin:0px;">
                <Tarjeta v-bind:DatosTarjeta="infoTarjeta[1]"></Tarjeta>
              </div>
          </v-col>
          <v-col>
              <div style="margin:0px; margin-top:50%; margin-right: 10px">
                <Tarjeta v-bind:DatosTarjeta="infoTarjeta[2]"></Tarjeta>
              </div>
          </v-col>
    </v-row>
    <div style="text-align: center; margin-top:2%">
      <h1> Comenzá a explorar las distintas opciones y empezá con está GIGANTE experiencia</h1>
    </div>
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
          text1: "Si sos un/a",
          text2: "DONADOR/A",
          text3: "Podés realizar y ver tus donaciones para diferentes campañas."
        },
        {
          text1: "Si sos un/a",
          text2:"VOLUNTARIO/A",
          text3:"podés donar tu tiempo para diversas causas."
        },
        {
          text1:"Si sos una",
          text2:"ONG",
          text3:"Podés crear, editar y visualizar tus propias campañas."
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
