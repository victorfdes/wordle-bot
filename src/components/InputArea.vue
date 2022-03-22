<template>
  <div class="input-area">
    <TextBox
      label="Good Letters"
      help="Yellow"
      @text="updateGoodLetters"
    />
    <TextBox
      label="Bad Letters"
      help="Grey"
      @text="updateBadLetters"
    />

    <PlacedInput
      @text="updatePlacedLetters"
    />

    <ActionButton @click="emitData" />
  </div>
</template>
<script>
import ActionButton from './ActionButton.vue'
import PlacedInput from './PlacedInput.vue'
import TextBox from './TextBox.vue'
export default {
  name: 'InputBox',

  components: {
    ActionButton,
    PlacedInput,
    TextBox,
  },

  data () {
    return {
      goodLetters: [],
      badLetters: [],
      placedLetters: [],
    }
  },

  methods: {
    emitData () {
      this.$emit('process', {
        good: this.goodLetters,
        bad: this.badLetters,
        placed: this.placedLetters,
      })
    },
    updateGoodLetters (value) {
      this.goodLetters = value.split('')
    },
    updateBadLetters (value) {
      this.badLetters = value.split('')
    },
    updatePlacedLetters (value) {
      this.placedLetters = value
    },
  }
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
