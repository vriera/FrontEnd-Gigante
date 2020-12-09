<template>
  <div class="pa-5">
    <h1 class="ml-5" align="center">NOTICIAS</h1>
    <v-container fluid grid-list-xl>
      <v-layout wrap justify-space-around>
        <v-flex v-for="(noticia,index) in noticias" :key="noticia.id_advertisement">
          <item-noticias :image="image" :title="noticia.title" :author="authors[index]" :desc="noticia.body" :read-more-link="readMoreLink"/>
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
      //noticias: [
        //{image: this.image, title: this.title, author: this.author, desc: this.desc, readMoreLink: this.readMoreLink},
        //{image: this.image, title: this.title, author: this.author, desc: this.desc, readMoreLink: this.readMoreLink},
        //{image: this.image, title: this.title, author: this.author, desc: this.desc, readMoreLink: this.readMoreLink},
        //{image: this.image, title: this.title, author: this.author, desc: this.desc, readMoreLink: this.readMoreLink},
        //{image: this.image, title: this.title, author: this.author, desc: this.desc, readMoreLink: this.readMoreLink},
        //{image: this.image, title: this.title, author: this.author, desc: this.desc, readMoreLink: this.readMoreLink},
      //],
      noticias: [],
      authors: [],
      store: UserStore,
    }
  },
  async created(){
    this.image = "https://cdn.vuetifyjs.com/images/cards/cooking.png";
    const result = await this.store.getAdvertisements();
    this.noticias = result.results;
    console.log(this.noticias);
    let ong;
    for(let i = 0; i < this.noticias.length; i++){
      ong = await this.store.getOngs(this.noticias[i].id_ong)
      this.authors.push(ong.fullname);
    }
    console.log(this.authors);
    //this.title = "400 voluntarios nuevos";
    //this.author = "Capital Humano";
    //this.desc = "Estamos desbordados de la felicidad con la cantidad de gente que se presentó esta semana a la colecta en la sucursal de plaza alemania, …";
    this.readMoreLink = "/" //FIXME: placeholder
  }
}
</script>

<style scoped>

.flex {
  flex-grow: 0;
}

</style>