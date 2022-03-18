import { LitElement } from 'lit';
import './grid.js';
import './grid-row.js';
import './grid-cell.js';

export declare class App extends LitElement {
  private guesses;
  private selectedWord;
  private guessCount;
  private guessValue;
  static styles: import('lit').CSSResult;
  get validGuess(): boolean;
  protected firstUpdated(): void;
  private initData;
  render(): import('lit-html').TemplateResult<1>;
  private handleGuessInput;
  private handleGuessClick;
  private handleGuessKeyup;
  private makeGuess;
}
