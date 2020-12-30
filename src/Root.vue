<template>
  <component :is="layout">
    <router-view @layout="updateLayout" />
  </component>
</template>

<script>
import defaultLayout from './core/layouts/default.vue'
/**
 * Root component
 */
export default {
  name: 'Root',
  data() {
    return {
      layout: defaultLayout,
    }
  },
  methods: {
    updateLayout(layout) {
      this.layout = layout
    }
  }
}
</script>
