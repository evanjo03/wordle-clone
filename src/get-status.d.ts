declare type Status = 'correct' | 'incorrect' | 'misplaced';
export declare function getStatus(
  letter: string,
  word: string,
  index: number
): Status;
export {};
