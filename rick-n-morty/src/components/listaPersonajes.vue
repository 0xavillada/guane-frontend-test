<template>
  <div class="hello">
    <h1> Numero de pagina {{ $route.params.page }}</h1>
    <h3> total de paginas {{ $store.getters.getTotalPages }} </h3>
    <h3> total de personajes {{ $store.getters.getTotalCharacters }} </h3>
    <h3> Personajes {{ $store.getters.getCharacters }}</h3>
  </div>
</template>

<script>
export default {
  
  name: 'listaPersonajes',

  data(){
    return{
      /* This data will help us for recognize if we will show the first 10 characters or 
        the second 10 characters from the 20 that API returns us.
      */
      firstMiddle: true
    }
  },

  methods:{

    showList(){
      
      let actualPage = parseInt(this.$route.params.page);

      /* This is a little control for always start on page 1.
        It is redirecting if url parameter "page" are null or < than 1
      */
      if (actualPage < 1 || isNaN(actualPage)) {
        this.$router.push('page=1');
      }
    
      // We will have double of pages than the API and this code section map our page to API page
      let pageInAPI = actualPage/2;

      // This desition help us to know if we will show the first 10 characters of 20 obtained
      if (actualPage%2 === 0) {          
        this.firstMiddle = false
      }

      // It rounds for above for correct mapping
      this.$store.dispatch('getPageCharacters', Math.ceil(pageInAPI));
    }
  },

  // I chose this execution state only for performace
  beforeMount() {
    this.showList();
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
