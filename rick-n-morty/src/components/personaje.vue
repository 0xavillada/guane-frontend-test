<template>
    <div>
      <h1>personaje</h1>
      <h3>{{$store.getters.getCharacterOnDisplay.id}}</h3>
      <h3>{{$store.getters.getCharacterOnDisplay.name}}</h3>
      <h3>{{$store.getters.getCharacterOnDisplay.status}}</h3>
      <h3>{{$store.getters.getCharacterOnDisplay.species}}</h3>
      <h3>{{$store.getters.getCharacterOnDisplay.type}}</h3>
      <h3>{{$store.getters.getCharacterOnDisplay.gender}}</h3>
      <!-- These two data can be rendering when the object is not existing -->
      <h3>{{$store.getters.getCharacterOnDisplay.origin && $store.getters.getCharacterOnDisplay.origin.name}}</h3>
      <h3>{{$store.getters.getCharacterOnDisplay.location && $store.getters.getCharacterOnDisplay.location.name}}</h3>
      <h3>{{$store.getters.getCharacterOnDisplay.image}}</h3>
      <h3>{{$store.getters.getCharacterOnDisplay.episode}}</h3>
      
    </div>
</template>

<script>

  export default {
    name: 'personaje',

    mounted(){
      // Load all information about character with id at URL parameter
      this.$store.dispatch('getCharacter', this.$route.params.idPersonaje);
    }
  }
</script>

<style lang="scss" scoped>

</style>