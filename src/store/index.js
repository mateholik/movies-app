import Vuex from "vuex";
import Vue from "vue";
import movies from "./modules/movies";

//LOAD VUEX
Vue.use(Vuex);

//CREATE STORE
export default new Vuex.Store({
  modules: {
    movies,
  },
});
