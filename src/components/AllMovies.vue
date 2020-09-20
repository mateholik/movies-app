<template>
  <div>
    <div class="md:flex flex-wrap">
      <div
        v-for="movie in allMovies"
        :key="movie.id"
        class="md:w-1/2 p-6"
        :class="{ hidden: movie.show === false }"
      >
        <div
          class="bg-black bg-opacity-85 rounded p-4 h-full text-white border-2 border-orange-700"
          :class="{ 'bg-red-900': movie.fav }"
        >
          <div class="flex">
            <div>
              <img
                class="block w-32"
                :src="movie.posterurl"
                :alt="movie.title"
                @error="aVueFunctionThatChangesTheSrc(movie)"
              />
            </div>
            <div class="pl-6 flex-1">
              <p class="text-3xl">{{ movie.title }}</p>
              <p>
                <strong class="text-gray-400">Year: </strong>{{ movie.year }}
              </p>
              <p>
                <strong class="text-gray-400">IMDB rating: </strong
                >{{ movie.imdbRating }}
              </p>
              <p>
                <strong class="text-gray-400">Genre: </strong>
                <span v-for="(genre, index) in movie.genres" :key="index">
                  {{  genre&nbsp;}}
                </span>
              </p>
              <p class="mt-2">
                <strong class="text-gray-400">Story: </strong
                >{{ movie.storyline | truncate(80, "...") }}
              </p>
            </div>
          </div>
          <div class="flex justify-end mt-4">
            <router-link
              :to="'movie/' + movie.id"
              class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-6"
              >Read more</router-link
            >
            <div
              class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              @click="addfavorite(movie.id)"
            >
              <span v-if="movie.fav">Remove favorite</span>
              <span v-else>Add to favorite</span>
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
  filters: {
    truncate: function(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
  },
  methods: {
    ...mapActions(["addfavorite"]),
    aVueFunctionThatChangesTheSrc(movie) {
      movie.posterurl = defaultImg;
      console.clear();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
