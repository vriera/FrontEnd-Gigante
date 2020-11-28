<template>
  <div>
    <v-row style="height: 75vh;">
      <v-spacer/>
      <v-col cols='10'>
        <v-card id="createCard">
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

            <v-text-field
                style="width: 50%; margin: 0 auto;"
                v-model="campaignName"
                background-color="blue lighten-4"
                :error-messages="campaignNameErrors"
                label="Nombre de la campaña"
                rounded
                solo
                required
                @blur="$v.campaignName.$touch()"
            ></v-text-field>
            <v-row>
                <v-spacer/>
                <v-col cols="5">
                    <v-row>
                        <span id="formHint">Fecha de inicio: </span>
                        <v-text-field
                        v-model="desdeFecha"
                        :error-messages="desdeFechaErrors"
                        label="Fecha"
                        outlined
                        rounded
                        required
                        @blur="$v.desdeFecha.$touch()"
                        ></v-text-field>
                    </v-row>
                </v-col>
                <v-spacer/>
                <v-col cols="5">
                    <v-row>
                        <span id="formHint">Fecha de fin: </span>
                        <v-text-field
                        v-model="hastaFecha"
                        :error-messages="hastaFechaErrors"
                        label="Fecha"
                        outlined
                        rounded
                        required
                        @blur="$v.hastaFecha.$touch()"
                        ></v-text-field>
                    </v-row>
                </v-col>
                <v-spacer/>
            </v-row>
            <v-textarea
            v-model="description"
            :error-messages="descriptionErrors"
            label="Descripción de la campaña"
            required
            @blur="$v.description.$touch()"

            style="width: 90%; margin: 0 auto;"
            clearable
            filled
            rounded
            auto-grow
            background-color="blue lighten-5"
            color="blue lighten-1"
            rows="4"
            ></v-textarea>
            
            <div :key="catBtnRenderer">
            <v-row style="margin: 1% 5%;">
              <v-col v-for="(category, index) in categories" :key="category">
                <v-btn id='categoryBtn' v-bind:color="catSelected[index]? 'blue lighten-5' : 'grey lighten-1'" rounded @click="catSelected[index] = !catSelected[index]; forceCatBtnRerender(); noCatError = false;">
                  <span>{{category}}</span>
                </v-btn>
              </v-col>
            </v-row>
            <span v-if="noCatError" style="color: red; margin: 0 0 0 6%;">Debe seleccionar al menos una categoría</span>
            </div>

            <v-row style="margin: 2% 0 -2% 0;">
                <v-spacer/>
                <v-col cols="5">
                    <v-row>
                        <span id="formHint">Dirección: </span>
                        <v-text-field
                        v-model="street"
                        :error-messages="streetErrors"
                        outlined
                        rounded
                        required
                        @blur="$v.street.$touch()"
                        ></v-text-field>
                    </v-row>
                </v-col>
                <v-spacer/>
                <v-col cols="5">
                    <v-row>
                        <span id="formHint">Altura: </span>
                        <v-text-field
                        v-model="street_number"
                        :error-messages="streetNumberErrors"
                        outlined
                        rounded
                        required
                        @blur="$v.street_number.$touch()"
                        ></v-text-field>
                    </v-row>
                </v-col>
                <v-spacer/>
            </v-row>
            <v-row style="margin: 0 0 -2% 0;">
                <v-spacer/>
                <v-col cols="5">
                    <v-row>
                        <span id="formHint">Localidad: </span>
                        <v-text-field
                        v-model="city"
                        :error-messages="cityErrors"
                        outlined
                        rounded
                        required
                        @blur="$v.city.$touch()"
                        ></v-text-field>
                    </v-row>
                </v-col>
                <v-spacer/>
                <v-col cols="5">
                    <v-row>
                        <span id="formHint">Barrio: </span>
                        <v-text-field
                        v-model="neighbourhood"
                        :error-messages="neighbourhoodErrors"
                        outlined
                        rounded
                        required
                        @blur="$v.neighbourhood.$touch()"
                        ></v-text-field>
                    </v-row>
                </v-col>
                <v-spacer/>
            </v-row>
            <v-row style="margin: 0 0 -2% 0;">
                <v-spacer/>
                <v-col cols="5">
                    <v-row>
                        <span id="formHint">Teléfono: </span>
                        <v-text-field
                        v-model="phone"
                        :error-messages="phoneErrors"
                        outlined
                        rounded
                        required
                        @blur="$v.phone.$touch()"
                        ></v-text-field>
                    </v-row>
                </v-col>
                <v-spacer/>
                <v-col cols="5">
                    <v-row>
                        <span id="formHint">Contacto: </span>
                        <v-text-field
                        v-model="contacto"
                        :error-messages="contactoErrors"
                        outlined
                        rounded
                        required
                        @blur="$v.contacto.$touch()"
                        ></v-text-field>
                    </v-row>
                </v-col>
                <v-spacer/>
            </v-row>
            <v-row style="margin: 0 0 0 0;">
                <v-spacer/>
                <v-col cols="8">
                    <v-row>
                        <span style="margin: 1.5% 2% 0 0;">Horario: </span>
                        <v-text-field
                        v-model="horario"
                        :error-messages="horarioErrors"
                        outlined
                        rounded
                        required
                        @blur="$v.horario.$touch()"
                        ></v-text-field>
                    </v-row>
                </v-col>
                <v-spacer/>
            </v-row>

            <v-btn id="submitBtn" @click="submit" color="blue lighten-3">
              <span>Publicar</span>
            </v-btn>
          </form>
        </v-card>
      </v-col>
      <v-spacer/>
    </v-row>

  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, minValue, integer} from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

  validations: {
    campaignName :  {required},
    desdeFecha : {required},
    hastaFecha : {required},
    description : {required},
    street : {required},
    city : {required},
    neighbourhood : {required},
    horario : {required},
    contacto : {required},

    street_number: {required, integer, minValue:minValue(0)},
    phone: {required, integer, minValue:minValue(0), minLength:minLength(8)},
  },

  data(){
    return { 
        campaign: {name: "Campaña 1", start: "14/07/2020", end:"05/08/2020", description:"Junta de tapitas para el Garrahan", street:"Libertador", street_number:"542", city: "C.A.B.A.", neighbourhood:"Palermo", horario:"14:00 - 18:00", contacto: "pepegomez@gmail.com", phone:"15-4066-2487"},
    
    categories: ["Voluntariado", "Alimentos", "Ropa", "Dinero", "Juguetes", "Tecnología", "Muebles", "Otros"],
    catSelected: [false, false, false, false, false, false, false, false],
    catBtnRenderer: 0,
    noCatError: false,

    campaignName:'',
    desdeFecha: '',
    hastaFecha:'',
    description:'',
    street: '',
    street_number: '',
    city:'',
    neighbourhood:'',
    horario:'',
    contacto:'',
    phone:'',

    mensajeAlertForm: '',
    mensajeAlertSubmitted: 'Se ha creado la campaña con éxito',
    submitError : false,
    submitted : false, 
    loading : false,
    }
  },


