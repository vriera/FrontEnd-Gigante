<template>
  <div>
    <v-row justify="center">
      <v-card style="min-width: 70%; border-radius: 20px;">

        <v-row justify="center">
          <v-avatar size="220" cols="2">
            <v-img src="@/assets/default.png"/>
          </v-avatar>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <p style="text-align: center">Imagen</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <v-text-field v-model="image" outlined
                              rounded background-color="#F7F2F2" :disabled="(editImage !== true)"
                              :rules="[rules.validateURL(image)]"/>
              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 5px; left: 5px;"
                      @click="editImage = !editImage">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <p  style="text-align: center">Nombre</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <v-text-field v-model="nombre" outlined
                              :disabled="(editNombre !== true)"
                              :rules="[rules.required(nombre)]"
                              rounded background-color="#F7F2F2"/>
              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editNombre = !editNombre">
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
                <v-text-field v-model="username" outlined
                              :disabled="true"
                              :rules="[rules.required(username)]"
                              rounded background-color="#F7F2F2"/>
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
                <v-text-field v-model="email" outlined
                              :disabled="(editEmail !== true)"
                              :rules="[rules.required(email)]"
                              rounded background-color="#F7F2F2"/>
              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editEmail = !editEmail">
                mdi-pencil
              </v-icon>
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
                <v-text-field v-model="region" outlined
                              :disabled="(editRegion !== true)"
                              :rules="[rules.required(region)]"
                              rounded background-color="#F7F2F2"/>
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
                <v-text-field v-model="calle" outlined
                              :disabled="(editCalle !== true)"
                              :rules="[rules.required(calle)]"
                              rounded background-color="#F7F2F2"/>
              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editCalle = !editCalle">
                mdi-pencil
              </v-icon>
            </v-row>
          </v-col>
        </v-row>


        <v-row justify="center">
          <v-col cols="2">
            <p style="text-align: center">Número</p>
          </v-col>
          <v-col cols="8">
            <v-row>
              <div style="width: 650px">
                <v-text-field v-model="numero" outlined
                              :disabled="(editNumero !== true)"
                              :rules="[rules.required(numero)]"
                              rounded background-color="#F7F2F2"/>
              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editNumero = !editNumero">
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
                <v-text-field v-model="piso" outlined
                              :disabled="(editPiso !== true)"
                              :rules="[rules.required(piso)]"
                              rounded background-color="#F7F2F2"/>
              </div>
              <v-icon size="34" color="#8B8686" style="position: relative; bottom: 15px; left: 5px;"
                      @click="editPiso = !editPiso">
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
                 depressed>
            <v-icon large style="position: relative; left: -12px;">mdi-content-save-outline</v-icon>
            Guardar cambios
          </v-btn>

          <v-btn height="64px" width="350px" class="rounded-pill" depressed
                 color="primary">
            <v-icon large style="position: relative; left: -12px;">mdi-logout</v-icon>
            Cerrar sesión
          </v-btn>
        </div>


      </v-card>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "EditarPerfil",
  data() {
    return {
      loading: true,
      loaded: false,
      nombre: '',
      editNombre: false,
      username: '',
      email: '',
      editEmail: false,
      region: '',
      editRegion: false,
      calle: '',
      editCalle: false,
      numero: '',
      editNumero: false,
      piso: '',
      editPiso: false,
      image: null,
      editImage: false,
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