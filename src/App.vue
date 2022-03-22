<template>
  <div class="app-container">
    <div class="input-area">
      <InputArea @process="processWords" />
    </div>
    <div class="words">
      <WordList :list="wordList" />
    </div>
  </div>
</template>

<script>
import * as wordData from '@/words.json'
import InputArea from '@/components/InputArea.vue'
import WordList from '@/components/WordList.vue'
export default {
  name: 'App',
  metaInfo: {
    title: 'Wordle Bot'
  },
  data: () => ({
    wordList: []
  }),
  methods: {
    processWords (data) {
      const { words } = wordData
      let newWords = [...words]
      const {
        good,
        bad,
        placed,
      } = data

      newWords = newWords.filter(word => {
        if (!this.matchPlaced(word, placed)) {
          return false
        }
        if (!this.matchGood(word, good)) {
          return false
        }
        if (!this.matchBad(word, bad)) {
          return false
        }
        return true
      })

      this.wordList = newWords
    },
    matchPlaced (word, placed) {
      const wordArray = word.split('')
      let match = true
      wordArray.forEach((alphabet, index) => {
        if (placed[index] && alphabet !== placed[index]) {
          match = false
        }
      })
      return match
    },
    matchGood (word, good) {
      let match = true
      good.forEach(alphabet => {
        if (word.indexOf(alphabet) === -1) {
          match = false
        }
      })
      return match
    },
    matchBad (word, bad) {
      let match = true
      bad.forEach(alphabet => {
        if (word.indexOf(alphabet) > -1) {
          match = false
        }
      })
      return match
    },
  },
  components: {
    InputArea,
    WordList,
  }
}
</script>

<style>
.app-container {
  font-family: 'Lato', sans-serif;
}
@media screen and (min-width: 700px) {
  .app-container {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .input-area {
    width: 400px;
    box-sizing: border-box;
  }

  .words {
    width: calc(100% - 416px);
    box-sizing: border-box;
  }
}
</style>
