<template>
  <div class="default__layout">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/about">
      About
    </router-link>
    <slot />
  </div>
</template>

<script>
export default {
  name: "defaultLayout"
}
</script>

<style scoped>

</style>