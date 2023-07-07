<script setup>
import { RouterLink, RouterView } from "vue-router";
import { CloudIcon } from "@heroicons/vue/24/outline";
import { MapPinIcon } from "@heroicons/vue/24/outline";
import { ClockIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <header>
    <div>
      <nav class="container pb-0 pt-5 md:py-3 mx-auto relative">
        <ul class="bg-cyan-200 tabs tabs-boxed mx-auto gap-5 flex-col w-full lg:w-1/2 lg:flex-row justify-center">
          <li class=" text-cyan-900 font-bold">
            <RouterLink class="tab flex justify-center items-center" to="/">
              <span>
                <CloudIcon class="w-6 h-6 mr-3" />
              </span>
              Weather
            </RouterLink>
          </li>
          <li class=" text-cyan-900 font-bold">
            <RouterLink class="tab flex justify-center items-center" to="/stopwatch">
              <span>
                <ClockIcon class="w-6 h-6 mr-3" />
              </span>
              Stopwatch
            </RouterLink>
          </li>
          <li class=" text-cyan-900 font-bold">
            <RouterLink class="tab flex justify-center items-center" to="/location">
              <span>
                <MapPinIcon class="w-6 h-6 mr-3" />
              </span>
              Location
            </RouterLink>
          </li>
          <li class=" text-cyan-900 font-bold px-5">
            <RouterLink class="tab flex justify-center items-center" to="/game">
              <v-icon name="md-games-sharp" class="w-6 h-6 mr-3" fill="currentColor" />
              Game
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <RouterView class="mt-5 lg:mt-10" />
</template>

<style scoped>
li a.router-link-exact-active {
  @apply tab-active;
  @apply text-black;
  @apply bg-cyan-300;

}
</style>
