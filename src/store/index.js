import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUserPageShow:false
    // ,userList:[]
  },
  mutations: {
    loginIn(state,payload){
      state.isUserPageShow=payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
