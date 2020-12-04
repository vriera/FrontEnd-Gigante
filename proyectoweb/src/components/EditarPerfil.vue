<template>
  <div>
    <v-row justify="center">
      <v-card style="min-width: 70%; border-radius: 20px;">

        <v-alert
            prominent
            max-width="50%"
            style="margin: 3% auto;"
            class="mx-auto"
            v-if="editProfileError"
            color="red"
            icon="mdi-bullhorn"
            type="error" >
          <v-row align="center">
            <v-col>
              {{ mensajeAlertEditProfile}}
            </v-col>
            <v-col class="shrink">
              <v-btn @click="editProfileError = !editProfileError">Aceptar</v-btn>
            </v-col>
          </v-row>
        </v-alert>

        <v-row style="margin-top: 10%;" justify="center">
          <v-col cols="2">
            <p  style="text-align: center">Nombre</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <!--<v-text-field v-model="nombre" outlined
                              :disabled="(editNombre !== true)"
                              :rules="[rules.required(nombre)]"
                              rounded background-color="#F7F2F2"/>-->

                <v-text-field v-model="fullname" outlined
                              rounded background-color="#F7F2F2" :disabled="(editFullname !== true)"
                              :error-messages="fullnameErrors"
                              @blur="$v.fullname.$touch()"/>

              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editFullname = !editFullname">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>


        <v-row justify="center">
          <v-col cols="2">
            <p  style="text-align: center">Nombre de usuario</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <!--<v-text-field v-model="username" outlined
                              :disabled="true"
                              :rules="[rules.required(username)]"
                              rounded background-color="#F7F2F2"/>-->

                <v-text-field v-model="username" outlined
                              :disabled="true"
                              rounded background-color="#F7F2F2"
                              :error-messages="usernameErrors"
                              @blur="$v.username.$touch()"/>

              </div>
            </v-row>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <p style="text-align: center">Email</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <!--<v-text-field v-model="email" outlined
                              :disabled="(editEmail !== true)"
                              :rules="[rules.required(email),rules.email(email)]"
                              rounded background-color="#F7F2F2"/>-->

                <!-- <v-text-field v-model="email" outlined
                               rounded background-color="#F7F2F2" :disabled="(editEmail !== true)"
                               :error-messages="emailErrors"
                               @blur="$v.email.$touch()"/>-->

                <v-text-field v-model="email" outlined
                              rounded background-color="#F7F2F2" :disabled="true"
                              :error-messages="emailErrors"
                              @blur="$v.email.$touch()"/>

              </div>
              <!--<v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editEmail = !editEmail">
                mdi-pencil
              </v-icon>-->
            </v-row>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <p style="text-align: center">Región</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <!--<v-text-field v-model="region" outlined
                              :disabled="(editRegion !== true)"
                              :rules="[rules.required(region)]"
                              rounded background-color="#F7F2F2"/>-->

                <v-text-field v-model="region" outlined
                              rounded background-color="#F7F2F2" :disabled="(editRegion !== true)"
                              :error-messages="regionErrors"
                              @blur="$v.region.$touch()"/>

              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editRegion = !editRegion">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <p style="text-align: center">Calle</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <!--<v-text-field v-model="calle" outlined
                              :disabled="(editCalle !== true)"
                              :rules="[rules.required(calle)]"
                              rounded background-color="#F7F2F2"/>-->

                <v-text-field v-model="street" outlined
                              rounded background-color="#F7F2F2" :disabled="(editStreet !== true)"
                              :error-messages="streetErrors"
                              @blur="$v.street.$touch()"/>

              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editStreet = !editStreet">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>


        <v-row justify="center">
          <v-col cols="2">
            <!--<p style="text-align: center">Número</p>-->
            <p style="text-align: center">Altura</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <!--<v-text-field v-model="numero" outlined
                              :disabled="(editNumero !== true)"
                              :rules="[rules.required(numero)]"
                              rounded background-color="#F7F2F2"/>-->

                <v-text-field v-model="street_number" outlined
                              rounded background-color="#F7F2F2" :disabled="(editStreetNumber !== true)"
                              :error-messages="streetNumberErrors"
                              @blur="$v.street_number.$touch()"/>

              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editStreetNumber = !editStreetNumber">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <p style="text-align: center">Piso</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <!--<v-text-field v-model="piso" outlined
                              :disabled="(editPiso !== true)"
                              :rules="[rules.required(piso)]"
                              rounded background-color="#F7F2F2"/>-->

                <v-text-field v-model="floor" outlined
                              rounded background-color="#F7F2F2" :disabled="(editFloor !== true)"
                              :error-messages="floorErrors"
                              @blur="$v.floor.$touch()"/>

              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editFloor = !editFloor">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>


        <v-row justify="center" v-if="currentUser.rep_dni!==undefined">
          <v-col cols="2">
            <p style="text-align: center">DNI del responsable</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <!--<v-text-field v-model="rep_dni" outlined
                              :disabled="(editRepDni!== true)"
                              :rules="[rules.required(rep_dni)]"
                              rounded background-color="#F7F2F2"/>-->

                <v-text-field v-model="rep_dni" outlined
                              rounded background-color="#F7F2F2" :disabled="(editRepDni!== true)"
                              :error-messages="repDniErrors"
                              @blur="$v.rep_dni.$touch()"/>

              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editRepDni = !editRepDni">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>


        <v-row justify="center" v-if="currentUser.rep_name!==undefined">
          <v-col cols="2">
            <p style="text-align: center">Nombre del responsable</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <!--<v-text-field v-model="rep_name" outlined
                              :disabled="(editRepName!== true)"
                              :rules="[rules.required(rep_name)]"
                              rounded background-color="#F7F2F2"/>-->

                <v-text-field v-model="rep_name" outlined
                              rounded background-color="#F7F2F2" :disabled="(editRepName !== true)"
                              :error-messages="repNameErrors"
                              @blur="$v.rep_name.$touch()"/>


              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editRepName = !editRepName">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>

        <v-row justify="center" v-if="currentUser.phone!==undefined">
          <v-col cols="2">
            <p style="text-align: center">Telefono del responsable</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <!--<v-text-field v-model="phone" outlined
                              :disabled="(editPhone!== true)"
                              :rules="[rules.required(phone)]"
                              rounded background-color="#F7F2F2"/>-->

                <v-text-field v-model="phone" outlined
                              rounded background-color="#F7F2F2" :disabled="(editPhone !== true)"
                              :error-messages="phoneErrors"
                              @blur="$v.phone.$touch()"/>


              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editPhone = !editPhone">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>

        <div style="height: 50px">
          <v-row justify="center" class="my-15" >
            <v-progress-circular size="40" width="15" style="position: relative; top: 40%"
                                 indeterminate color="primary" v-if="loading"/>
            <p v-else-if="loaded" class="texto" style="color: #4BB543;">Cambios guardados.</p>
          </v-row>
        </div>
        <div style="text-align: center;" class="my-8">
          <v-btn height="64px" width="350px" class="rounded-pill"
                 depressed router :to="perfilLink">
            <v-icon large style="position: relative; left: -12px;">mdi-arrow-left</v-icon>
            Volver
          </v-btn>

          <v-btn height="64px" width="350px" class="rounded-pill" depressed
                 color="primary" @click="editUser">
            <v-icon large style="position: relative; left: -12px;">mdi-content-save-outline</v-icon>
            Guardar cambios
          </v-btn>
        </div>


      </v-card>
    </v-row>
  </div>
