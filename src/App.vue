<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/movie/10">Movie 10</router-link>
      <router-link to="/movie/12">Movie 12</router-link>
      <router-link to="/movie/14">Movie 14</router-link>
    </div>
    <div class="container">
      <h1 class="text-center text-3xl">Small movie app</h1>
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
