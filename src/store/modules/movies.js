// eslint-disable-next-line no-unused-vars
import axios from "axios";

const state = {
  movies: [
    {
      id: 1,
      title: "First todo",
    },
    {
      id: 2,
      title: "Second todo",
    },
  ],
};

const getters = {
  allMovies: (state) => state.movies,
};

const actions = {
  async fetchMovies({ commit }) {
    const response = await axios.get(
      "https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json"
    );
    console.log(response.data);
    commit("setMovies", response.data);
  },
};

const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
