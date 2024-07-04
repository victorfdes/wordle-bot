import * as wordData from '@/data/words.json'

export const processWords = (data: {
  good: string[],
  bad: string[],
  placed: string[]
}) => {
  const { words } = wordData
  let newWords = [...words]
  const {
    good,
    bad,
    placed,
  } = data

  newWords = newWords.filter(word => {
    if (!matchPlaced(word, placed)) {
      return false
    }
    if (!matchGood(word, good)) {
      return false
    }
    if (!matchBad(word, bad)) {
      return false
    }
    return true
  })

  return newWords
}

export const matchPlaced = (word: string, placed: string[]) => {
  const wordArray = word.split('')
  let match = true
  wordArray.forEach((alphabet, index) => {
    if (placed[index] && alphabet !== placed[index]) {
      match = false
    }
  })
  return match
}

export const matchGood = (word: string, good: string[]) => {
  let match = true
  good.forEach(alphabet => {
    if (word.indexOf(alphabet) === -1) {
      match = false
    }
  })
  return match
}

export const matchBad = (word: string, bad: string[]) => {
  let match = true
  bad.forEach(alphabet => {
    if (word.indexOf(alphabet) > -1) {
      match = false
    }
  })
  return match
}
