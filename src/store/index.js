import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
import { contact } from './contact.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    contact,
  },
  state:{

  },
  getters: {
    getField,
  },
  actions: {

  },
  mutations: {
    updateField,
  }
})

export default store
