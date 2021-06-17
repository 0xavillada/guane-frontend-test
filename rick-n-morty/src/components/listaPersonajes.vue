<template>
  <div>
    <img src="../assets/ezgif.com-gif-maker.gif" style="width: 200px;" v-if="load">
    <div class="cardList flex" v-else>
      <div class="character-card">
        <b-card
          v-for="(character, index) in firstMiddle
            ? $store.getters.getCharacters.slice(0, 10)
            : $store.getters.getCharacters.slice(10, 20)"
          :key="index"
          img-top
          class="overflow-hidden"
          style="display: inline-block; margin: 10px 20px"
        >
          <a :href="$route.path + '/id=' + character.id" class="reference">
            <b-row>
              <b-col>
                <div class="imageTitle">
                  <b-card-img :src="character.image" img-width="400" alt="Image"></b-card-img>
                  <div class="bottom-card">s</div>
                </div>
              </b-col>
              <b-col>
                <h1 class="title-character">{{character.name}}</h1>
                <b-card-body class="body-card">
                  <b-card-text>
                    <h5>Species: <b> {{ character.species == "Human" ? character.species+" 🧏" : character.species+" 👽"}} </b></h5>
                    <h5>Status: <b> {{ character.status == "Alive" ? character.status+" 😁" : character.status+" 😵" }} </b></h5>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </a>
        </b-card>
      </div>
    </div>
    <div class="paginator">
          <b-pagination
            v-model="currentPage"
            :total-rows="671"
            :per-page="10"
            aria-controls="my-table"
            @change="changePagination"
          >
          </b-pagination>
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
      currentPage: 1,
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
        this.$router.push("page=1");
      }

      // We will have double of pages than the API and this code section map our page to API page
      let pageInAPI = actualPage / 2;

      // This desition help us to know if we will show the first 10 characters of 20 obtained
      if (actualPage % 2 === 0) {
        this.firstMiddle = false;
      }

      // It rounds for above for correct mapping
      this.load = true;
      await this.$store.dispatch("getPageCharacters", Math.ceil(pageInAPI));
      this.load = false;
    },

    changePagination(pag){
      console.log(this.$route.params);
    }
  },

  // I chose this execution state only for performace
  beforeMount() {
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

.character-card{
  margin-top:30px;
}

.reference {
  text-decoration: none;
  color: #000;
}
.reference:hover {
  text-decoration: none;
  color: #000;
}

.cardList {
  width: 80%;
  margin: 0 auto;
  padding: 0px 100px;
  display: flex;
  justify-content: space-between;
}

.title-character{
  color: #00B0C8;
  font-weight: bold;
  -webkit-text-stroke: 2px #01343A;
  text-shadow: 1px 1px 1px #01343A, 0 0 4em #68CF52, 0 0 0.4em #68CF52;
}

.card {
  background-color: rgba(54, 54, 54, 0.719);
  border: 1px solid rgb(44, 43, 43);
  margin: 50px;
  border-radius: 20px;
  box-shadow: 0 0 5px 3px rgb(255, 35, 185);
  width: 40%;
  height: 270px;
  box-sizing: border-box;

  background-image: url(../assets/garage.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  

}

.card-img{
  border-radius: 100%;
}

.card:hover {
  box-shadow: 0 0 10px 6px rgb(255, 35, 185);
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.body-card {
  color: #92c5cc;
  font-weight: bold;
  text-shadow: 1px 1px 1px #01343A, 0 0 4em #68CF52, 0 0 0.4em #68CF52;

  b{
    color:rgba(255, 255, 255, 0.788);
  }

  position: absolute;
  width: 50%;
  max-height: 400px;
  bottom: 0%;
  //box-shadow: inset 0 0 10px 7px rgba(0, 0, 0, 0.5);
  background-color: #01343a79;
  border-top-left-radius: 20px;

}

.characterName {
  position: absolute;
  top: 88%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
  height: 60px;
  border-radius: 10px;
  //box-shadow: inset 0 0 10px 7px rgba(107, 106, 106, 0.603);
  background: rgba(255, 254, 254, 0.63);
}

.imageTitle {
  position: relative;
  text-align: center;
}

.paginator{
  display: flex;
  align-items: center;
  flex-direction: column;
}

@media (max-width: 700px) {
  .card {
    width: 100%;
  }
  .cardList {
    padding: 0px 70px;
  }
}
</style>
