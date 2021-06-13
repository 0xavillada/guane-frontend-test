import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalCharacters: 0,
    totalPages : 0,
    characters: []
  },

  mutations: {
    saveCharacters( state, data ) {
      
      state.totalCharacters = data.info.count;
      state.totalPages = data.info.pages;
      state.characters = data.results;
    }
  },

  actions: {

    // This method gets info and 20 characters (or less) from API for page given
    getPageCharacters( context, page ){

      axios.get('https://rickandmortyapi.com/api/character/?page=' + page)
      .then( function( response ){
        context.commit('saveCharacters', response.data);
      }).catch( err => {
        console.log(' > ERROR: Number page not found!');
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
    }
  }
})
