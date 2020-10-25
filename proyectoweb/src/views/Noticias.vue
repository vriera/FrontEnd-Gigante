<template>
<div id="fondo">
  <app-menu/>
  <h1>NOTICIAS</h1>
  <ul>
    <li v-for="noticia in noticias" :key="noticia.title" >
      <item-noticias :image="image" :title="title" :author="author" :desc="desc" :read-more-link="readMoreLink"/>
    </li>
  </ul>


</div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import ItemNoticias from '@/components/ItemNoticias'

export default {
  name: "Noticias",
  components: {
    'app-menu' : Menu,
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

</style>