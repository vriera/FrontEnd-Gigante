<template>
  <div id="Fondo">
    <v-row>
      <v-btn icon id='back' @click="$router.go(-1)" >
        <v-icon color="black" x-large> mdi-arrow-left </v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-spacer/>
      <v-col>
        <v-btn v-bind:class="isUser?'blue lighten-4':'grey lighten-1'" id="tipo-cuenta" @click="setUser">
            <span color="black" x-large> Soy un usuario </span>
        </v-btn>
        <v-btn v-bind:class="!isUser?'blue lighten-4':'grey lighten-1'" id="tipo-cuenta" @click="setONG">
            <span color="black" x-large> Represento una ONG </span>
        </v-btn>
      </v-col>
      <v-spacer/>
    </v-row>
    <v-card class="mx-auto transparent" max-width="40%" flat>
      <form v-if="!submitted" style="margin: 2%;">
        <v-alert
            prominent
            max-width="50%"
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
        <v-text-field
            v-model="fullname"
            :error-messages="fullNameErrors"
            label="Nombre y apellido"
            solo
            required
            @input="$v.fullname.$touch()"
            @blur="$v.fullname.$touch()"
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
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
        ></v-text-field>
        <v-text-field
            v-model="confirmationPassword"
            :error-messages="confirmationPasswordErrors"
            :append-icon="showConfPass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showConfPass ? 'text' : 'password'"
            @click:append="showConfPass = !showConfPass"
            label="Confirmación contraseña"
            solo
            required
            @input="$v.confirmationPassword.$touch()"
            @blur="$v.confirmationPassword.$touch()"
        ></v-text-field>
        <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            solo
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
            v-model="calle"
            :error-messages="calleErrors"
            label="Calle de mi domicilio"
            solo
            required
            @blur="$v.calle.$touch()"
        ></v-text-field>
        <v-text-field
            v-model="altura"
            :error-messages="alturaErrors"
            label="Altura de mi domicilio"
            solo
            required
            @blur="$v.altura.$touch()"
        ></v-text-field>
        <v-text-field v-if="!isUser"
            v-model="dni"
            :error-messages="dniErrors"
            label="DNI"
            solo
            required
            @blur="$v.dni.$touch()"
        ></v-text-field>
        <v-text-field v-if="!isUser"
            v-model="calleOng"
            :error-messages="calleErrors"
            label="Calle del domicilio de mi organización"
            solo
            required
            @blur="$v.calleOng.$touch()"
        ></v-text-field>
        <v-text-field v-if="!isUser"
            v-model="alturaOng"
            :error-messages="alturaErrors"
            label="Altura del domicilio de mi organización"
            solo
            required
            @blur="$v.alturaOng.$touch()"
        ></v-text-field>
        <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            class="black--text orangeElement"
            label="Confirmo que estos son mis datos"
            required
            color="#E78200"
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
        ></v-checkbox>
      </form>
    </v-card>

    <v-alert
        prominent
        v-if="submitted"
        max-width="30%"
        class="mx-auto"
        v-bind:color="sendVerificationError? 'red' : 'green' "
        icon="mdi-information"
        type="success" >
      <v-row align="center">
        <v-col>
          {{ mensajeAlertSubmitted}}
        </v-col>
      </v-row>
    </v-alert>

    <v-container v-if="loading" class="text-center" >
      <v-progress-circular
          :size="50"
          color="#E78200"
          indeterminate
      ></v-progress-circular>
    </v-container>

    <v-container v-if="!submitted" class="text-center">
      <v-btn class="blue lighten-3" @click="submit" large width="40%" >
        Registrarse
      </v-btn>
    </v-container>
    <v-container v-if="!submitted" class="text-center">
      <v-btn class="blue lighten-3" @click="clear" large width="40%">
        Borrar
      </v-btn>
    </v-container>
  </div>
</template>


<script>
import { validationMixin } from 'vuelidate'
import { required, email, sameAs, maxLength} from 'vuelidate/lib/validators'
import UserStore from "@/store/UserStore";

