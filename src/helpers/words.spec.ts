import { expect, describe, it } from 'vitest'
import { processWords, matchPlaced, matchGood, matchBad } from './words'; 

describe('processWords function', () => {
  it('filters words correctly based on criteria', () => {
    const data = {
      good: ['h', 'o'],
      bad: ['x', 'z'],
      placed: ['h', '', 'u', '', 'e'] // Simulating 'o' at index 0 and 'd' at index 2
    };

    const expectedFilteredWords = ['house']; // Expected output based on the criteria

    const filteredWords = processWords(data);
    
    expect(filteredWords).toEqual(expectedFilteredWords);
  });
});

