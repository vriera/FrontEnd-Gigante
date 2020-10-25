<template>
  <div id="app">
    <v-app>
      <app-menu/>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Menu from '@/components/Menu.vue';

  export default {
    components: {
      'app-menu' : Menu,
    }
  }
</script>

<style lang="scss">

#nav {
  padding: 1%;
  margin: auto;
  width: 50%;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
 #fondo{
   background-image: url('./assets/fondoColores2.png');
   background-size: 100% 100%;
   width: 100%;
   height: 100%;
 }
</style>
