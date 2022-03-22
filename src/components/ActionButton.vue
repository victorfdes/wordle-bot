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
    background: #333;
    color: #eee;
    border: 0px;
    border-radius: 5px;
    width: 100%;
    height: 30px;
    text-transform: uppercase;
  }
</style>
