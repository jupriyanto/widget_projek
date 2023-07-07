<template>
  <div class="container mx-auto bg-cyan-100 p-10 rounded-xl">
    <h2 class="text-center font-bold text-3xl pb-5 text-cyan-600">Your Location</h2>
    <div class="text-center" v-if="latitude && longitude">
      <p>Latitude: {{ latitude }}</p>
      <p>Longitude: {{ longitude }}</p>
    </div>
    <div v-else>
      <p>Finding your location...</p>
    </div>
    <div class="form-group text-center mx-auto justify-center w-full max-w-xs py-2">
      <label class="label-text" for="latitude">Latitude:</label>
      <input class="input-ghost-primary input w-full max-w-xs" type="text" id="latitude" v-model="inputLatitude" />
    </div>
    <div class="form-group text-center mx-auto justify-center w-full max-w-xs py-2">
      <label class="label-text" for="longitude">Longitude:</label>
      <input class="input-ghost-primary input w-full max-w-xs" type="text" id="longitude" v-model="inputLongitude" />
    </div>
    <div class="mx-auto text-center pt-3">
      <button class="btn bg-cyan-600 text-white" @click="fetchLocationDetails">Find Location Details</button>
    </div>

    <div class=" text-center p-3 mt-5" v-if="foundLocation">
      <h3 class="font-bold text-xl">Location Details</h3>
      <p>Country : {{ foundLocation.components.country }}</p>
      <p>City : {{ foundLocation.components.city }}</p>
      <p>Street: {{ foundLocation.components.street }}</p>
      <p>Postal Code: {{ foundLocation.components.postcode }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: null,
      longitude: null,
      inputLatitude: '',
      inputLongitude: '',
      foundLocation: null,
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    }
  },
  methods: {
    getPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },
    async fetchLocationDetails() {
      try {
        const apiKey = '52f9db5a6c2b4799b8508d9252858981';
        const latitude = this.inputLatitude || this.latitude;
        const longitude = this.inputLongitude || this.longitude;
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          latitude + ',' + longitude
        )}&key=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const location = data.results[0];
          this.foundLocation = location;
          console.log('Location:', location);
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    },
  },
};
</script>

<style scoped>
</style>
