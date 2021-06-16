<template>
  <div class="home">
      <img alt="Vue logo" src="../assets/ricknmorty2.gif">
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
  
  img{    
    margin-bottom: 50px;
    width:40%;
    height:auto;
  }

</style>