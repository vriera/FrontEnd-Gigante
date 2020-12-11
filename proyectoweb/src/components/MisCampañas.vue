<template>
  <div>    
    <v-row class="mb-15 pb-5">
        <v-col cols='5'>
            <v-card id='sectionCampaignsCard' color="blue lighten-2">
                    <h1 class="white--text text-center mb-5 mx-10">
                      MIS CAMPAÑAS
                      <div>
                        <v-btn depressed id='newCampaignBtn' :to="crear_campaña_link" color="white" rounded>Añadir nueva campaña</v-btn>
                      </div>
                    </h1>
                    <v-card v-if="noCampaignsYet" id='noCampaignsYet' outlined shaped elevation="2">
                      <span>Aún no tiene campañas creadas</span>
                    </v-card>
                    <v-virtual-scroll height="650px" item-height="250px" :items="campaigns">
                        <template v-slot:default="{index, item}">
                            <v-card id='campaignCard' outlined shaped elevation="2" @click="changeCamp(index)">
                                <v-card-title id='campaignName'>{{item.name}}</v-card-title>
                                <v-card-text class="black--text d-inline-block text-truncate">
                                  <b>Fechas:</b> {{item.init_date}} - {{item.end_date}}<br/>
                                  <b>Descripción:</b> {{item.description}}
                                </v-card-text>
                                <v-card-actions>
                                  <v-spacer/>
                                  <v-chip class="mr-5" dark :color="item.active ? 'green':'red'" >{{ item.active ? "Activa":"Inactiva" }}</v-chip>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-virtual-scroll>
            </v-card>
        </v-col>
        <v-col cols='7' class="mb-3">
            <v-card v-if='campaignSelected < 0' shaped color="blue lighten-2" id='noCampaignSelected'>
              <span id='noCampaignText'>Seleccione una campaña activa de la lista de la izquierda para mostrar aquí sus detalles</span>
            </v-card>
            <v-card v-else id='sectionSelectedCard' color="blue lighten-2" style="margin-top: 3.5%">
              <v-card style="padding: 5%; height: 100%;">
                
                <v-row>
                  <v-spacer/>
                  <span class="cardTitle mb-1">{{campaigns[campaignSelected].name}}</span>
                  <v-spacer/>
                </v-row>
                <v-row>
                  <v-spacer/>
                  <v-chip dark class="mb-5" :color="campaigns[campaignSelected].active ? 'green':'red'" >Campaña {{ campaigns[campaignSelected].active ? "activa":"inactiva" }}</v-chip>
                  <v-spacer/>
                </v-row>

                <v-row>
                  <span class="mr-5"><b>Desde:</b> {{campaigns[campaignSelected].init_date}}</span>
                  <span><b>Hasta:</b> {{campaigns[campaignSelected].end_date}}</span>
                </v-row>
                
                <v-row>
                  <span><b>Descripción: </b>{{campaigns[campaignSelected].description}}</span>
                </v-row>

                <v-row class="my-3">
                    <span class="font-weight-bold mr-3">Categorías: </span>
                    <tag-row :id_campaign="campaigns[campaignSelected].id_campaign"/>
                </v-row>

                <v-row>
                  <span><b>Dirección:</b> {{campaigns[campaignSelected].street}} {{campaigns[campaignSelected].street_number}}, {{campaigns[campaignSelected].location}}, {{campaigns[campaignSelected].city}}. </span>
                </v-row>
                
                <v-row>
                  <span><b>Contacto:</b> {{campaigns[campaignSelected].contact}}</span>
                </v-row>
                <v-row>
                  <span><b>Teléfono:</b> {{parsePhone(campaigns[campaignSelected].phone)}}</span>
                </v-row>
                <v-row>
                  <span><b>Horario de atención:</b> {{campaigns[campaignSelected].schedule}}</span>
                </v-row>

                <v-row class="mt-5">
                  <v-spacer/>
                  <v-btn dark @click="$router.push(editar_campaña_link + campaigns[campaignSelected].id_campaign)" color="blue">Editar campaña</v-btn>
                  <v-spacer/>
                </v-row>
              </v-card>
            </v-card>
        </v-col>
    </v-row>
  </div>
</template>

<script>

import CampaignStore from "@/store/CampaignStore";
import TagRow from './TagRow.vue';

export default {
  components: { TagRow },

  data(){
    return {

        crear_campaña_link: '/CrearCampaña',
        editar_campaña_link: '/EditarCampaña/',

        noCampaignsYet: false,
        campaignSelected: -1,   //Índice de la campaña que estoy mostrando en detalle

      campaigns: [],
      store: CampaignStore,
    }
  },

  async created(){
    const result = await this.store.getMyCampaigns();
    this.campaigns = result.results;
    if (this.campaigns.length === 0)
      this.noCampaignsYet = true;
  },

  methods: {
    changeCamp(index) {
      this.campaignSelected = index;
      this.$forceUpdate();
    },
    parsePhone(phone){
      let result = phone;
      let phoneS = phone.toString();
      if(phoneS.length == 8){
        //4-4
        result = [phoneS.slice(0, 4), '-', phoneS.slice(4)].join('');
        return result;
      }

      if(phoneS.length == 10){
        //2-4-4
        result = [phoneS.slice(0, 2), '-', phoneS.slice(2, 6), '-', phoneS.slice(6)].join('');
        return result;
      }

      return phone;
    }
  },

}
</script>

<style scoped>

#newCampaignBtn{
  color:rgb(88, 118, 189);
  font-weight: bold;
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
    /* margin: 0 auto 2% auto; */
    display: table;
    color: rgb(88, 118, 189);
    font-weight: bold;
    font-size: 2em;
    text-transform: uppercase;
}

#campaignCard{
    margin: 0 2%;
    height: 230px;
}

#noCampaignsYet{
    margin: 10% 2% 0 2%;
    padding: 4% 5%;
}

#campaignName{
    /* color: #90CAF9; */
    color: rgb(88, 118, 189);
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

#activeText{
    margin: 2% 0 0 80%;
    padding: 1% 2%;
    border: solid;
    border-width: thin;
    background-color: rgb(133, 241, 133);
}

#inactiveText{
    margin: 2% 0 0 80%;
    padding: 1% 2%;
    border: solid;
    border-width: thin;
    background-color: rgb(252, 120, 120);
}

#activeTextOnNonDetailed{
    margin: 0 0 0 70%;
    padding: 1% 2%;
    border: solid;
    border-width: thin;
    background-color: rgb(133, 241, 133);
}

#inactiveTextOnNonDetailed{
    margin: 0 0 0 70%;
    padding: 1% 2%;
    border: solid;
    border-width: thin;
    background-color: rgb(252, 120, 120);
}

.azulGigante {
    color: rgb(88, 118, 189);
  }
</style>