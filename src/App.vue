<script setup lang="ts">
import { ref } from 'vue'
import InputArea from '@/components/InputArea/InputArea.vue'
import WordList from '@/components/WordList.vue'

import {
  processWords
} from '@/helpers/words'

const wordList = ref([])

</script>

<template>
  <div class="app-container">
    <div class="input-area">
      <InputArea @process="(data) => wordList = processWords(data)" />
    </div>
    <div class="words">
      <WordList :list="wordList" />
    </div>
  </div>
</template>

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
