<template>
  <component :is="layout">
    <router-view @layout="updateLayout" />
  </component>
</template>

<script>
// Import layout components here
import defaultLayout from './core/layouts/default.vue'
/**
 * Root component
 */
export default {
  name: 'Root',
  components: {
    defaultLayout,
  },
  data() {
    return {
      layout: 'defaultLayout',
    }
  },
  methods: {
    /**
     * Use this.$emit('layout', '[LAYOUT_NAME]') in your page component
     */
    updateLayout(layout) {
      this.layout = layout
    }
  },
}
</script>
