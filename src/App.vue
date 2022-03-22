<template>
  <div class="container">
    <div class="input-area">
      <InputArea @process="processWords" />
    </div>
    <div class="words">
      <WordList :list="wordList" />
    </div>
  </div>
</template>

<script>
import { words } from '@/words.json'
import InputArea from '@/components/InputArea.vue'
import WordList from '@/components/WordList.vue'
export default {
  name: 'App',
  data: () => ({
    wordList: ['north', 'south']
  }),
  methods: {
    processWords (data) {
      let newWords = [...words]
      const {
        good,
        bad,
        placed,
      } = data
      
      // Filter Placed words
      newWords = newWords.filter(word => {
        return word !== [good, bad, placed]
      })

      this.wordList = newWords
    }
  },
  components: {
    InputArea,
    WordList,
  }
}
</script>

<style>
.container {
  font-family: 'Lato', sans-serif;
}
</style>