computed:{
    campaignNameErrors () {
      const errors = []
      if (!this.$v.campaignName.$dirty) return errors
      !this.$v.campaignName.required && errors.push('El nombre de la campaña es obligatorio')
      return errors
    },
    descriptionErrors () {
      const errors = []
      if (!this.$v.description.$dirty) return errors
      !this.$v.description.required && errors.push('La descripción de la campaña es obligatoria')
      return errors
    },
    desdeFechaErrors () {
      const errors = []
      if (!this.$v.desdeFecha.$dirty) return errors
      !this.$v.desdeFecha.required && errors.push('La fecha de inicio de la campaña es obligatoria ("-" si no está definida)')
      return errors
    },
    hastaFechaErrors () {
      const errors = []
      if (!this.$v.hastaFecha.$dirty) return errors
      !this.$v.hastaFecha.required && errors.push('La fecha de fin de la campaña es obligatoria ("-" si no está definida)')
      return errors
    },
    cityErrors () {
      const errors = []
      if (!this.$v.city.$dirty) return errors
      !this.$v.city.required && errors.push('La localidad es obligatoria')
      return errors
    },
    neighbourhoodErrors () {
      const errors = []
      if (!this.$v.neighbourhood.$dirty) return errors
      !this.$v.neighbourhood.required && errors.push('El barrio es obligatorio')
      return errors
    },
    contactoErrors () {
      const errors = []
      if (!this.$v.contacto.$dirty) return errors
      !this.$v.contacto.required && errors.push('Alguna información de contacto es obligatoria')
      return errors
    },
    horarioErrors () {
      const errors = []
      if (!this.$v.horario.$dirty) return errors
      !this.$v.horario.required && errors.push('El horario para recibir la ayuda es obligatorio')
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
    streetErrors () {
      const errors = []
      if (!this.$v.street.$dirty) return errors
      !this.$v.street.required && errors.push('La calle es obligatoria')
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
  },

  methods: {
    forceCatBtnRerender() {
      this.catBtnRenderer += 1;
    },

    atLeastOneCategory() {
      for (let value of this.catSelected)
        if (value == true)
          return true

      this.noCatError = true;
      this.forceCatBtnRerender()
      return false
    },

    async submit () {
      this.$v.$touch()
      if (!this.$v.$invalid && this.atLeastOneCategory()){
        this.loading = true;
        let success = false;

        //if(this.isUser){
        //  success = await this.addDonator();
        //}
        //else
        //  success = await this.addOng()

        if (!success){
          this.submitError = true;
          this.mensajeAlertForm = 'Error al crear la campaña, inténtelo más tarde';
        }
        else{
          this.submitted = true;

        }

        this.loading = false;
      }

    },

  },
}
</script>

<style scoped>

#createCard{
    margin: 2% 5% 1% 5%;
}

#campaignName{
    margin: 0 auto 2% auto;
    padding: 2%;
    display: table;
    color: rgb(88, 118, 189);
    font-weight: bold;
    font-size: 2em;
    text-transform: uppercase;
}

#formHint{
    margin: 2.5% 2% 0 0;
}

#submitBtn{
    text-transform: none;
    width: 20%;
    display: table;
    color: white;
    margin: 0 auto;
}

#categoryBtn{
    text-transform: none;
    width: 100%;
    display: table;
    margin: 0 auto;
}

</style>