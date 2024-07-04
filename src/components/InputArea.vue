<template>
  <div class="input-area">
    <TextBox label="Good Letters" help="Yellow" @text="updateGoodLetters" />
    <TextBox label="Bad Letters" help="Grey" @text="updateBadLetters" />

    <PlacedInput @text="updatePlacedLetters" />

    <ActionButton @click="emitData" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ActionButton from './ActionButton.vue'
import PlacedInput from './PlacedInput.vue'
import TextBox from './TextBox.vue'

const emit = defineEmits(['process'])

const goodLetters = ref([])
const badLetters = ref([])
const placedLetters = ref([])

const emitData = () => {
  emit('process', {
    good: goodLetters.value,
    bad: badLetters.value,
    placed: placedLetters.value,
  })
}
const updateGoodLetters = (value) => {
  goodLetters.value = value.split('')
}
const updateBadLetters = (value) => {
  badLetters.value = value.split('')
}
const updatePlacedLetters = (value) => {
  placedLetters.value = value
}
</script>
<style scoped>
.input-area {
  padding: 16px;
  border: 1px solid #ccc;
  margin: 16px;
  border-radius: 5px;
}
</style>
