<template>
  <div id="fondo" class="pa-5">
    <h1 class="ml-5">NOTICIAS</h1>
    <v-container fluid grid-list-xl>
      <v-layout wrap justify-space-around>
        <v-flex v-for="noticia in noticias" :key="noticia.title">
          <item-noticias :image="image" :title="title" :author="author" :desc="desc" :read-more-link="readMoreLink"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ItemNoticias from '@/components/ItemNoticias'

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
      noticias: [
        {image: this.image, title: this.title, author: this.author, desc: this.desc, readMoreLink: this.readMoreLink},
        {image: this.image, title: this.title, author: this.author, desc: this.desc, readMoreLink: this.readMoreLink},
        {image: this.image, title: this.title, author: this.author, desc: this.desc, readMoreLink: this.readMoreLink},
        {image: this.image, title: this.title, author: this.author, desc: this.desc, readMoreLink: this.readMoreLink},
        {image: this.image, title: this.title, author: this.author, desc: this.desc, readMoreLink: this.readMoreLink},
        {image: this.image, title: this.title, author: this.author, desc: this.desc, readMoreLink: this.readMoreLink},
      ],
    }
  },
  created(){
    this.image = "https://cdn.vuetifyjs.com/images/cards/cooking.png";
    this.title = "400 voluntarios nuevos";
    this.author = "Capital Humano";
    this.desc = "Estamos desbordados de la felicidad con la cantidad de gente que se presentó esta semana a la colecta en la sucursal de plaza alemania, …";
    this.readMoreLink = "/" //FIXME: placeholder
  }
}
</script>

<style scoped>

  .flex {
    flex-grow: 0;
  }

</style>