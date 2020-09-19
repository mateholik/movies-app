import axios from "axios";

const state = {
  movies: [],
};

const getters = {
  allMovies: (state) => state.movies,
};

const actions = {
  async fetchMovies({ commit }) {
    const response = await axios.get(
      "https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json"
    );
    response.data.forEach((item) => {
      item.show = true;
    });
    commit("setMovies", response.data);
  },
  async limitMovies({ commit }, e) {
    const limit =
      e.target.options[e.target.options.selectedIndex].innerText * 1; // const response =
    const newList = state.movies.map((el, i) => {
      if (i < limit) {
        el.show = true;
      } else {
        el.show = false;
      }
      return el;
    });
    commit("setMovies", newList);
  },
  async byGenreMovies({ commit }, e) {
    const genre = e.target.options[e.target.options.selectedIndex].innerText;
    // eslint-disable-next-line no-unused-vars
    const newList = state.movies.map((el) => {
      if (el.genres.includes(genre)) {
        el.show = true;
      } else {
        el.show = false;
      }
      return el;
    });
    commit("setMovies", newList);
  },
  async byRatingMovies({ commit }, e) {
    const rating = e.target.options[e.target.options.selectedIndex].value * 1;
    // eslint-disable-next-line no-unused-vars
    const newList = state.movies.map((el) => {
      if (el.imdbRating >= rating && el.imdbRating < rating + 1) {
        el.show = true;
      } else {
        el.show = false;
      }
      return el;
    });

    console.log(newList);
    commit("setMovies", newList);
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
