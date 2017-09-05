import Vue from 'vue'
import App from './App.vue'
import LazyThis from '../../src/index.js'

Vue.use(LazyThis)

new Vue({
  el: '#app',
  render: h => h(App)
})
