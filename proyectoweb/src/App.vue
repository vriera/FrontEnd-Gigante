<template>
  <div id="app">
    <v-app>
      <v-main>
          <div id="nav">
            <router-link to="/">Home</router-link> | 
            <router-link to="/About">About</router-link>
          </div>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

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
</style>
