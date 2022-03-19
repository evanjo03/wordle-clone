import words from '../assets/words.js';
import dictionary from '../assets/dictionary.js';

export function getWord(): string {
  return words[Math.floor(Math.random() * words.length)];
}

export function isWord(word: string): boolean {
  return dictionary.includes(word);
}
