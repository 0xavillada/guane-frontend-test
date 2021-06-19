<template>
  <div>
    <b-button
      class="go-back-btn"
      :href="'/page/' + $route.params.page"
      variant="outline-dark"
      >Characters list</b-button
    >
    <section class="character-card flex">
      <b-card
        img-top
        class="overflow-hidden"
        style="display: inline-block; margin: 10px 20px"
      >
        <b-card-img
          class="character-img"
          :src="$store.getters.getCharacterOnDisplay.image"
          alt="Image"
        ></b-card-img>

        <b-card-body class="character-info">
          <div class="character-name">
            <h1>{{ $store.getters.getCharacterOnDisplay.name }}</h1>
          </div>
          <b-card-text>
            <div class="character-data">
              <h5>
                Character id:
                <b>{{ $store.getters.getCharacterOnDisplay.id }}</b>
              </h5>
              <h5>
                Status: <b>{{ $store.getters.getCharacterOnDisplay.status }}</b>
              </h5>
              <h5>
                Species:
                <b>{{ $store.getters.getCharacterOnDisplay.species }}</b>
              </h5>
              <h5>
                Species type:
                <b>{{ $store.getters.getCharacterOnDisplay.type }}</b>
              </h5>
              <h5>
                Gender: <b>{{ $store.getters.getCharacterOnDisplay.gender }}</b>
              </h5>
              <!-- These two data can be rendering when the object is not existing -->
              <h5>
                Character origin:
                <b>{{
                  $store.getters.getCharacterOnDisplay.origin &&
                  $store.getters.getCharacterOnDisplay.origin.name
                }}</b>
              </h5>
              <h5>
                Actual location:
                <b>{{
                  $store.getters.getCharacterOnDisplay.location &&
                  $store.getters.getCharacterOnDisplay.location.name
                }}</b>
              </h5>
              <h5>
                <h5>Episodes:</h5>
                <b
                  v-for="(episode, index) in $store.getters
                    .getCharacterOnDisplay.episode"
                  :key="index"
                  >{{ episode.split("/").pop() + ".  " }}</b
                >
              </h5>
            </div>
          </b-card-text>
        </b-card-body>
      </b-card>
    </section>
  </div>
</template>

<script>
export default {
  name: "personaje",

  mounted() {
    // Load all information about character with id at URL parameter
    this.$store.dispatch("getCharacter", this.$route.params.idPersonaje);
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: #000;
}

.character-data {
  margin-top: 3%;
  color: #92c5cc;
  font-weight: bold;
  text-shadow: 1px 1px 1px #01343a, 0 0 4em #68cf52, 0 0 0.4em #68cf52;
}

.character-img {
  width: 30%;
  height: auto;
  border-radius: 25px;
  box-shadow: 0 0 10px 7px rgba(0, 0, 0, 0.5);
  margin-bottom: 0px;
  margin-top: 2%;
}

.character-card {
  width: 80%;
  margin: 0 auto;
  //padding: 0px 0px;
  align-content: center;
}

.card {
  background-color: rgba(192, 186, 186, 0.719);
  border: 1px solid rgb(44, 43, 43);
  margin: 15px auto;
  border-radius: 20px;
  box-shadow: 0 0 10px 8px rgb(255, 35, 185);
  width: 80%;
  box-sizing: border-box;

  background-image: url(../assets/garage.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

.flex {
  flex-wrap: wrap;
}

.character-name {
  width: 100%;
  padding: 5px;
  background-color: rgba(192, 186, 186, 0.719);
  border-radius: 20px;
  text-align: center;
  color: #00b0c8;
  font-weight: bold;
  -webkit-text-stroke: 2px #01343a;
  text-shadow: 1px 1px 1px #01343a, 0 0 4em #2fff00, 0 0 0.4em #2fff00;
}

.go-back-btn {
  margin-bottom: 40px;
  color: #00ff80;
  border: 1px solid #00ff80;
}

.go-back-btn:hover {
  background-color: #00ff80;
}

.character-info {
  margin-top: 2%;
  background-color: #01343a79;
  border-radius: 20px;
}

@media (max-width: 700px) {
  .card {
    width: 100%;
  }
  .character-card {
    padding: 0px 70px;
  }
}
</style>