<template>
  <div>
    <div>visi filmai</div>
    <div
      class="p-10 bg-purple-300 text-red sm:bg-green md:bg-blue"
      v-for="movie in allMovies"
      :key="movie.id"
    >
      {{ movie.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AllMovies",
  computed: mapGetters(["allMovies"]),
  methods: {
    ...mapActions(["fetchMovies"]),
  },
  created() {
    this.fetchMovies();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
