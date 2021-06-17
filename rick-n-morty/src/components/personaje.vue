<template>
  
  <div>

    <b-button class="gobackBtn" :href="'/page='+$route.params.page" variant="outline-dark">Characters list</b-button>

    <section class="characterCard flex">    

      <b-card img-top class="overflow-hidden" style="display: inline-block;margin: 10px 20px;">
        
        <b-card-img class="charImage" :src=$store.getters.getCharacterOnDisplay.image alt="Image"></b-card-img>
            
        <b-card-body class="body-card">
          <b-card-text>

            <div class="imageTitle">
              <div class="characterName">
                <h3>{{$store.getters.getCharacterOnDisplay.name}}</h3>
              </div>
            </div>

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
          </b-card-text>
        </b-card-body>
        
      </b-card>

    </section>
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

h3{
  color: #000;
}

.charImage{

  width: 50%;
  height: auto;
  border-radius: 25px;
  box-shadow: 0 0 10px 7px rgba(0, 0, 0, 0.5);
}

.characterCard{
  width: 80%;
  margin: 0 auto;
  //padding: 0px 0px;
  align-content: center;
}

.card{
  background-color: rgba(192, 186, 186, 0.719);
  border: 1px solid rgb(44, 43, 43);
  margin: 15px auto;
  border-radius: 20px;
  box-shadow: 0 0 20px 15px rgb(255, 35, 185);
  width: 80%;
  box-sizing: border-box;

  background-image: url(../assets/garage.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

.flex{
  flex-wrap: wrap;
}

.body-card{
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: inset 0 0 10px 7px rgba(0, 0, 0, 0.5);

}

.characterName{
  //position: absolute;
  //top: 100%;
  //left: 50%;
  //transform: translate(-50%, -50%);
  text-align: center;
  align-content: center;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  //box-shadow: inset 0 0 10px 7px rgba(107, 106, 106, 0.603);
  background: rgba(255, 254, 254, 0.466);
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
}

.imageTitle{
  //position: relative;  
  text-align: center;
}

.gobackBtn{
  margin-bottom: 40px;
  color: springgreen;
  border: 1px solid springgreen;
}

.gobackBtn:hover{
  background-color: springgreen;
}

@media (max-width: 700px){
  .card{
    width: 100%;
  }
  .characterCard{
    padding: 0px 70px;;
  }
}

</style>