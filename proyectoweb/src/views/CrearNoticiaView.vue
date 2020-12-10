<template>
  <div id="fondo">
    <v-row justify="center">
      <h1 class="ml-5" style="margin: 2% 0;">CREAR NOTICIA</h1>
    </v-row>
    <v-card class="justify-center" style="margin: 0 10%; padding: 2%;">

      <v-layout column align-center class="py-5">
        <v-img contain max-height="220" :src="imagen" @error="errorHandler" lazy-src="@/assets/default.png"/>
      </v-layout>

    <form v-if="!submitted" style="padding: 2%;">

            <v-alert
            prominent
            max-width="50%"
            style="margin: 3% auto;"
            class="mx-auto"
            v-if="submitError"
            color="red"
            icon="mdi-bullhorn"
            type="error" >
            <v-row align="center">
            <v-col>
            {{ mensajeAlertForm}}
            </v-col>
            <v-col class="shrink">
            <v-btn @click="submitError = !submitError">Aceptar</v-btn>
            </v-col>
            </v-row>
            </v-alert>

            <v-row>
                    <span class="formHint">Imagen: </span>
                    <v-text-field
                    v-model="imagen"
                    label="Insertá el link a tu imagen"
                    outlined
                    rounded
                    @blur="$v.imagen.$touch()"
                    ></v-text-field>
            </v-row>
            <v-row>
                    <span class="formHint">Título: </span>
                    <v-text-field
                    v-model="titulo"
                    :error-messages="tituloErrors"
                    label="Dale un título"
                    outlined
                    rounded
                    required
                    @blur="$v.titulo.$touch()"
                    ></v-text-field>
            </v-row>
            <v-row>
                    <span class="formHint">Texto: </span>
              <v-textarea
              v-model="texto"
              :error-messages="textoErrors"
              label="Completá el texto"
              required
              @blur="$v.texto.$touch()"

              style="width: 90%; margin: 0 auto;"
              clearable
              filled
              rounded
              auto-grow
              background-color="blue lighten-5"
              color="blue lighten-1"
              rows="4"
            ></v-textarea>
            </v-row>
            <v-btn id="submitBtn" @click="submit" color="blue lighten-3">
              <span>Publicar</span>
            </v-btn>
          
    </form>
    </v-card>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'
import UserStore from "@/store/UserStore";

export default {
  mixins: [validationMixin],

  validations: {
    titulo :  {required},
    texto : {required},
  },

name: "CrearNoticiaView",

  data(){
    return{
        noticiaslink: 'Noticias',
        imagen: '',
        titulo: '',
        texto: '',

        mensajeAlertForm: '',
        mensajeAlertSubmitted: 'Se ha creado la publicación con éxito',
        imgError: false,
        submitError : false,
        submitted : false, 
        loading : false,
        store: UserStore
    }
  },

  computed:{
    tituloErrors () {
      const errors = []
      if (!this.$v.titulo.$dirty) return errors
      !this.$v.titulo.required && errors.push('El título es obligatorio')
      return errors
    },
    textoErrors () {
      const errors = []
      if (!this.$v.texto.$dirty) return errors
      !this.$v.texto.required && errors.push('Inserte algo de texto para su publicación')
      return errors
    },
  },
  async created() {
    this.imagen = "https://i.ibb.co/kQ2V4zz/placeholder.png";
  },
  methods: {
    errorHandler() {
      this.imgError = true;
      // this.$forceUpdate();
    },
    async submit () {
      this.$v.$touch()
      if (!this.$v.$invalid){
        console.log("entra")
        this.loading = true;

        if(this.imgError)
          this.imagen = "https://i.ibb.co/kQ2V4zz/placeholder.png";
        
        let result;
        result = await this.store.addAdvertisement(this.store.getCurrentId(), this.titulo, this.texto, this.imagen)

        if (!result.success){
          this.submitError = true;
          this.mensajeAlertForm = 'Error al crear la publicación, inténtelo más tarde';
        }
        else{
          this.submitted = true;
          this.loading = false;
          this.$router.go(-1);
        }

        this.loading = false;
      }

    },
  },
}
</script>

<style scoped>

.formHint{
    margin: 1% 2% 0 0;
}

#submitBtn{
    text-transform: none;
    width: 20%;
    display: table;
    color: white;
    margin: 0 auto;
}

</style>