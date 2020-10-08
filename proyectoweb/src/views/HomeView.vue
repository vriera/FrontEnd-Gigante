<template>
  <div>
    <app-menu></app-menu>
    <helloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Menu from '@/components/Menu.vue'

export default {
  components: {
    'helloWorld': HelloWorld,
    'app-menu' : Menu,
  }
}
</script>
