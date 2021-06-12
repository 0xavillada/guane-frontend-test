<template>
  <div class="hello">
    <h1> Numero de pagina {{ $route.params.page }}</h1>
    <h3> total de paginas {{ $store.getters.getTotalPages }} </h3>
    <h3> total de personajes {{ $store.getters.getTotalCharacters }} </h3>
  </div>
</template>

<script>
export default {
  
  name: 'listaPersonajes',
  
  beforeMount() {

    this.$store.dispatch('getAllCharacters')

    if (isNaN(this.$route.params.page)) {
      
      // condicion que nos dice si es una ruta sin parametro o con numero de pagina invalido
      
      console.log('no es un numero')
      this.$router.push('page=1');
    }

    // aqui se hará todo el calculo de las paginas para mapear pagina de 10 a pagina de 20 items


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
