<template>
  <div id="fondo">
    <div style="background-image: url('../assets/fondoColores2.png');">

      <div v-if="isOng">
        <noticias :is-ong="isOng"/>
        <v-btn style="left: 50%;width: 300px;height: 100px; font-size: 15pt;" color="primary" class="rounded-pill" fixed bottom :to="crear_noticia">CREAR NOTICIA</v-btn>
      </div>

      <div v-if="!isOng">
        <noticias/>
      </div>

    </div>
  </div>
</template>

<script>

import Noticias from "@/components/Noticias";
import UserStore from "@/store/UserStore";


export default {
  components: {
    'noticias' : Noticias,
  },
  data(){
    return {
      crear_noticia: "/CrearNoticia",
      userStore: UserStore,
      isOng: false,
    }
  },
  created(){
    this.isOng = this.userStore.isOng();
  },
}
</script>

<style scoped>

</style>