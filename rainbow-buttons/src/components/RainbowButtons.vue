<template>
  <div>
    <nav>
      <button
        v-for="backgroundColor in rainbow"
        :key="backgroundColor"
        :style="{ backgroundColor }"
      >
        Link
      </button>
    </nav>
    <nav>
      <button
        v-for="backgroundColor in colours"
        :key="backgroundColor"
        :style="{ backgroundColor }"
      >
        Link
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'RainbowButtons',

  props: {
    start: {
      type: Number,
      default: 0xDD9900,
    },

    end: {
      type: Number,
      default: 0x00AAFF,
    },

    steps: {
      type: Number,
      default: 7,
    },
  },

  computed: {
    colours() {
      const start = this.getRGB(this.start);
      const end = this.getRGB(this.end);
      const colours = [];

      for (let i = 1; i <= this.steps; i++) {
        const colour = [];

        for (let c = 0; c < start.length; c++) {
          colour.push(start[c] + ((end[c] - start[c]) * (i / this.steps)));
        }

        colours.push(colour);
      }

      return colours.map(([r, g, b]) => `rgb(${ r }, ${ g }, ${ b })`);
    },

    rainbow() {
      return  [
        '#FF0000',
        '#FF7F00',
        '#FFFF00',
        '#00FF00',
        '#0000FF',
        '#4B0082',
        '#9400D3',
      ];
    }
  },

  methods: {
    getRGB(hex) {
      return [
        (hex >> 16) & 0xFF,
        (hex >> 8) & 0xFF,
        hex & 0xFF,
      ];
    },
  },
}
</script>

<style scoped>

</style>
