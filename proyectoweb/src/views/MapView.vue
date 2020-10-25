<template>
  <div id="fondo">
    <row>
      <app-menu></app-menu>
    </row>
    <row>
      <div>
        <div class='sidebar pad2'>Listing</div>
        <div id='map' class='map pad2'>Map</div>
      </div>
    </row>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  components: {
    'app-menu' : Menu,
  },
  data() {
    return {
      map: '',
    }
  },
  mounted() {
    let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pdGFjcnV6IiwiYSI6ImNrZ3A5d2Z6ZDA3M3Iyc2tsbmJjeGd4N2EifQ.7XEbgzqidyEuJKVfFg4U2A';
    this.map = new mapboxgl.Map({
      container: 'map', //the id of an element on your page where you would like your map.
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.034084, 38.909671],
      zoom: 14
    });
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
  width: 66.6666%;
  top: 0;
  bottom: 0;
}

.pad2 {
  padding: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

</style>