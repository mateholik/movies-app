<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center text-3xl">Small movie app</h1>
      <FilterMovies></FilterMovies>
      <AllMovies></AllMovies>
    </div>
  </div>
</template>

<script>
import AllMovies from "./components/AllMovies";
import FilterMovies from "./components/FilterMovies";

export default {
  name: "App",
  components: {
    AllMovies,
    FilterMovies,
  },
};
</script>

<style>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
