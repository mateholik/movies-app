<template>
  <div id="app" class="font-body">
    <div id="nav" class="flex justify-center items-center py-8">
      <router-link
        class="inline-block text-white px-8 py-2 text-3xl bg-orange-500 rounded hover:bg-orange-700"
        to="/"
        >Home</router-link
      >
      <div class="favourite relative ml-4">
        <img :src="require('./assets/favourite.svg')" class="w-20 h-20" />
        <span class="absolute text-3xl text-white">{{ favMovies.length }}</span>
      </div>
    </div>
    <div class="container">
      <transition name="router-animation">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import bgImg from "./assets/mgm.jpg";
export default {
  methods: {
    ...mapActions(["fetchMovies"]),
  },
  computed: mapGetters(["favMovies"]),
  created() {
    this.fetchMovies();
  },
  watch: {
    $route() {
      window.scrollTo("header", 0);
    },
  },
};
</script>
<style>
html {
  letter-spacing: 1px;
}
#app {
  background: url(./assets/app-bg.jpg) no-repeat center center fixed;
  background-color: #000;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 15px;
}
.router-animation-enter-active,
.router-animation-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease;
}
.router-animation-enter-active {
  transition-delay: 0.3s;
}
.router-animation-enter,
.router-animation-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.router-animation-enter-to,
.router-animation-leave {
  opacity: 1;
  transform: translateY(0px);
}
.favourite span {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
a {
  text-decoration: none;
}
</style>
