<template>
  <div id="Fondo">
    <!-- <v-row>
      <v-btn icon id='back' @click="$router.go(-1)" >
        <v-icon color="black" x-large> mdi-arrow-left </v-icon>
      </v-btn>
    </v-row> -->
    <v-row>
      <v-spacer/>
      <v-col>
        <v-row>
        <v-spacer/>
        <v-col>
        <v-btn v-bind:class="isUser?'blue lighten-4':'grey lighten-1'" class="tipo-cuenta" @click="setUser">
            <span color="black" x-large> Soy un donador </span>
        </v-btn>
        </v-col>
        <v-spacer/>
        <v-col>
        <v-btn v-bind:class="!isUser?'blue lighten-4':'grey lighten-1'" class="tipo-cuenta" @click="setONG">
            <span color="black" x-large> Represento una ONG </span>
        </v-btn>
        </v-col>
        <v-spacer/>
        </v-row>
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

        <h3 style="margin: 1% 1%;">Mis datos:</h3>

        <v-text-field
            v-model="username"
            :error-messages="usernameErrors"
            label="Nombre de usuario"
            solo
            required
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
        ></v-text-field>
        <v-text-field
            v-model="fullname"
            :error-messages="fullNameErrors"
            label="Nombre y apellido"
            solo
            required
            @input="$v.fullname.$touch()"
            @blur="$v.fullname.$touch()"
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
            v-model="telefono"
            :error-messages="telefonoErrors"
            label="Teléfono de contacto"
            solo
            required
            @blur="$v.telefono.$touch()"
        ></v-text-field>
        <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
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
        <v-text-field v-if="isUser"
            v-model="calle"
            :error-messages="calleErrors"
            label="Calle de mi domicilio"
            solo
            required
            @blur="$v.calle.$touch()"
        ></v-text-field>
        <v-text-field v-if="isUser"
            v-model="altura"
            :error-messages="alturaErrors"
            label="Altura de mi domicilio"
            solo
            required
            @blur="$v.altura.$touch()"
        ></v-text-field>
        <v-text-field v-if="isUser"
            v-model="piso"
            :error-messages="floorErrors"
            label="Piso (complete con un guión en caso de que no aplique)"
            solo
            required
            @blur="$v.piso.$touch()"
        ></v-text-field>
        <v-text-field v-if="isUser"
            v-model="region"
            :error-messages="regionErrors"
            label="Localidad"
            solo
            required
            @blur="$v.region.$touch()"
        ></v-text-field>

        <h3 v-if="!isUser" style="margin: 1% 1%;">Datos de la organización:</h3>

        <v-text-field v-if="!isUser"
            v-model="nombreOng"
            :error-messages="nombreOngErrors"
            label="Nombre de mi organización"
            solo
            required
            @blur="$v.nombreOng.$touch()"
        ></v-text-field>
        <v-text-field v-if="!isUser"
            v-model="calleOng"
            :error-messages="calleOngErrors"
            label="Calle del domicilio de mi organización"
            solo
            required
            @blur="$v.calleOng.$touch()"
        ></v-text-field>
        <v-text-field v-if="!isUser"
            v-model="alturaOng"
            :error-messages="alturaOngErrors"
            label="Altura del domicilio de mi organización"
            solo
            required
            @blur="$v.alturaOng.$touch()"
        ></v-text-field>
        <v-text-field v-if="!isUser"
            v-model="piso"
            :error-messages="floorErrors"
            label="Piso (complete con un guión en caso de que no aplique)"
            solo
            @blur="$v.piso.$touch()"
        ></v-text-field>
        <v-text-field v-if="!isUser"
            v-model="region"
            :error-messages="regionErrors"
            label="Localidad"
            solo
            required
            @blur="$v.region.$touch()"
        ></v-text-field>
        <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            class="black--text"
            label="Confirmo que estos son mis datos"
            required
            color="blue lighten-3"
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
        color="green"
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
          color="blue lighten-3"
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
import { required, email, sameAs, maxLength, minLength, minValue, integer, requiredIf} from 'vuelidate/lib/validators'
import UserStore from "@/store/UserStore";
import {AddressData, geomapApi} from "@/Geocode/geomap";

