import axios from "axios";

const state = {
  movies: [],
  movie: {},
};

const getters = {
  allMovies: (state) => state.movies,
  movie: (state) => state.movie,
};

const actions = {
  async fetchMovies({ commit }) {
    const response = await axios.get(
      "https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json"
    );
    response.data.forEach((item, index) => {
      item.show = true;
      item.id = index + 1;
    });
    commit("setMovies", response.data);
  },
  async limitMovies({ commit, state }, e) {
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
  async byGenreMovies({ commit, state }, e) {
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
  async byRatingMovies({ commit, state }, e) {
    const rating = e.target.options[e.target.options.selectedIndex].value * 1;
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
  // eslint-disable-next-line no-unused-vars
  async getMovie({ commit, state }, id) {
    const movie = await state.movies.filter((el) => {
      return el.id == id;
    });
    commit("setMovie", movie[0]);
  },
};

const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
  setMovie: (state, movie) => (state.movie = movie),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
