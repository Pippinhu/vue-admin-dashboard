import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//initial state
const userSelectedMode = window.localStorage.getItem('isDarkMode')
const state = {
  isDarkMode:userSelectedMode
}

//initial getters
const getters = {
  isDarkMode(state){
    return state.isDarkMode
  }
}

const mutations= {
  toggleDarkMode(state){
    if(state.isDarkMode === true){
      state.isDarkMode = false;
      document.body.style.background = "#f0f3f5";
      window.localStorage.setItem("isDarkMode", "true");
    }else{
      state.isDarkMode = true;
      document.body.style.background = "#212c4f";
      window.localStorage.setItem("isDarkMode", "false");
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions: {}
});
