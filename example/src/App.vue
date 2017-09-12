<template>
  <div id="app">
    <lazy-this>
      <img slot="onEnter" src="https://dummyimage.com/640x4:3/"/>
    </lazy-this>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
