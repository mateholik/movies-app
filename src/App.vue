<template>
  <div id="app">
    <div id="nav" class="text-center">
      <router-link to="/">Home</router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["fetchMovies"]),
  },
  created() {
    this.fetchMovies();
  },
};
</script>
<style>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
