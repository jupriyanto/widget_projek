<template>
  <div class="container mx-auto bg-cyan-100 p-10 rounded-b-xl lg:rounded-xl">
    <h2 class="text-center font-bold text-3xl pb-5 text-cyan-600">Stopwatch</h2>
    <p class="text-center font-light text-lg">{{ formatTime }}</p>
    <div class="mx-auto text-center pt-5">
      <button class="btn btn-accent mr-2" @click="startStopwatch" :disabled="isRunning">Start</button>
      <button class="btn btn-error mr-2" @click="stopStopwatch" :disabled="!isRunning">Stop</button>
      <button class="btn btn-accent" @click="resetStopwatch">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      startTime: null,
      elapsedTime: 0,
    };
  },
  computed: {
    formatTime() {
      const milliseconds = this.elapsedTime % 1000;
      const seconds = Math.floor(this.elapsedTime / 1000) % 60;
      const minutes = Math.floor(this.elapsedTime / 60000) % 60;
      const hours = Math.floor(this.elapsedTime / 3600000);

      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    },
  },
  methods: {
    startStopwatch() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.startTime = Date.now();

        this.timerInterval = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
        }, 10);
      }
    },
    stopStopwatch() {
      if (this.isRunning) {
        this.isRunning = false;
        clearInterval(this.timerInterval);
      }
    },
    resetStopwatch() {
      this.isRunning = false;
      clearInterval(this.timerInterval);
      this.elapsedTime = 0;
    },
  },
};
</script>

<style scoped>
.stopwatch-widget button:disabled {
  @apply bg-gray-300;
  cursor: not-allowed;
}
</style>