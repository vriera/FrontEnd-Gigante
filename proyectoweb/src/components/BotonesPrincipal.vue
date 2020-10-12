<template>
  <div>
    <v-row>
            <v-col>
                <v-btn id="boton1" color="blue lighten-3" rounded>
                    <span>quiero ayudar con <br/>
                        <span>DONACIONES</span>
                    </span>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn id="boton2" color="blue lighten-3" rounded>
                    <span>quiero hacer<br/>
                        <span>VOLUNTARIADO</span>
                    </span>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn id="boton3" color="blue lighten-3" rounded>
                    <span>soy una <br/>
                        <span>ONG</span>
                    </span>
                </v-btn>
            </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>

.v-btn {
    text-transform: none;
}

</style>