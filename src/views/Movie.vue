<template>
  <div class="flex">
    <div class="w-2/5">
      <img class="mx-auto" :src="movie.posterurl" alt="movie.title" />
    </div>
    <div class="w-3/5">
      <h1 class="text-3xl">{{ movie.title }}</h1>
      <p><strong>Title: </strong>{{ movie.title }}</p>
      <p><strong>Year: </strong>{{ movie.year }}</p>
      <p><strong>IMDB rating: </strong>{{ movie.imdbRating }}</p>
      <p>
        <strong>Genre: </strong>
        <span v-for="(genre, index) in movie.genres" :key="index">
          {{ genre&nbsp; }}
        </span>
      </p>
      <p><strong>Story line: </strong>{{ movie.storyline }}</p>
      <p>
        <strong>Actors: </strong>
        <span v-for="(actor, index) in movie.actors" :key="index">
          {{ actor&nbsp; }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Movie",
  computed: mapGetters(["movie"]),
  // watch: {
  //   $route(to) {
  //     console.log("niu");
  //     this.getMovie(to.params.id);
  //   },
  // },
  methods: {
    ...mapActions(["getMovie", "mapGetters"]),
  },
  created() {
    this.getMovie(this.$route.params.id);
  },
};
</script>

<style></style>