export default {
  mixins: [validationMixin],

  validations: {
    fullname : {required, maxLength : maxLength(100)},
    password:{required, maxLength : maxLength(50)},
    confirmationPassword:{required,sameAsPassword: sameAs('password'), maxLength : maxLength(50)},
    email: { required, email, maxLength : maxLength(100) },
    checkbox: {
      checked (val) {
        return val
      },
    },
  },

  data: () => ({

    isUser: true,

    fullname: '',
    password:'',
    confirmationPassword:'',
    email: '',
    checkbox: false,
    calle: '',
    altura: '',

    dni:'',
    calleOng:'',
    alturaOng:'',

    mensajeAlertForm: '',
    mensajeAlertSubmitted: 'Se ha enviado el mail de verificacion a su casilla',
    sendVerificationError : false,
    submitError : false,
    submitted : false, 
    showPass : false,
    showConfPass : false,
    loading : false,

  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('Debe confirmar para continuar!')
      return errors
    },
    fullNameErrors () {
      const errors = []
      if (!this.$v.fullname.$dirty) return errors
      !this.$v.fullname.required && errors.push('El nombre y apellido es obligatorio')
      !this.$v.fullname.maxLength && errors.push('El nombre y apellido debe tener maximo 100 caracteres')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('La contraseña es obligatoria')
      !this.$v.password.maxLength && errors.push('La contraseña debe tener maximo 50 caracteres')
      return errors
    },
    confirmationPasswordErrors () {
      const errors = []
      if (!this.$v.confirmationPassword.$dirty) return errors
      !this.$v.confirmationPassword.required && errors.push('La confirmación de la contraseña es obligatoria')
      !this.$v.confirmationPassword.sameAsPassword && errors.push('La confirmación no es igual a la contraseña')
      !this.$v.confirmationPassword.maxLength && errors.push('La confinrmacion de la contraseña debe tener maximo 50 caracteres')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('El e-mail debe ser válido')
      !this.$v.email.required && errors.push('El e-mail es obligatorio')
      !this.$v.email.maxLength && errors.push('El e-mail debe tener maximo 100 caracteres')
      return errors
    },
  },

  methods: {
    setUser(){
        this.isUser = true;
    },

    setONG(){
        this.isUser = false;
    },

    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid){
        this.loading = true;
        //const result = await UserStore.addUser(this.username, this.fullname, this.password, this.adaptarGenero(this.genero), Date.parse(this.date), this.email, this.meta );
        //if(result){
        //  this.submitted = true;
          this.loading = false;
        //}
        //else{
        //  this.submitError = true;
        //  this.mensajeAlertForm = `Error durante el registro, inténtelo más tarde`;
          this.loading = false;
        }

      }
    },
    async resendVerification(){
      this.loading = true;
      const result = await UserStore.resendVerification(this.email);
      if(result){
        this.mensajeAlertSubmitted = 'Se ha reenviado el mail de verificacion a su casilla';
        this.loading = false;
      }
      else{
        this.sendVerificationError= true;
        this.mensajeAlertSubmitted = `Error en reenviar verificacion`;
        this.loading = false;
      }
    },
    adaptarGenero(genero){
      switch (genero){
        case 'Hombre':
          return 'male';
        case 'Mujer':
          return 'female';
        case 'Otro':
          return 'other';
        default:
          return '';
      }
    },
    clear () {
      this.$v.$reset()
      this.username = ''
      this.email = ''
      this.checkbox = false
      this.password=''
      this.confirmationPassword=''
      this.fullname= ''
      this.dni=''
      this.calle=''
      this.calleOng=''
      this.altura=''
      this.alturaOng=''
    },
  }

</script>

<style scoped>

#boton-registro{
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  padding: 10% 10% 10% 10%;
}

#tipo-cuenta{
  margin: 0 2%;
  font-weight: bold;
}

#submittedElems{
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
}

#back{
  margin: 1% 0 0 1%;
}


</style>