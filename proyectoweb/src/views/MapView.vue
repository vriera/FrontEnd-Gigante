<template>
  <div id="fondo">

    <div class="sidebar pad2">
      <v-card color="#FFFFFF" scrollable height="800px" width="100%">
        <v-card-title>
          <h2 class="azulGigante">CAMPAÑAS</h2>
          <v-spacer/>
          <v-tooltip bottom>
            <template v-slot:activator="{on, attrs}">
              <v-btn icon v-on:click="filtros=!filtros" v-on="on" v-bind="attrs">
                <v-icon>{{ filtros ? 'mdi-filter-variant-remove':'mdi-filter-variant' }}</v-icon>
              </v-btn>
            </template>
            <span>Filtrar</span>
          </v-tooltip>
        </v-card-title>
        <v-card-text v-if="filtros" v-model="selection">
            <v-chip-group active-class="primary--text" column multiple>
              <v-chip v-for="tag in categories" :key="tag.id_category">{{ tag.description }}</v-chip>
            </v-chip-group>
            <v-card-actions>
              <v-spacer/>
              <v-btn text color="blue" v-on:click="filter()">Aplicar filtros</v-btn>
            </v-card-actions>
        </v-card-text>

        <v-virtual-scroll height="700px"  item-height="270px" :items="filteredList">
          <template v-slot:default="{ item }">
            <v-card v-on:click="pan(item.lat_lng); item.marker.togglePopup();" class="mx-2" color="#DBEDF8" height="250">
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
  data() {
    return {
      map: '',
      currentUser : {},
      userStore: UserStore,
      markers: [],
      descriptions: [],
      filtros: false,
      selection: [],
      categories: []
    }
  },
  computed: {
    filteredList() {
      // if(this.selection.length < 1) {
        return this.descriptions;
      // }
      // return this.descriptions.filter(camp => {
      //   const ans = CampaignStore.getCampaignCategories(camp.camp_id);
      //   console.log(ans);
      //   return;
      // });
    }
  },
  methods: {
    filter() {
      this.filtros = false;
    },
    pan(coord) {
      this.map.panTo(coord);
    }
  },

  async created(){
    const answer = await CampaignStore.getActiveCampaigns();
    const campaigns = answer.results;
    const ans = await CampaignStore.getCategories();
    this.categories = ans.results;
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
          lat_lng: {},
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

    const answer = await CampaignStore.getActiveCampaigns();
    const campaigns = answer.results;
    console.log(campaigns);

    for( let i=0 ; i < campaigns.length ; i++){
      //let titleBackup = this.descriptions[i].title;
      // console.log(this.descriptions[i].title);
      // this.descriptions[i].title.concat("\n");
      const latLong = await geomapApi.getCoordinates(new AddressData(campaigns[i].street,campaigns[i].street_number, campaigns[i].city));
      this.descriptions[i].lat_lng = latLong;
      this.descriptions[i].marker = new mapboxgl.Marker()
            .setLngLat(latLong)
            .setPopup(new mapboxgl.Popup().setHTML('<h3>'+this.descriptions[i].title+'</h3><h4>'+this.descriptions[i].ong+'</h4><h5>'
            +this.descriptions[i].direccion+'</h5><p>'+this.descriptions[i].lista+'</p>'))
            .addTo(this.map);
      //this.descriptions[i].title = titleBackup;
    }
  }
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

.azulGigante {
        color: rgb(88, 118, 189);
}

</style>
