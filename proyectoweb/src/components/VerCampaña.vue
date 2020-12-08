<template>
  <div>
    <v-row style="height: 75vh;">
      <v-spacer/>
      <v-col cols='10'>
        <v-card id="createCard">
          <v-container v-if="loading" class="text-center" >
              <v-progress-circular
              :size="50"
              color="blue lighten-3"
              indeterminate
              ></v-progress-circular>
          </v-container>

          <div v-if="!submitted" style="padding: 2%;">
            <span id='cardTitle'>{{campaign.name}}</span>
            <v-row id='descRow'>
                  <span>{{campaign.description}}</span>
            </v-row>
            <v-row>
                <v-spacer/>
                <v-col cols="3">
                    <span class="formHint">Fecha de inicio:</span>
                    <span>{{campaign.init_date}}</span>
                </v-col>
                <v-spacer/>
                <v-col cols="3">
                    <span class="formHint">Fecha de fin:</span>
                    <span>{{campaign.end_date}}</span>
                </v-col>
                <v-spacer/>
                <v-col cols="3">
                    <span class="formHint">Horario:</span>
                    <span>{{campaign.schedule}}</span>
                </v-col>
                <v-spacer/>
            </v-row>
            <v-row>
                <v-spacer/>
                <v-col cols="3">
                    <span class="formHint">Dirección:</span>
                    <span>{{campaign.street}} {{campaign.street_number}}</span>
                </v-col>
                <v-spacer/>
                <v-col cols="3">
                    <span class="formHint">Localidad:</span>
                    <span>{{campaign.city}}</span>
                </v-col>
                <v-spacer/>
                <v-col cols="3">
                    <span class="formHint">Barrio:</span>
                    <span>{{campaign.location}}</span>
                </v-col>
                <v-spacer/>
            </v-row>
            <v-row>
                <v-spacer/>
                <v-col cols="3">
                    <span class="formHint">Teléfono:</span>
                    <span>{{parsePhone(campaign.phone)}}</span>
                </v-col>
                <v-spacer/>
                <v-col cols="3">
                    <span class="formHint">Contacto:</span>
                    <span>{{campaign.contact}}</span>
                </v-col>
                <v-spacer/>
                <v-col cols="3"/>
                <v-spacer/>
            </v-row>
            
            <!-- CATEGORIAS -->

          </div>

          <v-divider class="mx-10"/>

          <form v-if="!submitted" class="mt-10">

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

            <span>{{ "Donar a " + campaign.name }}</span>
            <span id='donationBoxText' class="mb-5">¿Ya hiciste tu aporte en esta campaña?</span>

            <v-textarea
            v-model="donationDetail"
            :error-messages="donationDetailErrors"
            label="Información de la donación"
            required
            @blur="$v.donationDetail.$touch()"

            style="width: 90%; margin: 0 auto;"
            clearable
            filled
            rounded
            auto-grow
            background-color="blue lighten-5"
            color="blue lighten-1"
            rows="4"
            ></v-textarea>
            <v-card-actions>
              <v-spacer/>
              <v-btn dark @click="submit" color="blue" class="mb-10">
                <span>Cargar donación</span>
              </v-btn>
              <v-spacer/>
            </v-card-actions>
          </form>
        </v-card>
      </v-col>
      <v-spacer/>
    </v-row>

  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import CampaignStore from '@/store/CampaignStore'
import UserStore from "@/store/UserStore"

export default {
    mixins: [validationMixin],
    props: ['id'],

  validations: {
    donationDetail :  {required},
  },

  data(){
    return { 
        
    campaign: [],
    campaignCategories: [],

    donationDetail: '',
    currentUser: [],
    userStore: UserStore,

    campaignId: '',
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
    mensajeAlertSubmitted: 'Se ha cargado su donación con éxito',
    submitError : false,
    submitted : false, 
    loading : false,
    store :  CampaignStore
    }
  },

  async created(){
      this.loading = true;
      this.campaign = await this.store.getCampaigns(this.id);
      this.currentUser = await this.userStore.getCurrentUser();
      const ans = await this.store.getCampaignCategories(this.id);
      this.campaignCategories = ans.results;
      console.log(this.campaign);
      console.log(this.currentUser);
      
      //Hago el get de los ids de las categorias que tiene asignada esta campaña
      //let categoriesIdsArray = await this.store.getCategories(this.campaign.id)
      //let categoriesNamesArray
      //for id of categoriesIdsArry   hago   categoriesNamesArray.push(await this.store.getCategory(id))
      //lo cargo en variable local this.categories = categoriesNamesArray;

      this.campaignId = this.id;
      this.campaignName = this.campaign.name;
      this.desdeFecha = this.campaign.init_date;
      this.hastaFecha = this.campaign.end_date;
      this.description = this.campaign.description;
      this.street = this.campaign.street;
      this.street_number = this.campaign.street_number;
      this.city = this.campaign.city;
      this.neighbourhood = this.campaign.location;
      this.horario = this.campaign.schedule;
      this.contacto = this.campaign.contact;
      this.phone = this.campaign.phone;   

      this.loading = false;
      
  },


  computed:{
    donationDetailErrors () {
      const errors = []
      if (!this.$v.donationDetail.$dirty) return errors
      !this.$v.donationDetail.required && errors.push('Ingrese un detalle sobre su donación')
      return errors
    },
  },

  methods: {

    parsePhone(phone){
      let result = phone;
      let phoneS = phone.toString();
      if(phoneS.length == 8){
        //4-4
        result = [phoneS.slice(0, 4), '-', phoneS.slice(4)].join('');
        return result;
      }

      if(phoneS.length == 10){
        //2-4-4
        result = [phoneS.slice(0, 2), '-', phoneS.slice(2, 6), '-', phoneS.slice(6)].join('');
        return result;
      }

      return phone;
    },

    async submit () {
      this.$v.$touch()
      if (!this.$v.$invalid){
        this.loading = true;
        let result;

        //Hago un post de la nueva donación
        result = await CampaignStore.addDonation(this.currentUser.id, this.campaignId, this.campaignCategories[0].id_category, this.donationDetail, false);

        if (!result.success){
          this.submitError = true;
          this.mensajeAlertForm = 'Error al cargar su donación, inténtelo más tarde';
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

#cardTitle{
    margin: 2% auto 2% auto;
    display: table;
    color: rgb(88, 118, 189);
    font-weight: bold;
    font-size: 2em;
    text-transform: uppercase;
}

#descRow{
    border: solid;
    border-color: cornflowerblue;
    border-radius: 10px;
    margin: 3% 5%;
    padding: 2%;
}

/* #loadDonationBox{
    margin: 2%;
    padding: 2%;
    border-width: thin;
    border: solid;
    border-color: cornflowerblue;
} */

#donationBoxText{
    margin: 1% auto;
    display: table;
    font-weight: bold;
}

#createCard{
    margin: 2% 5% 1% 5%;
    padding: 0 0 1% 0;
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

.formHint{
    margin: 2.5% 2% 0 0;
    font-weight: bold;
}

/* #submitBtn{
    text-transform: none;
    width: 20%;
    display: table;
    color: white;
    margin: 0 auto;
} */

</style>