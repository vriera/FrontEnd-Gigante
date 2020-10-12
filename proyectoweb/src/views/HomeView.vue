<template>
  <div>
    <app-menu></app-menu>
    <botones></botones>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Botones from '@/components/BotonesPrincipal.vue'

export default {
  components: {
    'app-menu' : Menu,
    'botones' : Botones,
  }
}
</script>
