<template>
  <div id="fondo">

    <div class="sidebar pad2">
      <v-card color="#FFFFFF" scrollable height="800px" width="100%">
        <p class ="titulo">Asociaciones
          <v-icon>mdi-filter</v-icon>
        </p>
        <!--mdi-filter</v-icon>-->
        <v-virtual-scroll height="700px"  item-height="270px" :items="descriptions">
          <template v-slot:default="{ item }">
            <v-card v-on:click="item.marker.togglePopup()" class="mx-2" color="#DBEDF8" height="250">
                <v-card-title >{{item.title}}</v-card-title>
                <v-card-subtitle>{{ item.ong}}</v-card-subtitle>
                <v-card-text>
                  <v-layout column>
                    <v-flex><v-icon small color="#72BAE6">mdi-map-marker sm</v-icon> {{item.direccion}}</v-flex>
                    <v-flex><v-icon small class="my-3" color="#72BAE6">mdi-clock</v-icon> {{item.horario}}</v-flex>
                    <v-flex class="d-inline-block text-truncate"><v-icon small color="#72BAE6">mdi-format-list-numbered</v-icon> {{item.lista}}</v-flex>
                  </v-layout>
                </v-card-text>
                <!-- TODO: Categorías -->
                <v-card-actions>
                  <v-spacer/>
                  <v-btn dark color="blue" :to="'/VerCampaña/' + item.camp_id">Más información</v-btn>
                </v-card-actions>
            </v-card>
          </template>
        </v-virtual-scroll>
      </v-card>
    </div>

    <div>
      <div id='map' class='map pad2'>Map</div>
    </div>
  </div>
</template>




<script>
// @ is an alias to /src
import {geomapApi, AddressData} from '@/Geocode/geomap.js'
import 'mapbox-gl/dist/mapbox-gl.css'
import CampaignStore from "@/store/CampaignStore";
import UserStore from "@/store/UserStore";

