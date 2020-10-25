<template>
    <v-card shaped id="cardLogin" class="blue lighten-3">
        <form id="formLogin">
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="Correo electrónico"
          solo
          required
        @blur="$v.email.$touch()"
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
                <v-btn rounded @click="submit" id="botonLogin">
                    Iniciar Sesión
                </v-btn>
            </v-col>
        <v-spacer/>
    </v-row>
    </form>
    </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email} from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    validations: {
   
        password:{required},
        email: { required, email },
  },

  data(){
    return {
        password:'',
        email: '',

        showPass: false,
    }
  },

  computed: {   
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('La contraseña es obligatoria')
      return errors
    },
    
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('El e-mail debe ser valido')
      !this.$v.email.required && errors.push('El e-mail es obligatorio')
      return errors
    },
  },
 
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid){
        //Lo loguea y lo mando a algún lado
      }
    },
  },
}
</script>

<style scoped>

#cardLogin{
    width: 30%;
    margin-left:auto;
    margin-right:1%;
}

#formLogin{
    padding: 8% 5% 5% 5%;
}

#botonLogin{
    text-transform: none;
}

</style>