import { createRouter, createWebHistory } from 'vue-router'
import Weather from '../views/WeatherWidget.vue'
import StopWatch from '../views/StopwatchWidget.vue'
import Location from '../views/LocationWidget.vue'
import Game from '../views/GameWidget.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'weather',
      component: Weather
    },
    {
      path: '/stopwatch',
      name: 'stopwatch',
      component: StopWatch
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})

export default router
