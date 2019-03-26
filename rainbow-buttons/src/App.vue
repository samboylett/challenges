<template>
  <div id="app">
    <rainbow-buttons />
  </div>
</template>

<script>
import RainbowButtons from './components/RainbowButtons.vue'

export default {
  name: 'app',
  components: {
    RainbowButtons
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
