
<template>
  <div>
    <div id="mapContainer" class="basemap"></div>
    <h1> por favor funciona</h1>
  </div>
</template>

<script>

import mapboxgl from "mapbox-gl";

export default {
  name: "Mapa",
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiYW5pdGFjcnV6IiwiYSI6ImNrZ3A5d2Z6ZDA3M3Iyc2tsbmJjeGd4N2EifQ.7XEbgzqidyEuJKVfFg4U2A',
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [103.811279, 1.345399],
      zoom: 12,
      maxBounds: [
        [103.6, 1.1704753],
        [104.1, 1.4754753],
      ],
    });
  },
};
</script>
