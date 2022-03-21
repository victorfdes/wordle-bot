<template>
  <button>{{ text }}</button>
</template>
<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      default: 'Search'
    }
  }
}
</script>
<style scoped>
  button {
    background: cyan;
  }
</style>
