<template>
  <div>
    <FilterMovies></FilterMovies>
    <AllMovies></AllMovies>
  </div>
</template>

<script>
import AllMovies from "./../components/AllMovies";
import FilterMovies from "./../components/FilterMovies";
export default {
  name: "Home",
  components: {
    AllMovies,
    FilterMovies,
  },
};
</script>

<style></style>
