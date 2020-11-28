<template>
  <div>    
    <v-row>
        <v-col cols='5'>
            <v-card id='sectionCampaignsCard' color="blue lighten-5">
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
            <v-card v-else id='sectionSelectedCard' color="blue lighten-5">
              <v-card style="padding: 5%; height: 100%;">
                <span id='cardTitle'>{{campaigns[campaignSelected].name}}</span>
                <div id="campaignInfo">
                <v-row>
                  <span>Desde: {{campaigns[campaignSelected].start}}</span>
                </v-row>
                <v-row>
                  <span>Hasta: {{campaigns[campaignSelected].end}}</span>
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
                  <span>Barrio: {{campaigns[campaignSelected].neighbourhood}}</span>
                </v-row>
                <v-row>
                  <span>Horarios: {{campaigns[campaignSelected].horario}}</span>
                </v-row>
                <v-row>
                  <span>Contacto: {{campaigns[campaignSelected].contacto}}</span>
                </v-row>
                <v-row>
                  <span>Teléfono: {{campaigns[campaignSelected].phone}}</span>
                </v-row>
                <v-btn id="editarBtn" :to="editar_campaña_link" color="blue lighten-3">
                  <span style="margin: 5% 0 0 0;">Editar</span>
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

export default {

  data(){
    return {

        crear_campaña_link: '/CrearCampaña',
        editar_campaña_link: '/EditarCampaña',

        campaignSelected: 0,//-1,   //Índice de la campaña que estoy mostrando en detalle

        campaigns: [{name: "Campaña 1", start: "14/07/2020", end:"05/08/2020", description:"Junta de tapitas para el Garrahan", street:"Libertador", street_number:"542", city: "C.A.B.A.", neighbourhood:"Palermo", horario:"14:00 - 18:00", contacto: "pepegomez@gmail.com", phone:"15-4066-2487"}, 
          {name: "Campaña 2", start: "10/06/2020", end:"12/10/2020", description:"Ayuda para construir casas en Liniers", street:"Gral. Rodríguez", street_number:"1300", city: "C.A.B.A.", neighbourhood:"Liniers", horario:"11:00 - 18:00", contacto: "alicia@gmail.com", phone:"15-5555-2487"},
          {name: "Campaña 3", start: "24/07/2020", end:"25/08/2020", description:"Junta de comida para el comedor Gómez", street:"Rivadavia", street_number:"5400", city: "C.A.B.A.", neighbourhood:"Caballito", horario:"14:00 - 22:00", contacto: "pepitocrack@gmail.com", phone:"15-4066-1111"},
          {name: "Campaña 4", start: "03/06/2020", end:"29/09/2020", description:"Junta de juguetes para el Garrahan", street:"Libertador", street_number:"542", city: "C.A.B.A.", neighbourhood:"Palermo", horario:"14:00 - 18:00", contacto: "pepegomez@gmail.com", phone:"15-4066-2487"},
          {name: "Campaña 5", start: "14/07/2020", end:"05/08/2020", description:"Junta de tapitas para el Garrahan", street:"Libertador", street_number:"542", city: "C.A.B.A.", neighbourhood:"Palermo", horario:"14:00 - 18:00", contacto: "pepegomez@gmail.com", phone:"15-4066-2487"}]

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

#campaignInfo{
    font-size: 1.2em;
}

#descRow{
    border: solid;
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