export default {
  components: {
    //'listado' : Listado,
  },
  data() {
    return {
      map: '',
      currentUser : {},
      userStore: UserStore,
      markers: [],
      descriptions: [
        // {
        //   marker: {},
        //   title: 'AAAAAAA',
        //   direccion: 'Calle 1234 piso 1A',
        //   horario: 'Lunes a viernes, 12:00- 18:00',
        //   lista: 'ropa de abrigo, donaciones monetarias'
        // },
        // {
        //   marker: {},
        //   title: 'Fundación Sí',
        //   direccion: 'Calle 1234 piso 1A',
        //   horario: 'Lunes a viernes, 12:00- 18:00',
        //   lista: 'ropa de abrigo, donaciones monetarias'
        // },
        // {
        //   marker: {},
        //   title: 'Fundación Sí',
        //   direccion: 'Calle 1234 piso 1A',
        //   horario: 'Lunes a viernes, 12:00- 18:00',
        //   lista: 'ropa de abrigo, donaciones monetarias'
        // },
        // {
        //   marker: {},
        //   title: 'Fundación Sí',
        //   direccion: 'Calle 1234 piso 1A',
        //   horario: 'Lunes a viernes, 12:00- 18:00',
        //   lista: 'ropa de abrigo, donaciones monetarias'
        // },
        // {
        //   marker: {},
        //   title: 'Fundación Sí',
        //   direccion: 'Calle 1234 piso 1A',
        //   horario: 'Lunes a viernes, 12:00- 18:00',
        //   lista: 'ropa de abrigo, donaciones monetarias'
        // },
        // {
        //   marker: {},
        //   title: 'Fundación Sí',
        //   direccion: 'Calle 1234 piso 1A',
        //   horario: 'Lunes a viernes, 12:00- 18:00',
        //   lista: 'ropa de abrigo, donaciones monetarias'
        // },
      ],
      filtro: 'mdi-filter'
    }
  },

  async created(){

    const answer = await CampaignStore.getActiveCampaigns();
    const campaigns = answer.results;
    console.log(campaigns);
    let ong;
    for( let i=0 ; i < campaigns.length ; i++){
        ong = await UserStore.getOngs(campaigns[i].id_ong);
        this.descriptions.push({
          title : campaigns[i].name,
          ong : ong.fullname,
          direccion : campaigns[i].street+' '+campaigns[i].street_number+' '+campaigns[i].city,
          horario : campaigns[i].schedule,
          lista : campaigns[i].description,
          camp_id: campaigns[i].id_campaign,
          marker : {}
         });
      }
    },
  
  async mounted() {
    this.currentUser = await this.userStore.getCurrentUser();
    let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pdGFjcnV6IiwiYSI6ImNrZ3A5d2Z6ZDA3M3Iyc2tsbmJjeGd4N2EifQ.7XEbgzqidyEuJKVfFg4U2A';
    this.map = new mapboxgl.Map({
      container: 'map', //the id of an element on your page where you would like your map.
      style: 'mapbox://styles/mapbox/streets-v11',
      // center: [-58.3876273, -34.5903130],
      center : [this.currentUser.longitude, this.currentUser.latitude],
      zoom: 14
    });
    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, "top-right");


    // TODO: SET POPUP
    // Nombre campaña, nombre ong, dirección, descripción
    const answer = await CampaignStore.getActiveCampaigns();
    const campaigns = answer.results;
    console.log(campaigns);
    // let ong;

    for( let i=0 ; i < campaigns.length ; i++){
      //let titleBackup = this.descriptions[i].title;
      // console.log(this.descriptions[i].title);
      // this.descriptions[i].title.concat("\n");
      this.descriptions[i].marker = new mapboxgl.Marker()
            .setLngLat(await geomapApi.getCoordinates(new AddressData(campaigns[i].street,campaigns[i].street_number, campaigns[i].city)))
            .setPopup(new mapboxgl.Popup().setText(this.descriptions[i].title+'\n'+this.descriptions[i].ong+'\n'
            +this.descriptions[i].direccion+'\n'+this.descriptions[i].lista))
            // .setPopup(new mapboxgl.Popup().setTitle(this.descriptions[i].title).setText(this.descriptions[i].ong+'\n'
            //      +this.descriptions[i].direccion+'\n'+this.descriptions[i].lista))
            // .setPopup(new mapboxgl.Popup().setHTML("<h1>{{this.descriptions[i].title}}</h1>" +
            //        "<p>{{this.descriptions[i].ong}}</p>" +
            //        "<p>{{this.descriptions[i].direccion}}</p>"))
            .addTo(this.map);
      //this.descriptions[i].title = titleBackup;
     }

    }

    // this.descriptions[0].marker = new mapboxgl.Marker()
    //     .setLngLat(await geomapApi.getCoordinates(new AddressData("Angel Justiniano Carranza",1962, "CABA"), null))
    //     .addTo(this.map);

    // this.descriptions[0].marker = new mapboxgl.Marker()
    //     .setLngLat([-58.3876273, -34.5903130])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Fundación Sí</h1>" +
    //         "<p>Quintana y montevideo</p>" +
    //         "<p>No recibe donaciones</p>"))
    //     .addTo(this.map);

    // this.descriptions[1].marker = new mapboxgl.Marker()
    //     .setLngLat([-58.414281,-34.581505])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Fundación Sí</h1>" +
    //         "<p>las Heras y arabe siria</p>" +
    //         "<p>No recibe donaciones</p>"))
    //     .addTo(this.map);
    //
    // this.descriptions[2].marker = new mapboxgl.Marker()
    //     .setLngLat([-58.378482,-34.595680])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Fundación Sí</h1>" +
    //         "<p>Esmeralda y Santa fe</p>" +
    //         "<p>No recibe donaciones</p>"))
    //     .addTo(this.map);
    //
    // this.descriptions[3].marker = new mapboxgl.Marker()
    //     .setLngLat([-58.399482,-34.595780])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Fundación Sí</h1>" +
    //         "<p>Esmeralda y Santa fe</p>" +
    //         "<p>No recibe donaciones</p>"))
    //     .addTo(this.map);
    // this.descriptions[4].marker = new mapboxgl.Marker()
    //     .setLngLat([-58.389482,-34.598780])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Fundación Sí</h1>" +
    //         "<p>Esmeralda y Santa fe</p>" +
    //         "<p>No recibe donaciones</p>"))
    //     .addTo(this.map);
    // this.descriptions[5].marker = new mapboxgl.Marker()
    //     .setLngLat([-58.414281,-34.591505])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Fundación Sí</h1>" +
    //         "<p>las Heras y arabe siria</p>" +
    //         "<p>No recibe donaciones</p>"))
    //     .addTo(this.map);


}
</script>

<style scoped>
body {
  background: #404040;
  color: #f8f8f8;
  font: 500 20px/26px 'Helvetica Neue', Helvetica, Arial, Sans-serif;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}

/* The page is split between map and sidebar - the sidebar gets 1/3, map
gets 2/3 of the page. You can adjust this to your personal liking. */
.sidebar {
  width: 33.3333%;
}

.map {
  border-left: 1px solid #fff;
  position: absolute;
  left: 33.3333%;
  width: 65%;
  top: 2%;
  bottom: 2%;

}

.pad2 {
  padding: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.titulo {
  font-size: 45px;
  font-family: "Arial Black";
  text-align: center;

}

</style>
