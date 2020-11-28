<template>
<div id="fondo">
  <v-container fluid grid-list-xl>
    <v-card flat class="ma-10 pb-2">
      <v-layout column align-center id="header">
          <img height="200" src="https://i.ibb.co/27SGCt3/stars.png" alt="Logo" class="mt-5">
          <v-card-title class="text-button mb-6 headerTitle">Team DockerStars</v-card-title>
      </v-layout>
      <v-layout wrap justify-space-around class="mx-10">
      <v-card flat width="500" class="mb-5" v-for="i in team" :key="i.name">
        <v-row>
          <img height="110" class="ml-3 roundedImg" :src="i.img" :alt="i.name">
          <v-col rows="11">
            <v-card-title>{{ i.name }}</v-card-title>
            <v-card-subtitle>{{ i.role }}</v-card-subtitle>
          </v-col>
        </v-row>
      </v-card>
      </v-layout>
    </v-card>
  </v-container>
</div>
</template>


<script>
// @ is an alias to /src

export default {
  components: {
  },
  data () {
    return {
      team: [
        { name: 'Luciana Diaz Kralj', img: 'https://i.ibb.co/3Rd7CMV/IMG-1697-2.jpg', role: 'Team Lead'},
        { name: 'Ana Cruz', img: 'https://i.ibb.co/9HdB5Mg/Anita.png', role: 'Designer'},
        { name: 'Julian Sicardi', img: 'https://i.ibb.co/fSL2krr/Beto.png', role: 'Database Administrator'},
        { name: 'Manuel Félix Parma', img: 'https://i.ibb.co/WyDCrWW/Lat.png', role: 'Testing & Integration'},
        { name: 'Juan Ignacio Quintairos', img: 'https://i.ibb.co/4VyD8zx/Juani.png', role: 'FrontEnd Developer'},
        { name: 'Salustiano Savalía', img: 'https://i.ibb.co/TrvsSjz/Salus.png', role: 'FrontEnd Developer'},
        { name: 'Valentino Riera Torraca', img: 'https://i.ibb.co/pr6X9WW/Valchar.png', role: 'BackEnd Developer'},
        { name: 'Igal Revich', img: 'https://i.ibb.co/4ZSKxN0/Igal.png', role: 'BackEnd Developer'}
      ],
    }
  }
}
</script>

<style scoped>
  .headerTitle {
    padding: 0%;
  }
  .roundedImg {
    border-radius: 50%;
  }
</style>
