<template>
    <v-card flat>
        <v-card-title>{{ camp.nombre }}</v-card-title>
        <v-card-subtitle v-if="empty">Nada para mostrar, aún.</v-card-subtitle>
        <v-flex v-for="f in formsAyuda" :key="f.id" class="infoForm mx-4">
            <InfoAyuda v-if="f.idCamp === camp.id" :info="f" :infoId="f.id" v-on:loaded="empty=false"/>
        </v-flex>
    </v-card>
</template>

<script>
import InfoAyuda from "./InfoAyuda.vue";
import Vue from 'vue'

export default Vue.extend({
    props: {
        camp: Object,
        campId: Number
    },
    components: {
        InfoAyuda
    },
    data () {
        return {

            // formsAyuda: [] as FormAyuda[],
            empty: true,
            loaded: false,
            
            formsAyuda: [
                { id: 1, idCamp: 1, usuario: "María José", msj: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate quae quibusdam tempora ullam assumenda voluptatem quos consequatur, corporis ipsa architecto repellendus rerum in itaque quam nam nostrum praesentium asperiores?" },
                { id: 2, idCamp: 1, usuario: "José María", msj: "Eius cupiditate quae quibusdam tempora ullam assumenda voluptatem quos consequatur, corporis ipsa architecto repellendus rerum in itaque." },
                { id: 3, idCamp: 2, usuario: "Azul Pérez", msj: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate quae quibusdam tempora ullam rerum in itaque quam nam nostrum praesentium asperiores?" },
                { id: 4, idCamp: 2, usuario: "Franco Serrano", msj: "Adipisicing elit. Eius cupiditate quae quibusdam tempora ullam assumenda voluptatem quos consequatur, corporis ipsa architecto repellendus rerum in itaque quam nam nostrum praesentium asperiores?" },
                { id: 5, idCamp: 3, usuario: "Rodrigo Casas", msj: "Cupiditate quae quibusdam tempora ullam assumenda nam nostrum praesentium asperiores?" },
                { id: 6, idCamp: 3, usuario: "Dana Sosa", msj: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate quae quibusdam tempora ullam assumenda voluptatem quos consequatur, corporis ipsa architecto repellendus rerum in itaque quam nam nostrum praesentium asperiores?" },
                { id: 7, idCamp: 3, usuario: "Pilar Rojas", msj: "Eius cupiditate quae quibusdam tempora ullam assumenda voluptatem quos consequatur, corporis ipsa architecto repellendus." },
            ]
        }
    },
    async mounted() {
        try {
            // this.formsAyuda = ;
            this.loaded = true;
        } catch (e) {
            console.log('ERROR AL CARGAR FORMULARIOS DE AYUDA RECIBIDA');
        }
    }
})
</script>

<style>
    .infoForm {
        padding: 0%;
        margin: 0%;
    }
</style>