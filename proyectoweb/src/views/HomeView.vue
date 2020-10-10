<template>
  <div>
    <app-menu></app-menu>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  components: {
    'app-menu' : Menu,
  }
}
</script>
