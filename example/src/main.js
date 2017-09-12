import Vue from 'vue'
import App from './App.vue'
import LazyThis from '../../src/index.js'

Vue.use(LazyThis,{autoUnobserve: false})

new Vue({
  el: '#app',
  render: h => h(App)
})