export default {
  mixins: [validationMixin],

  validations: {
    username : {required, maxLength : maxLength(100)},
    fullname : {required, maxLength : maxLength(100)},
    password:{required, maxLength : maxLength(50)},
    confirmationPassword:{required,sameAsPassword: sameAs('password'), maxLength : maxLength(50)},
    email: { required, email, maxLength : maxLength(100) },
    region: { required },
    checkbox: {
      checked (val) {
        return val
      },
    },

    calle: {required: requiredIf(function(){
          return this.isUser
        })
      },
    altura: {required: requiredIf(function(){
          return this.isUser
        }), integer, minValue:minValue(0)
      },

    piso:{ required, maxLength:maxLength(20)},  //Aunque no tenga restricciones o tira warning
    
    dni: {required: requiredIf(function(){
          return !this.isUser
        }), integer, minValue:minValue(0)
      },
    telefono: {required: requiredIf(function(){
          return !this.isUser
        }), integer, minValue:minValue(0), minLength:minLength(8)
      },
    nombreOng: {required: requiredIf(function(){
          return !this.isUser
        })
      },
    calleOng: {required: requiredIf(function(){
          return !this.isUser
        })
      },
    alturaOng: {required: requiredIf(function(){
          return !this.isUser
        }), integer, minValue:minValue(0)
      },
  },

  data: () => ({

    isUser: true,

    username: '',
    fullname: '',
    password:'',
    confirmationPassword:'',
    email: '',
    checkbox: false,

    region: '',
    piso: '',

    calle: '',
    altura: '',

    telefono: '',
    dni:'',
    nombreOng: '',
    calleOng:'',
    alturaOng:'',
    latitude : 0,
    longitude: 0,

    mensajeAlertForm: '',
    mensajeAlertSubmitted: 'Se ha registrado con éxito',
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
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.required && errors.push('El nombre de usuario es obligatorio')
      !this.$v.username.maxLength && errors.push('El de usuario debe tener máximo 100 caracteres')
      return errors
    },
    fullNameErrors () {
      const errors = []
      if (!this.$v.fullname.$dirty) return errors
      !this.$v.fullname.required && errors.push('El nombre y apellido es obligatorio')
      !this.$v.fullname.maxLength && errors.push('El nombre y apellido debe tener máximo 100 caracteres')
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
      !this.$v.confirmationPassword.maxLength && errors.push('La confinrmación de la contraseña debe tener maximo 50 caracteres')
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

    floorErrors () {
      const errors = []
      if (!this.$v.piso.$dirty) return errors
      !this.$v.piso.required && errors.push('El piso es obligatorio ( complete con un guión en caso de que no aplique )')
      !this.$v.piso.maxLength && errors.push('El piso debe tener maximo 20 caracteres')
      return errors
    },

    regionErrors () {
      const errors = []
      if (!this.$v.region.$dirty) return errors
      !this.$v.region.required && errors.push('La localidad es obligatoria')
      return errors
    },
    calleErrors () {
      const errors = []
      if (!this.$v.calle.$dirty) return errors
      !this.$v.calle.required && errors.push('La calle es obligatoria')
      return errors
    },
    alturaErrors () {
      const errors = []
      if (!this.$v.altura.$dirty) return errors
      !this.$v.altura.required && errors.push('La altura es obligatoria')
      if (!this.$v.altura.minValue || !this.$v.altura.integer)
        errors.push('La altura debe ser un número positivo')
      return errors
    },

    dniErrors () {
      const errors = []
      if (!this.$v.dni.$dirty) return errors
      !this.$v.dni.required && errors.push('El dni es obligatorio')
      if (!this.$v.dni.minValue || !this.$v.dni.integer)
        errors.push('Inserte un dni válido')
      return errors
    },
    telefonoErrors () {
      const errors = []
      if (!this.$v.telefono.$dirty) return errors
      !this.$v.telefono.required && errors.push('El teléfono es obligatorio')
      if (!this.$v.telefono.minValue || !this.$v.telefono.integer || !this.$v.telefono.minLength)
        errors.push('Inserte un teléfono válido')
      return errors
    },
    nombreOngErrors () {
      const errors = []
      if (!this.$v.nombreOng.$dirty) return errors
      !this.$v.nombreOng.required && errors.push('El nombre de su organización es obligatorio')
      return errors
    },
    calleOngErrors () {
      const errors = []
      if (!this.$v.calleOng.$dirty) return errors
      !this.$v.calleOng.required && errors.push('La calle de su organización es obligatoria')
      return errors
    },
    alturaOngErrors () {
      const errors = []
      if (!this.$v.alturaOng.$dirty) return errors
      !this.$v.alturaOng.required && errors.push('La altura es obligatoria')
      if (!this.$v.alturaOng.minValue || !this.$v.alturaOng.integer)
        errors.push('La altura de su organización debe ser un número positivo')
      return errors
    },
  },

  methods: {
    setUser(){
        this.isUser = true;
        this.piso = ''
        this.region = ''
    },

    setONG(){
        this.isUser = false;
        this.piso = ''
        this.region = ''
    },

    async setLatLng(isDonator){

      //lngLatVec[0]--> longitude
      //lngLatVec[1]--> latitutde
      let lngLatVec;
      if(isDonator){
        lngLatVec = await geomapApi.getCoordinates(new AddressData(this.calle, this.altura, this.region));
      }
      else{
        lngLatVec = await geomapApi.getCoordinates(new AddressData(this.calleOng, this.alturaOng, this.region));
      }
      this.longitude = lngLatVec[0];
      this.latitude = lngLatVec[1];
    },

    async submit () {
      this.$v.$touch()
      if (!this.$v.$invalid){
        this.loading = true;
        let success = false;

        if(this.isUser){
          success = await this.addDonator();
        }
        else
          success = await this.addOng()

        if (!success){
          this.submitError = true;
          this.mensajeAlertForm = 'Error durante el registro, inténtelo más tarde';
        }
        else{
          this.submitted = true;

        }

        this.loading = false;
      }

    },

    async addDonator(){

      await this.setLatLng(true);

      //Me fijo primero si se calculo correctamente la longitud y la latitud
      if(this.longitude === 0 && this.latitude === 0)
        return false;
      return await UserStore.addDonator(this.email, this.username, this.password, this.fullname, this.calle, this.altura, this.piso, this.region, this.latitude , this.longitude);
    },

    async addOng(){

      await this.setLatLng(false);

      //Me fijo primero si se calculo correctamente la longitud y la latitud
      if(this.longitude === 0 && this.latitude === 0)
        return false;
      return await UserStore.addOng(this.email, this.username, this.password, this.nombreOng, this.fullname, this.dni, this.telefono, this.calleOng, this.alturaOng, this.piso, this.region, this.latitude , this.longitude);
    },

    clear() {
      this.$v.$reset()
      this.username = ''
      this.email = ''
      this.checkbox = false
      this.password=''
      this.confirmationPassword=''
      this.fullname= ''
      this.dni=''
      this.telefono=''
      this.nombreOng=''
      this.calle=''
      this.calleOng=''
      this.altura=''
      this.alturaOng=''
      this.piso = ''
      this.region = ''
    },
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

.tipo-cuenta{
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