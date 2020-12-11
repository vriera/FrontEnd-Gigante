<template>
  <div id="fondo">

    <div class="sidebar pad2">
      <v-card color="#FFFFFF" scrollable height="800px" width="100%">
        <v-card-title>
          <h2 class="azulGigante">CAMPAÑAS</h2>
          <v-spacer/>
          <v-tooltip bottom>
            <template v-slot:activator="{on, attrs}">
              <v-btn depressed v-on:click="showFilters()" v-on="on" v-bind="attrs" class="mr-2">
                <v-icon left>{{ filtros ? 'mdi-filter-variant-remove':'mdi-filter-variant' }}</v-icon>
                Filtros
              </v-btn>
            </template>
            <span>{{ filtros ? 'Ocultar filtros':'Ver filtros' }}</span>
          </v-tooltip>
        </v-card-title>
        <v-card-text v-if="filtros">
            <v-chip-group active-class="primary--text" column multiple v-model="sel">
              <v-chip v-for="tag in categories" :key="tag.id_category" v-on:click="addCat(tag.id_category)">{{ tag.description }}</v-chip>
            </v-chip-group>
            <v-card-actions>
              <v-spacer/>
              <v-btn text color="red" v-on:click="deleteFilters()">Borrar filtros</v-btn>
              <v-btn text color="blue" v-on:click="filter()">Aplicar filtros</v-btn>
            </v-card-actions>
            <v-layout v-if="filtros && !search" column align-center class="pt-10">
              <span>Presione "Aplicar filtros" para ver los cambios</span>
            </v-layout>
            <v-layout v-if="filteredList.length == 0 && search" column align-center class="pt-10">
              <span>No se encontraron resultados</span>
            </v-layout>
        </v-card-text>

        <v-layout v-if="!loaded" column align-center class="py-5">
          <v-progress-circular indeterminate color="blue"/>
        </v-layout>

        <v-virtual-scroll height="700px"  item-height="285px" :items="filteredList" v-if="loaded && search">
          <template v-slot:default="{ item }">
            <v-card flat v-on:click="pan(item.lat_lng); item.marker.togglePopup();">
              <map-item :camp="item.obj" :ong="item.ong"/>
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
import MapItem from '../components/mapItem.vue';

export default {
  components: { MapItem },
  data() {
    return {
      map: '',
      currentUser : {},
      userStore: UserStore,
      markers: [],
      descriptions: [],
      filtros: false,
      loaded: false,
      search: true,
      selection: [],
      categories: []
    }
  },
  computed: {
    filteredList() {
      if(this.selection.length > 0) {
        return this.descriptions.filter(desc => {
          for(let i=0; i<desc.cat_camp.length; i++) {
            if(this.selection.includes(desc.cat_camp[i]))
              return true;
          }
          return false;
        });
      }
        return this.descriptions;
    }
  },
  methods: {
    filter() {
      this.search = true;
    },
    showFilters() {
      this.filtros = !this.filtros ;
      if(this.filtros)
        this.search = false;
    },
    deleteFilters() {
      this.selection = [];
      this.sel = [];
      this.search = true;
    },
    pan(coord) {
      this.map.panTo(coord);
    },
    addCat(cat_id) {
      this.search = false;
      if(!this.selection.includes(cat_id)) {
          this.selection.push(cat_id);
      } else {
        var index = this.selection.indexOf(cat_id);
        if (index > -1) {
          this.selection.splice(index, 1);
          // this.search = true;
        }
      }
    }
  },

  async created(){
    const answer = await CampaignStore.getActiveCampaigns();
    const campaigns = answer.results;
    const ans = await CampaignStore.getCategories();
    this.categories = ans.results;
    // console.log(campaigns);
    let ong;
    for( let i=0 ; i < campaigns.length ; i++){
        ong = await UserStore.getOngs(campaigns[i].id_ong);
        this.descriptions.push({
          obj: campaigns[i],
          ong: ong.fullname,
          title: campaigns[i].name,
          direccion : campaigns[i].street+' '+campaigns[i].street_number+', '+campaigns[i].location+', '+campaigns[i].city,
          lista : campaigns[i].description,
          lat_lng: {},
          cat_camp: [],
          marker: {}
         });
      }
      this.loaded = true;
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
    // console.log(campaigns);

    for( let i=0 ; i < campaigns.length ; i++){
      const latLong = await geomapApi.getCoordinates(new AddressData(campaigns[i].street,campaigns[i].street_number, campaigns[i].city));
      this.descriptions[i].lat_lng = latLong;
      this.descriptions[i].marker = new mapboxgl.Marker()
            .setLngLat(latLong)
            .setPopup(new mapboxgl.Popup().setHTML('<h3>'+this.descriptions[i].title+'</h3><h4>'+this.descriptions[i].ong+'</h4><h5>'
            +this.descriptions[i].direccion+'</h5><p>'+this.descriptions[i].lista+'</p>'))
            .addTo(this.map);

      const campCat = await CampaignStore.getCampaignCategories(this.descriptions[i].obj.id_campaign);
      const aux = [];
      for(let i=0; i<campCat.results.length; i++) {
        aux[i] = campCat.results[i].id_category;
      }
      this.descriptions[i].cat_camp = aux;
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
