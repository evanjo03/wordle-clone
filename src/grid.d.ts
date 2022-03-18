import { LitElement } from 'lit';

export declare class GameGrid extends LitElement {
  guesses: string[];
  word: string;
  guessCount: number;
  styles: import('lit').CSSResult;
  render(): import('lit-html').TemplateResult<1>;
  renderGuesses(): any;
  renderEmptyRows(): any;
}
