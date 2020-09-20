import axios from "axios";

const state = {
  movies: [],
  movie: {},
};

const getters = {
  allMovies: (state) => state.movies,
  movie: (state) => state.movie,
  favMovies: (state) => {
    return state.movies.filter((movie) => movie.fav);
  },
};

const actions = {
  async fetchMovies({ commit }) {
    const response = await axios.get(
      "https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json"
    );
    response.data.forEach((item, index) => {
      item.show = true;
      item.fav = false;
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
      if (rating === 999) {
        el.show = true;
      } else {
        if (el.imdbRating >= rating && el.imdbRating < rating + 1) {
          el.show = true;
        } else {
          el.show = false;
        }
      }
      return el;
    });
    commit("setMovies", newList);
  },
  async getMovie({ commit, state }, id) {
    const movie = await state.movies.filter((el) => {
      return el.id == id;
    });
    commit("setMovie", movie[0]);
  },
  async addMovie({ commit, state }, movieObj) {
    movieObj.show = true;
    movieObj.id = state.movies.length + 1;
    await state.movies.unshift(movieObj);
    commit("setMovie", movieObj);
  },
  // eslint-disable-next-line no-unused-vars
  async updateMovie({ commit, state }, movieObj) {
    movieObj.id = state.movie.id;
    const updatedList = await state.movies.map((el) => {
      return el.id === state.movie.id ? movieObj : el;
    });
    commit("setMovie", movieObj);
    commit("setMovies", updatedList);
  },
  // eslint-disable-next-line no-unused-vars
  async addfavorite({ commit, state }, id) {
    const newList = await state.movies.map((el) => {
      if (el.id === id) {
        el.fav = !el.fav;
      }
      return el;
    });
    commit("setMovies", newList);
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
