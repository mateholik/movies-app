<template>
  <div>
    <FilterMovies></FilterMovies>
    <AddMovie></AddMovie>
    <AllMovies></AllMovies>
  </div>
</template>

<script>
import AllMovies from "./../components/AllMovies";
import FilterMovies from "./../components/FilterMovies";
import AddMovie from "./../components/AddMovie";
export default {
  name: "Home",
  components: {
    AllMovies,
    FilterMovies,
    AddMovie,
  },
};
</script>

<style></style>
