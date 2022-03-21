<template>
  <div class="container">
    <div class="words">

    </div>
    <div class="input-area">
      <ActionButton @click="processWords" />
    </div>
  </div>
</template>

<script>
import { words } from '@/words.json'
import ActionButton from './components/ActionButton.vue'
export default {
  name: 'App',
  data: () => ({
    goodLetters: [],
    badLetters: [],
    placedLetters: [], // Length 5
  }),
  methods: {
    processWords () {
      console.log('Process', this.goodLetters.length, words.length)
    }
  },
  components: {
    ActionButton,
  }
}
</script>

<style>
.container {

}
</style>
