<template>
  <div class="py-8">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add Movie
    </button>

    <form class="w-full max-w-lg" @submit.prevent="submit">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-title"
          >
            Title
          </label>
          <input
            v-model.trim="$v.title.$model"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            :class="{ 'border-red-500': $v.title.$error }"
            id="grid-title"
            type="text"
            placeholder="title"
          />
          <div v-if="$v.title.$dirty">
            <p class="text-red-500 text-xs italic" v-if="!$v.title.required">
              Field is required
            </p>
            <p class="text-red-500 text-xs italic" v-if="!$v.title.minLength">
              Name must have at least
              {{ $v.title.$params.minLength.min }} letters.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-year"
          >
            Year
          </label>
          <input
            v-model.trim="$v.year.$model"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{ 'border-red-500': $v.year.$error }"
            id="grid-year"
            type="number"
            placeholder="year"
          />
          <div v-if="$v.year.$dirty">
            <p class="text-red-500 text-xs italic" v-if="!$v.year.required">
              Field is required
            </p>
            <p class="text-red-500 text-xs italic" v-if="!$v.year.between">
              Must be between {{ $v.year.$params.between.min }} and
              {{ $v.year.$params.between.max }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-rating"
          >
            IMDB Rating
          </label>
          <input
            v-model.trim="$v.rating.$model"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            :class="{ 'border-red-500': $v.rating.$error }"
            id="grid-rating"
            type="number"
            placeholder="rating"
          />
          <div v-if="$v.rating.$dirty">
            <p class="text-red-500 text-xs italic" v-if="!$v.rating.required">
              Field is required
            </p>
            <p class="text-red-500 text-xs italic" v-if="!$v.rating.between">
              Must be between {{ $v.rating.$params.between.min }} and
              {{ $v.rating.$params.between.max }}
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-year"
          >
            Genre
          </label>
          <input
            v-model.trim="$v.genre.$model"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{ 'border-red-500': $v.genre.$error }"
            id="grid-genre"
            type="text"
            placeholder="Separate by coma"
          />
          <div v-if="$v.genre.$dirty">
            <p class="text-red-500 text-xs italic" v-if="!$v.genre.required">
              Field is required
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-image"
          >
            Image URL
          </label>
          <input
            v-model.trim="$v.image.$model"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{ 'border-red-500': $v.image.$error }"
            id="grid-image"
            type="link"
            placeholder="https://kazkas.lt/img.jpg"
          />
          <div v-if="$v.image.$dirty">
            <p class="text-red-500 text-xs italic" v-if="!$v.image.url">
              Incorrect URL
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-description"
          >
            Story Line
          </label>
          <textarea
            v-model.trim="$v.description.$model"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            :class="{ 'border-red-500': $v.description.$error }"
            id="grid-description"
            placeholder="Story Line"
          ></textarea>
          <div v-if="$v.description.$dirty">
            <p
              class="text-red-500 text-xs italic"
              v-if="!$v.description.required"
            >
              Field is required
            </p>
            <p
              class="text-red-500 text-xs italic"
              v-if="!$v.description.minLength"
            >
              Description must have at least
              {{ $v.description.$params.minLength.min }} letters
            </p>
            <p
              class="text-red-500 text-xs italic"
              v-if="!$v.description.maxLength"
            >
              Description must have lesss than
              {{ $v.description.$params.maxLength.max }} letters
            </p>
          </div>
        </div>
      </div>

      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          :disabled="submitStatus === 'PENDING'"
        >
          Submit!
        </button>
        <p class="typo__p" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {
  required,
  minLength,
  between,
  maxLength,
  url,
} from "vuelidate/lib/validators";
export default {
  name: "AddMovie",
  data() {
    return {
      title: "",
      year: "",
      genre: "",
      rating: "",
      image: "",
      description: "",
      submitStatus: null,
    };
  },
  methods: {
    ...mapActions(["addMovie"]),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        const newMovie = {
          title: this.title,
          year: this.year,
          imdbRating: this.rating,
          genres: this.genre.split(","),
          storyline: this.description,
          posterurl: this.image,
        };
        this.addMovie(newMovie);
        this.submitStatus = "OK";
      }
    },
  },
  validations: {
    title: {
      required,
      minLength: minLength(4),
    },
    year: {
      required,
      between: between(1800, 2021),
    },
    genre: {
      required,
    },
    rating: {
      required,
      between: between(1, 10),
    },
    description: {
      required,
      minLength: minLength(50),
      maxLength: maxLength(300),
    },
    image: {
      url,
    },
  },
};
</script>

<style></style>
