<template>
  <div>    
    <v-row>
        <v-col cols='5'>
            <v-card id='sectionCard' color="blue lighten-5">
                    <span id='cardTitle'>Mis Campañas</span>
                    <v-virtual-scroll height="640px"  item-height="300px" :items="campaigns">
                        <template v-slot:default="{item}">
                            <v-card id='campaignCard' outlined shaped elevation="2">
                                <span id='campaignName'>{{item.name}}</span>
                                <span><br/><br/>Fechas: {{item.start}} - {{item.end}}<br/><br/></span>
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
            <v-card v-else id='sectionCard' color="blue lighten-5">
                <span id='cardTitle'>{{campaigns[campaignSelected].name}}</span>
                <v-row>
                  <span>Desde: {{campaigns[campaignSelected].start}}</span>
                </v-row>
                <v-row>
                  <span>Hasta: {{campaigns[campaignSelected].end}}</span>
                </v-row>
                <v-row id='descRow'>
                  <span>{{campaigns[campaignSelected].description}}</span>
                </v-row>
            </v-card>
        </v-col>
        <v-col cols='2' id='btnCol'>
            <v-btn id='newCampaignBtn' color="blue lighten-3" rounded>
                <span>Añadir nueva campaña</span>
            </v-btn>
        </v-col>
    </v-row>
  </div>
</template>

<script>

export default {

  data(){
    return {
        campaignSelected: 0,//-1,   //Índice de la campaña que estoy mostrando en detalle

        campaigns: [{name: "Campaña 1", start: "14/07/2020", end:"05/08/2020", description:"Junta de tapitas para el Garrahan"}, 
          {name: "Campaña 2", start: "10/06/2020", end:"12/10/2020", description:"Ayuda para construir casas en Liniers"},
          {name: "Campaña 3", start: "24/07/2020", end:"25/08/2020", description:"Junta de comida para el comedor Gómez"},
          {name: "Campaña 4", start: "03/06/2020", end:"29/09/2020", description:"Junta de juguetes para el Garrahan"},
          {name: "Campaña 5", start: "14/07/2020", end:"05/08/2020", description:"Junta de tapitas para el Garrahan"}]

    }
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

#sectionCard{
  margin: 5% 5%;
  padding: 5% 5% 0 5%;
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

#cardTitle{
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

#descRow{
    border: solid;
    border-width: thin;
    margin: 5% 0 5% 0;
    padding: 2%;
}
</style>