<template>
  <div class="about">
    <h1>This is the character number {{ $route.params.idPersonaje }} </h1>
    <personaje/>
  </div>
</template>

<script>

import personaje from "@/components/personaje.vue"

export default {
  name: 'Personaje',
  components: {
    personaje
  }
}
</script>