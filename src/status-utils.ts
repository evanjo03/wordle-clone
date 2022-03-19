type Status = 'correct' | 'incorrect' | 'misplaced';

export function getStatus(letter: string, word: string, index: number): Status {
  if (word.at(index) === letter) {
    return 'correct';
  }

  if (word.includes(letter)) {
    return 'misplaced';
  }

  return 'incorrect';
}
