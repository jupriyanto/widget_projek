<template>
  <div class="container mx-auto bg-cyan-100 p-10 rounded-xl">
    <h1 class="text-center font-bold text-3xl pb-5 text-cyan-600">Weather Widget</h1>
    <div class="form w-full max-w-xs mx-auto">
      <label class="label">
        <span class="label-text">Input your Location</span>
      </label>
      <input type="text" placeholder="Type here..." class="input-ghost-primary input w-full max-w-xs" v-model="query" @keypress="fetchWeather" />
      <div class="backdrop-blur-xl bg-cyan-50 rounded-md mt-8" v-if="typeof weather.main != 'undefined'">
        <h2 class="font-medium text-2xl text-center py-5 text-">{{ weather.name }}, {{ weather.sys.country }}</h2>
        <h3 class="font-thin text-lg text-center">{{ dateBuilder() }}</h3>
        <h1 class="font-bold text-4xl text-center py-5">{{ Math.round(weather.main.temp) }} °C</h1>
        <h2 class="font-semibold text-2xl italic text-center pb-5">{{ weather.weather[0].main }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  data() {
    return {
      query: "",
      weather: {},
    };
  },
  methods: {
    async fetchWeather(e) {
      try {
        const api_key =  "2740304eed564c65f9062744a1322f6b";
        const url_base = "https://api.openweathermap.org/data/2.5/weather";
        if (e.key === "Enter") {
          const response = await fetch(`${url_base}?q=${this.query}&units=metric&appid=${api_key}`);
          this.weather = await response.json();
          this.query = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
    dateBuilder() {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day}, ${date} ${month} ${year}`;
    },
  },
};
</script>
