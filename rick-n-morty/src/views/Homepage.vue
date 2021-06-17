<template>
  <div class="home">
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

<style lang="scss" scoped>
  
</style>