</template>

import router from '@/router';

<script>

import UserStore from "@/store/UserStore";
import {validationMixin} from "vuelidate";
import {integer, maxLength, minValue, email, required, url, minLength} from "vuelidate/lib/validators";



export default {
  mixins: [validationMixin],
  name: "EditarPerfil",
  data() {
    return {
      mensajeAlertEditProfile: '',
      editProfileError : false,
      currentUser: {},
      loading: false,
      loaded: false,
      fullname: '',
      editFullname: false,
      username: '',
      email: '',
      editEmail: false,
      region: '',
      editRegion: false,
      street: '',
      editStreet: false,
      street_number: '',
      editStreetNumber: false,
      floor: '',
      editFloor: false,
      rep_name: '',
      editRepName: false,
      rep_dni: '',
      editRepDni: false,
      phone: '',
      editPhone: false,
      perfilLink: '/Perfil',
      // longitude: 0,
      // latitude : 0,
      rules: {
        required: value => !!value || 'Requerido.',
        validateURL: value => {
          const regex = RegExp('(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-@]*)?(\\#[-a-z\\d_@]*)?$', 'i');
          return regex.test(value);
        },
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Formato de mail invalido.'
        },
      },
    }
  },
  validations() {

    //Checkeamos si es un donador o una ong en funcion del campo rep_name
    if (this.currentUser.rep_name === undefined) {
      return {
        fullname :  {required, maxLength:maxLength(50)},
        username : {required, maxLength:maxLength(100)},
        email : {required, email, maxLength:maxLength(100)},
        street : {required, maxLength:maxLength(50)},
        street_number : {required, integer, minValue:minValue(0)},
        floor : {maxLength:maxLength(20)},
        region : {required, maxLength:maxLength(100)},
        image : {url}
      };
    } else {
      return {
        fullname :  {required, maxLength:maxLength(50)},
        username : {required, maxLength:maxLength(100)},
        email : {required, email, maxLength:maxLength(100)},
        street : {required, maxLength:maxLength(50)},
        street_number : {required, integer, minValue:minValue(0)},
        floor : {maxLength:maxLength(20)},
        region : {required, maxLength:maxLength(100)},
        image : {url},
        phone : {required, integer, minValue:minValue(0), minLength:minLength(8)},
        rep_name : {required, maxLength:maxLength(100)},
        rep_dni : {required, maxLength:maxLength(50)}
      };
    }
  },
  methods : {
    async editUser () {
      console.log('Editando el usuario')
      if(this.currentUser.rep_name === undefined){
        this.rep_name = this.fullname
        this.rep_dni = '0'
        this.phone = '0'
      }
      this.$v.$touch()
      console.log('Valid = '+!this.$v.$invalid)
      if (!this.$v.$invalid){
        console.log('Usuario validado')
        this.loading = true;
        let result = false;

        console.log('Por modifcar usuario')

        //Cargar el id de la campaña, probablemente en el created()
        result = await UserStore.modifyCurrentUser(this.fullname, this.street, this.street_number, this.floor, this.region, this.currentUser.latitude, this.currentUser.longitude, this.rep_name, this.rep_dni, this.phone);

        console.log('Usuario modificado')

        if (!result.success){
          console.log('Error en actualizar usuario')
          console.log('Message = '+result.message);
          this.editProfileError = true;
          this.mensajeAlertEditProfile = 'Error al actualizar el perfil , inténtelo más tarde';
        }
        else{
          console.log('Usuario actualizado')
          this.$router.go(-1);
        }

        this.loading = false;
      }
      else{
        console.log('Fallo en validacion')
      }

    },
    async logOut() {
      this.loading = true;
      const result = await UserStore.logout();
      if (!result.success){
        this.loading = false;
        this.editProfileError = true;
        this.mensajeAlertEditProfile = 'Error al desloguearse , inténtelo más tarde';
      }
      else{
        //await this.$router.push('/');
         await this.$router.go({
          path: "/",
          force: true
        });
        // await this.$router.go((window.history.length -1 ) * (-1));
        // await this.$router.go(-2);
      }
    }

  },

  computed:{
    fullnameErrors () {
      const errors = []
      if (!this.$v.fullname.$dirty) return errors
      !this.$v.fullname.required && errors.push('El nombre es obligatorio')
      !this.$v.fullname.maxLength && errors.push('El nombre debe tener maximo 50 caracteres')
      return errors
    },
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.required && errors.push('El username es obligatorio')
      !this.$v.username.maxLength && errors.push('El username debe tener maximo 100 caracteres')
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
    streetErrors () {
      const errors = []
      if (!this.$v.street.$dirty) return errors
      !this.$v.street.required && errors.push('La calle es obligatoria')
      !this.$v.street.maxLength && errors.push('La calle debe tener maximo 50 caracteres')
      return errors
    },
    streetNumberErrors () {
      const errors = []
      if (!this.$v.street_number.$dirty) return errors
      !this.$v.street_number.required && errors.push('La altura es obligatoria')
      if (!this.$v.street_number.minValue || !this.$v.street_number.integer)
        errors.push('La altura debe ser un número positivo')
      return errors
    },
    regionErrors () {
      const errors = []
      if (!this.$v.region.$dirty) return errors
      !this.$v.region.required && errors.push('La region es obligatoria')
      !this.$v.region.maxLength && errors.push('El region debe tener maximo 100 caracteres')
      return errors
    },
    floorErrors () {
      const errors = []
      if (!this.$v.floor.$dirty) return errors
      !this.$v.floor.maxLength && errors.push('El piso debe tener maximo 20 caracteres')
      return errors
    },
    repNameErrors () {
      const errors = []
      if (!this.$v.rep_name.$dirty) return errors
      !this.$v.rep_name.required && errors.push('El nombre del responsable es obligatorio')
      !this.$v.rep_name.maxLength && errors.push('El nombre del responsable debe tener maximo 100 caracteres')
      return errors
    },
    repDniErrors () {
      const errors = []
      if (!this.$v.rep_dni.$dirty) return errors
      !this.$v.rep_dni.required && errors.push('El DNI del responsable es obligatorio')
      !this.$v.rep_dni.maxLength && errors.push('El DNI del responsable debe tener maximo 50 caracteres')
      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required && errors.push('El teléfono es obligatorio')
      if (!this.$v.phone.minValue || !this.$v.phone.integer || !this.$v.phone.minLength)
        errors.push('Inserte un teléfono válido')
      return errors
    },
    imageErrors () {
      const errors = []
      if (!this.$v.image.$dirty) return errors
      !this.$v.image.url && errors.push('La imagen debe ser una url valida')
      return errors
    },

  },
  async created() {
    this.currentUser = await UserStore.getCurrentUser();
    this.fullname = this.currentUser.fullname;
    this.username = this.currentUser.username;
    this.email = this.currentUser.email;
    this.region = this.currentUser.region;
    this.street = this.currentUser.street;
    this.street_number = this.currentUser.street_number;
    this.floor = this.currentUser.floor;
    if( this.currentUser.rep_name !== undefined){
      this.rep_name = this.currentUser.rep_name ;
    }
    if( this.currentUser.rep_dni !== undefined){
      this.rep_dni = this.currentUser.rep_dni ;
    }
    if( this.currentUser.phone !== undefined){
      this.phone = this.currentUser.phone ;
    }
  }
}
</script>

<style scoped>

.texto {
  font-family: NotoSans-SemiBold, sans-serif;
  font-size: 26px;
  color: #8B8686;
}


/* Para las propiedades de los botones */
.CustomButton {
  font-family: NotoSans-SemiBold, sans-serif !important;
  font-size: 26px !important;
  text-transform: none !important;
}

</style>