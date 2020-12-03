<template>
  <div>    
    <v-row>
        <v-col cols='5'>
            <v-card id='sectionCampaignsCard' color="blue lighten-5">
                    <span class='cardTitle'>Mis Campañas</span>
                    <v-virtual-scroll height="640px"  item-height="300px" :items="campaigns">
                        <template v-slot:default="{index, item}">
                            <v-card id='campaignCard' outlined shaped elevation="2" @click="campaignSelected=index">
                                <span id='campaignName'>{{item.name}}</span>
                                <span><br/><br/>Fechas: {{item.init_date}} - {{item.end_date}}<br/><br/></span>
                                <span>Descripción: {{item.description}}</span>
                            </v-card>
                        </template>
                    </v-virtual-scroll>
            </v-card>
        </v-col>
        <v-col cols='5'>
            <v-card v-if='campaignSelected < 0' shaped color="blue lighten-2" id='noCampaignSelected'>
              <span id='noCampaignText'>Seleccione una campaña activa de la lista de la izquierda para mostrar aquí sus detalles</span>
            </v-card>
            <v-card v-else id='sectionSelectedCard' color="blue lighten-5">
              <v-card style="padding: 5%; height: 100%;">
                <span class='cardTitle'>{{campaigns[campaignSelected].name}}</span>
                <div id="campaignInfo">
                <v-row>
                  <span>Desde: {{campaigns[campaignSelected].init_date}}</span>
                </v-row>
                <v-row>
                  <span>Hasta: {{campaigns[campaignSelected].end_date}}</span>
                </v-row>
                <v-row id='descRow'>
                  <span>{{campaigns[campaignSelected].description}}</span>
                </v-row>
                <v-row style="margin-bottom: 5%;">
                  <span>*Botones de categorias para seleccionar*</span>
                </v-row>
                <v-row>
                  <span>Dirección: {{campaigns[campaignSelected].street}} {{campaigns[campaignSelected].street_number}}</span>
                </v-row>
                <v-row>
                  <span>Ciudad: {{campaigns[campaignSelected].city}}</span>
                </v-row>
                <v-row style="margin-bottom: 5%;">
                  <span>Barrio: {{campaigns[campaignSelected].location}}</span>
                </v-row>
                <v-row>
                  <span>Horarios: {{campaigns[campaignSelected].schedule}}</span>
                </v-row>
                <v-row>
                  <span>Contacto: {{campaigns[campaignSelected].contact}}</span>
                </v-row>
                <v-row>
                  <span>Teléfono: {{parsePhone(campaigns[campaignSelected].phone)}}</span>
                </v-row>
                <v-btn id="editarBtn" @click="$router.push(editar_campaña_link + campaigns[campaignSelected].id_campaign)" color="blue lighten-3">
                  <span>Editar</span>
                </v-btn>
                </div>
              </v-card>
            </v-card>
        </v-col>
        <v-col cols='2' id='btnCol'>
            <v-btn id='newCampaignBtn' :to="crear_campaña_link" color="blue lighten-3" rounded elevation="10">
                <span>Añadir nueva campaña</span>
            </v-btn>
        </v-col>
    </v-row>
  </div>
</template>

<script>

import CampaignStore from "@/store/CampaignStore";

export default {

  data(){
    return {

        crear_campaña_link: '/CrearCampaña',
        editar_campaña_link: '/EditarCampaña/',

        campaignSelected: 0,//-1,   //Índice de la campaña que estoy mostrando en detalle

      campaigns: [],
      store: CampaignStore,
    }
  },

  async created(){
    const result = await this.store.getMyCampaigns();
    this.campaigns = result.results;
    console.log(this.campaigns);
  },

  methods: {
    parsePhone(phone){
      let result = phone;
      if(phone.toString().length == 8){
        //4-4
        result = [phone.slice(0, 4), '-', phone.slice(4)].join('');
        return result;
      }

      if(phone.toString().length == 10){
        //2-4-4
        result = [phone.slice(0, 2), '-', phone.slice(2, 6), '-', phone.slice(6)].join('');
        return result;
      }

      return phone;
    },
  },

}
</script>

<style scoped>

#newCampaignBtn{
  color:white;
  font-weight: bold;
  margin: 100% 0;
  padding: 10% 10% 10% 10%;
  text-transform: none;
}

#sectionCampaignsCard{
  margin: 5% 5%;
  padding: 5% 5% 0 5%;
  height: 100%;
}

#sectionSelectedCard{
  margin: 5% 5%;
  padding: 3%;
  height: 100%;
}

#noCampaignSelected{
  margin: 30% auto;
  padding: 5%;
  height: 20%;
  width: 40%;
  text-align: center;
  display: table;
}

#noCampaignText{
    display: table;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
}

.cardTitle{
    margin: 0 auto 2% auto;
    display: table;
    color: rgb(88, 118, 189);
    font-weight: bold;
    font-size: 2em;
    text-transform: uppercase;
}

#campaignCard{
    margin: 0 2%;
    padding: 4% 5%;
    height: 280px;
}

#campaignName{
    color: #90CAF9;
    font-weight: bold;
    font-size: 1.8em;
    text-transform: uppercase;
}

#campaignInfo{
    font-size: 1.2em;
}

#descRow{
    border: solid;
    border-color: cornflowerblue;
    border-width: thin;
    margin: 5% 0 5% 0;
    padding: 2%;
}

#editarBtn{
    text-transform: none;
    margin: 10% auto 0 auto;
    display: table;
    color: white;
    width: 40%;
}
</style>