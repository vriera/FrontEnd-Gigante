<template>
  <div id="fondo">
    <div style="background-image: url('../assets/fondoColores2.png');">

      <div v-if="isOng">
        <noticias :is-ong="isOng"/>
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