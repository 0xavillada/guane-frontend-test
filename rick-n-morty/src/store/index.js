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

    getAllCharacters( context ){
      
      axios.get('https://rickandmortyapi.com/api/character/')
      .then( function( response ){
        context.commit('saveCharacters', response.data);
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
