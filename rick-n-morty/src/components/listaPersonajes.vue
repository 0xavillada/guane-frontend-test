<template>
  <div class="list">
    <section class="cardList flex">

      <div v-if="firstMiddle">
        
        <b-card v-for="(character, index) in $store.getters.getCharacters.slice(0,10)" :key="index"
        img-top class="overflow-hidden" style="display: inline-block;margin: 10px 20px;">
          <a :href="$route.path +'/id='+character.id" class="reference">
            <div>
              <div class="imageTitle">
                <b-card-img :src=character.image alt="Image"></b-card-img>
                <div class="characterName">
                  <h3>{{character.name}}</h3>
                </div>
              </div>
              <b-card-body class="body-card">
                <b-card-text>
                  <h5> Species: {{character.species}}</h5>
                  <h5> Status: {{character.status}}</h5>
                </b-card-text>
              </b-card-body>
            </div>
          </a>      
        </b-card>

      </div>

      <div v-else>
        
        <b-card v-for="(character, index) in $store.getters.getCharacters.slice(10,20)" :key="index"
        img-top class="overflow-hidden" style="display: inline-block;margin: 10px 20px;">
          <a href="" class="reference">
            <div>
              <div class="imageTitle">
                <b-card-img :src=character.image alt="Image"></b-card-img>
                <div class="characterName">
                  <h3>{{character.name}}</h3>
                </div>
              </div>
              <b-card-body class="body-card">
                <b-card-text>
                  <h5> Species: {{character.species}}</h5>
                  <h5> Status: {{character.status}}</h5>
                </b-card-text>
              </b-card-body>
            </div>
          </a>      
        </b-card>

      </div>

    </section>
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

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a{
  text-decoration: none;
  color: #000;
}
a:hover {
  color: #000;
}

.cardList{
  width: 80%;
  margin: 0 auto;
  padding: 0px 100px;
  align-content: center;
}

.card{
  background-color: rgba(192, 186, 186, 0.719);
  border: 1px solid rgb(44, 43, 43);
  margin: 15px auto;
  border-radius: 20px;
  box-shadow: 0 0 10px 7px rgba(255, 47, 245, 0.5);
  width: 40%;
  box-sizing: border-box;
}

.card:hover{
  box-shadow: 0 0 20px 15px rgba(255, 47, 245, 0.5);
}

.flex{
  display: flex;
  flex-wrap: wrap;
}

.body-card{
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: inset 0 0 10px 7px rgba(0, 0, 0, 0.5);

  background-image: url(../assets/garage.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

.characterName{
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

.imageTitle{
  position: relative;
  text-align: center;
}

@media (max-width: 700px){
  .card{
    width: 100%;
  }
  .cardList{
    padding: 0px 70px;;
  }
}

</style>
