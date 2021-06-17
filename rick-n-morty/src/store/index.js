import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalCharacters: 0,
    totalPages : 0,
    characters: [],
    characterOnDisplay: {}
  },

  mutations: {
    saveCharacters( state, data ) {
      
      state.totalCharacters = data.info.count;
      state.totalPages = data.info.pages;
      state.characters = data.results;
    },
    saveDisplayedCharater( state, character ){

      state.characterOnDisplay = character;
    }
  },

  actions: {

    // This method gets info and 20 characters (or less) from API for page given
    async getPageCharacters( context, page ){

      await axios.get('https://rickandmortyapi.com/api/character/?page=' + page)
      .then( function( response ){
        context.commit('saveCharacters', response.data);
      }).catch( err => {
        console.log(' > ERROR: Number page not found!');
      })
    },

    // This method gets character info for "characterId" specified
    async getCharacter( context, characterId ){
      
      await axios.get('https://rickandmortyapi.com/api/character/' + characterId)
      .then( function( response ){
        context.commit('saveDisplayedCharater', response.data);
      })
      .catch( err => {
        console.log(' > ERROR: Character id not found!');
      })
    }
  },

  getters: {
    getCharacters( state ){
      return state.characters;
    },
    getTotalCharacters( state ){
      return state.totalCharacters;
    },
    getTotalPages( state ){
      return state.totalPages;
    },
    getCharacterOnDisplay ( state ) {
      return state.characterOnDisplay;
    }
  }
})