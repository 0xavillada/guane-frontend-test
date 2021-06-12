<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <listaPersonajes/>
  </div>
</template>

<script>
// @ is an alias to /src
import listaPersonajes from '@/components/listaPersonajes.vue'

export default {
  name: 'Home',
  components: {
    listaPersonajes
  }
}
</script>
