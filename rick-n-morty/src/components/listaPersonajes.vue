<template>
  <div>
    <img
      src="../assets/ezgif.com-gif-maker.gif"
      style="width: 200px"
      v-if="load"
    />
    <div class="card-list flex" v-else>
      <div>
        <b-card
          no-body
          class="overflow-hidden character-card"
          v-for="(character, index) in firstMiddle
            ? $store.getters.getCharacters.slice(0, 10)
            : $store.getters.getCharacters.slice(10, 20)"
          :key="index"
          style="display: inline-block; margin: 10px 20px"
        >
          <a :href="$route.path + '/' + character.id" class="character-link">
            <b-row no-gutters>
              <b-col md="6" style="padding: 20px">
                <b-card-img
                  class="character-image"
                  :src="character.image"
                  alt="Image"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <div class="card-tittle">
                  <h1 class="character-name">{{ character.name }}</h1>
                </div>
                <div class="character-body-text">
                  <b-card-text class="character-info">
                    <h5>
                      Species:
                      <b>
                        {{
                          character.species == "Human"
                            ? character.species + " 🧏"
                            : character.species + " 👽"
                        }}
                      </b>
                    </h5>
                    <h5>
                      Status:
                      <b>
                        {{
                          character.status == "Alive"
                            ? character.status + " 😁"
                            : character.status + " 😵"
                        }}
                      </b>
                    </h5>
                  </b-card-text>
                </div>
              </b-col>
            </b-row>
          </a>
        </b-card>
      </div>
    </div>
    <div class="paginator">
      <b-pagination-nav
        pills
        :number-of-pages="$store.getters.getTotalPages * 2"
        base-url=""
        class="mt-4 pagination-navegation"
      >
        <template #page="{ page, active }">
          <b v-if="active">{{ page }}</b>
          <i v-else>{{ page }}</i>
        </template>
      </b-pagination-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "listaPersonajes",

  data() {
    return {
      /* This data will help us for recognize if we will show the first 10 characters or 
        the second 10 characters from the 20 that API returns us.
      */
      load: false,
      firstMiddle: true,
    };
  },

  methods: {
    async showList() {
      let actualPage = parseInt(this.$route.params.page);

      /* This is a little control for always start on page 1.
        It is redirecting if url parameter "page" are null or < than 1
      */
      if (actualPage < 1 || isNaN(actualPage)) {
        //this.$router.push("page/1");
        this.$router.push("page/1").catch((err) => {});
      }

      // We will have double of pages than the API and this code section map our page to API page
      let pageInAPI = actualPage / 2;

      // This desition help us to know if we will show the first 10 characters of 20 obtained
      if (actualPage % 2 === 0) {
        this.firstMiddle = false;
      }

      // It rounds above for correct mapping
      this.load = true;
      await this.$store.dispatch("getPageCharacters", Math.ceil(pageInAPI));
      this.load = false;
    },
  },

  mounted() {
    this.showList();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.card-list {
  width: 100%;
  margin: 0 auto;
  padding: 0px 100px;
  display: flex;
  justify-content: space-between;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.character-link {
  text-decoration: none;
  color: #000;
}
.character-link:hover {
  text-decoration: none;
  color: #000;
}

.card-tittle {
  height: 50%;
  width: 100%;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.character-name {
  color: #00b0c8;
  font-weight: bold;
  -webkit-text-stroke: 2px #01343a;
  text-shadow: 1px 1px 1px #01343a, 0 0 4em #68cf52, 0 0 0.4em #68cf52;
  font-size: 2.5vw;
}

.character-body-text {
  height: 48%;
  width: 98%;
  margin: 0px;
  padding: 10px;
  background-color: #01343a79;
  border-radius: 20px;
}

.character-info {
  color: #92c5cc;
  font-weight: bold;
  text-shadow: 1px 1px 1px #01343a, 0 0 4em #68cf52, 0 0 0.4em #68cf52;
}

.character-card {
  background-color: rgba(54, 54, 54, 0.719);
  border: 1px solid rgb(44, 43, 43);
  border-radius: 20px;
  box-shadow: 0 0 5px 3px rgb(255, 35, 185);
  width: 40%;
  box-sizing: border-box;

  //Image background fixed
  background-image: url(../assets/garage.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

.character-card:hover {
  box-shadow: 0 0 10px 6px rgb(255, 35, 185);
}

.character-image {
  border-radius: 100%;
  margin-bottom: 0;
}

.paginator {
  display: flex;
  align-items: center;
  flex-direction: column;
}

@media (max-width: 700px) {
  .character-card {
    width: 100%;
  }
  .card-list {
    padding: 0px 70px;
  }
}
</style>
