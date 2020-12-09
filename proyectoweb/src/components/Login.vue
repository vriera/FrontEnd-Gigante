<template>
    <v-card flat id="cardLogin" class="blue lighten-3">
        <form id="formLogin">
        <v-text-field
          v-model="username"
          :error-messages="usernameErrors"
          label="Nombre de usuario"
          solo
          required
        @blur="$v.username.$touch()"
      ></v-text-field>
        <v-text-field
         v-model="password"
         :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
         :type="showPass ? 'text' : 'password'"
         @click:append="showPass = !showPass"
         :error-messages="passwordErrors"
         label="Contraseña"
         solo
         required
         @blur="$v.password.$touch()"
     ></v-text-field>

    <v-row>
        <v-spacer/>
            <v-col>
              <v-container v-if="loading" class="text-center" >
                <v-progress-circular
                    :size="50"
                    color="white"
                    indeterminate
                ></v-progress-circular>
              </v-container>
                <v-btn rounded @click="submit" id="botonLogin">
                    Iniciar Sesión
                </v-btn>
            </v-col>
        <v-spacer/>
    </v-row>

    <v-alert
            prominent
            max-width="90%"
            style="margin: 3%;"
            class="mx-auto"
            v-if="submitError"
            color="red"
            icon="mdi-account"
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
    </form>
    </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'
import UserStore from "@/store/UserStore";

export default {
    mixins: [validationMixin],

    validations: {
   
        password:{required},
        username: {required},
  },

  data(){
    return {
        password:'',
        username: '',
        loading : false,
        showPass: false,

        submitError: false,
        mensajeAlertForm: '',
    }
  },

  computed: {   
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('La contraseña es obligatoria')
      return errors
    },
    
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.required && errors.push('El nombre de usuario es obligatorio')
      return errors
    },
  },
 
  methods: {

    async submit () {
      this.$v.$touch()
      if (!this.$v.$invalid){
        this.loading = true;
        let success = false

        success = await UserStore.login(this.username, this.password)

        if (!success){
          this.loading = false;
          this.submitError = true;
          this.mensajeAlertForm = `Error durante el ingreso, inténtelo más tarde`;
        }
        else{
          location.reload();
        }
      }
    },

  },
}
</script>

<style scoped>

#formLogin{
    padding: 8% 5% 5% 5%;
}

#botonLogin{
    text-transform: none;
}

</style>