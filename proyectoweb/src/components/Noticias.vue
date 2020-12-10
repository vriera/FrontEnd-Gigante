<template>
  <div class="pa-5">
    <h1 class="ml-5 azulGigante" align="center">{{ isOng ? "MIS NOTICIAS":"ÚLTIMAS NOTICIAS" }}
      <v-btn dark small v-if="isOng" :to="crear_noticia" color="blue" class="ml-5 mb-2">Crear noticia</v-btn>
    </h1>
    <v-container fluid grid-list-xl>
      <v-layout wrap justify-space-around>
        <v-flex v-for="(noticia,index) in noticias" :key="noticia.id_advertisement">
          <item-noticias :is-ong="isOng" :image="noticia.image_url" :id="noticia.id_advertisement" :title="noticia.title" :author="authors[index]" :desc="noticia.body" :read-more-link="readMoreLink"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ItemNoticias from '@/components/ItemNoticias'
import UserStore from "@/store/UserStore";

export default {
  name: "Noticias",
  props:["isOng"],
  components: {
    'item-noticias' : ItemNoticias,
  },
  data(){
    return {
      image: '',
      title: '',
      author: '',
      desc: '',
      readMoreLink: '',
      crear_noticia: "/CrearNoticia",
      noticias: [],
      authors: [],
      store: UserStore,
    }
  },
  async created(){
    this.image = "https://cdn.vuetifyjs.com/images/cards/cooking.png";
    let result;
    if(this.isOng) {
      result = await this.store.getMyAdvertisements();
    }
    else{
      result = await this.store.getAdvertisements();
    }
    this.noticias = result.results;
    let ong;
    for(let i = 0; i < this.noticias.length; i++){
      ong = await this.store.getOngs(this.noticias[i].id_ong)
      this.authors.push(ong.fullname);
    }
    this.readMoreLink = "/" //FIXME: placeholder
  }
}
</script>

<style scoped>
  .flex {
    flex-grow: 0;
  }
  .azulGigante {
    color: rgb(88, 118, 189);
  }
</style>