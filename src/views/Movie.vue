<template>
  <div class="pb-32">
    <div
      class="bg-black bg-opacity-85 rounded p-4 h-full text-white border-2 border-orange-700"
    >
      <div class="md:flex">
        <div class="md:w-2/5 md:pr-8 mb-8 md:mb-0">
          <img class="mx-auto" :src="movie.posterurl" alt="movie.title" />
        </div>
        <div class="md:w-3/5">
          <h1 class="text-5xl">{{ movie.title }}</h1>
          <p><strong class="text-gray-400">Title: </strong>{{ movie.title }}</p>
          <p><strong class="text-gray-400">Year: </strong>{{ movie.year }}</p>
          <p>
            <strong class="text-gray-400">IMDB rating: </strong
            >{{ movie.imdbRating }}
          </p>
          <p>
            <strong class="text-gray-400">Genre: </strong>
            <span v-for="(genre, index) in movie.genres" :key="index">
              {{ genre&nbsp; }}
            </span>
          </p>
          <p class="mb-6">
            <strong class="text-gray-400">Actors: </strong>
            <span v-for="(actor, index) in movie.actors" :key="index">
              {{ actor&nbsp; }}
            </span>
          </p>
          <p>
            <strong class="text-gray-400">Story line: </strong
            >{{ movie.storyline }}
          </p>
        </div>
      </div>
      <div></div>
      <AddMovie :update="true"></AddMovie>
    </div>
  </div>
</template>

<script>
import AddMovie from "./../components/AddMovie";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Movie",
  components: {
    AddMovie,
  },
  computed: mapGetters(["movie"]),
  methods: {
    ...mapActions(["getMovie", "mapGetters"]),
  },
  created() {
    this.getMovie(this.$route.params.id);
  },
};
</script>

<style></style>
