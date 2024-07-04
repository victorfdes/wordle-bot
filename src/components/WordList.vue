<script setup lang="ts">
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>
<template>
  <div class="word-list">
    <div class="word" v-for="word in list" :key="word">
      {{ word }}
    </div>
  </div>
</template>
<style scoped>
  .word-list {
    margin: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 16px;
  }
  .word {
    display: inline-block;
    padding: 5px;
    margin: 4px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-transform: uppercase;
  }
</style>
