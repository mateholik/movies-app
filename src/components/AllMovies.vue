<template>
  <div>
    <h2 class="text-center text-2xl">Movies</h2>
    <div class="md:flex flex-wrap">
      <div
        v-for="movie in allMovies"
        :key="movie.id"
        class="md:w-1/2 p-6"
        :class="{ hidden: movie.show === false }"
      >
        <div class="bg-purple-300 p-4 h-full">
          <div class="flex">
            <div>
              <img
                class="block w-32"
                :src="movie.posterurl"
                :alt="movie.title"
                @error="aVueFunctionThatChangesTheSrc(movie)"
              />
            </div>
            <div class="pl-6">
              <p><strong>Title: </strong>{{ movie.title }}</p>
              <p><strong>Year: </strong>{{ movie.year }}</p>
              <p><strong>IMDB rating: </strong>{{ movie.imdbRating }}</p>
              <p>
                <strong>Genre: </strong>
                <span v-for="(genre, index) in movie.genres" :key="index">
                  {{  genre&nbsp;}}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import defaultImg from "./../assets/default-img.jpg";
export default {
  name: "AllMovies",
  computed: mapGetters(["allMovies"]),
  methods: {
    ...mapActions(["fetchMovies"]),
    aVueFunctionThatChangesTheSrc(movie) {
      movie.posterurl = defaultImg;
      console.clear();
    },
  },
  created() {
    this.fetchMovies();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
