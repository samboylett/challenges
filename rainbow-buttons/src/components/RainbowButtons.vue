<template>
  <nav>
    <button
      v-for="backgroundColor in colours"
      :key="backgroundColor"
      :style="{ backgroundColor }"
    >
      {{ backgroundColor }}
    </button>
  </nav>
</template>

<script>
export default {
  name: 'RainbowButtons',

  computed: {
    colours() {
      return ['#DD9900', '#00AAFF'];
    },
  },
}
</script>

<style scoped>

</style>
