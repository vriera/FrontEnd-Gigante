<template>
  <div id="fondo">
    <row>
      <app-menu></app-menu>
    </row>
    <row>

      <div class="sidebar pad2">
        <v-container>
          <v-card color="#FFFFFF" height="800px">
            <p class ="titulo" v-icon>Asociaciones <v-icon>mdi-filter</v-icon></p>
            <!--mdi-filter</v-icon>-->
              <v-card  v-for="desc in descriptions" :key="desc" style="margin-top: 10px" color="#DBEDF8" >
                <div v-on:click="desc.marker.togglePopup()">
                  <v-card-title >{{desc.title}}</v-card-title>
                  <v-card-text style="margin-top: -15px; margin-left: 20px"><v-icon color="#72BAE6">mdi-map-marker sm</v-icon>{{desc.direccion}}</v-card-text>
                  <v-card-text style="margin-top: -15px; margin-left: 20px"><v-icon color="#72BAE6">mdi-clock</v-icon> {{desc.horario}}</v-card-text>
                  <v-card-text style="margin-top: -15px; margin-left: 20px"><v-icon color="#72BAE6">mdi-format-list-numbered</v-icon> {{desc.lista}}</v-card-text>
                </div>
              </v-card>
          </v-card>
        </v-container>

      </div>

      <div>
        <div id='map' class='map pad2'>Map</div>
      </div>
    </row>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
//import Listado from '@/components/Listado.vue'

export default {
  components: {
    'app-menu' : Menu,
    //'listado' : Listado,
  },
  data() {
    return {
      map: '',
      markers: [],
      descriptions: [
        {
          marker: {},
          title: 'Fundación Sí',
          direccion: 'Calle 1234 piso 1A',
          horario: 'Lunes a viernes, 12:00- 18:00',
          lista: 'ropa de abrigo, donaciones monetarias'
        },
        {
          marker: {},
          title: 'Fundación Sí',
          direccion: 'Calle 1234 piso 1A',
          horario: 'Lunes a viernes, 12:00- 18:00',
          lista: 'ropa de abrigo, donaciones monetarias'
        },
        {
          marker: {},
          title: 'Fundación Sí',
          direccion: 'Calle 1234 piso 1A',
          horario: 'Lunes a viernes, 12:00- 18:00',
          lista: 'ropa de abrigo, donaciones monetarias'
        },
        {
          marker: {},
          title: 'Fundación Sí',
          direccion: 'Calle 1234 piso 1A',
          horario: 'Lunes a viernes, 12:00- 18:00',
          lista: 'ropa de abrigo, donaciones monetarias'
        },
        {
          marker: {},
          title: 'Fundación Sí',
          direccion: 'Calle 1234 piso 1A',
          horario: 'Lunes a viernes, 12:00- 18:00',
          lista: 'ropa de abrigo, donaciones monetarias'
        },
        {
          marker: {},
          title: 'Fundación Sí',
          direccion: 'Calle 1234 piso 1A',
          horario: 'Lunes a viernes, 12:00- 18:00',
          lista: 'ropa de abrigo, donaciones monetarias'
        },
      ],
      filtro: 'mdi-filter'
    }
  },
  mounted() {
    let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pdGFjcnV6IiwiYSI6ImNrZ3A5d2Z6ZDA3M3Iyc2tsbmJjeGd4N2EifQ.7XEbgzqidyEuJKVfFg4U2A';
    this.map = new mapboxgl.Map({
      container: 'map', //the id of an element on your page where you would like your map.
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-58.3876273, -34.5903130],
      zoom: 14
    });
    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, "top-right");

    this.descriptions[0].marker = new mapboxgl.Marker()
        .setLngLat([-58.3876273, -34.5903130])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Fundación Sí</h1>" +
            "<p>Quintana y montevideo</p>" +
            "<p>No recibe donaciones</p>"))
        .addTo(this.map);

    this.descriptions[1].marker = new mapboxgl.Marker()
        .setLngLat([-58.414281,-34.581505])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Fundación Sí</h1>" +
            "<p>las Heras y arabe siria</p>" +
            "<p>No recibe donaciones</p>"))
        .addTo(this.map);

    this.descriptions[2].marker = new mapboxgl.Marker()
        .setLngLat([-58.378482,-34.595680])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Fundación Sí</h1>" +
            "<p>Esmeralda y Santa fe</p>" +
            "<p>No recibe donaciones</p>"))
        .addTo(this.map);

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
  top: 15%;
  bottom: 2%;

}

.pad2 {
  padding: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.titulo {
  font-size: 50px;
  font-family: "Arial Black";
  text-align: center;

}

</style>
