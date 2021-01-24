<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue'
export default defineComponent({
  name: 'ExampleComponent',
  props: {
    data: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
  },
  setup(props) {
    // Using `toRefs` to create a Reactive Reference to the `data` property of props
    // See docs: https://v3.vuejs.org/guide/composition-api-introduction.html#reacting-to-changes-with-watch
    const { data } = toRefs(props)

    console.log(props) // { msg: '' }
    return {
      // anything returned here will be available for the rest of the component
    }
  },
})
</script>
