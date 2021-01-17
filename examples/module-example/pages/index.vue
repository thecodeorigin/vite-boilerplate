<template>
  <div>
    <HelloWorld msg="This is the home page" />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
export default defineComponent({
  components: {
    HelloWorld,
  }
})
</script>
