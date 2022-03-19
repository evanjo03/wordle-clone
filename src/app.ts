import { html, LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import { getWord, isWord } from './word-utils.js';
import style from './app-css.js';
import './grid.js';
import './grid-row.js';
import './grid-cell.js';

export class App extends LitElement {
  @state() private guesses: string[] = [];
  @state() private selectedWord: string;
  @state() private guessCount: number = 0;
  @state() private guessValue: string;

  static styles = style;

  get validGuess(): boolean {
    return this.guessValue?.length === 5 && isWord(this.guessValue);
  }

  protected firstUpdated(): void {
    this.initData();
  }

  private async initData() {
    this.selectedWord = await getWord();
  }

  render() {
    return html`
      <div class="container__host">
        <fieldset class="field__host">
          <input
            .value="${this.guessValue ?? ''}"
            id="guess"
            placeholder="Guess..."
            class="field__input"
            onkeydown="return /[a-z]/.test(event.key)"
            @keyup="${this.handleGuessKeyup}"
            @input="${this.handleGuessInput}"
            maxlength="5"
          />
          <button
            class="field__button"
            @click="${this.handleGuessClick}"
            ?disabled="${!this.validGuess}"
          >
            Guess
          </button>
        </fieldset>
        <game-grid
          class="grid__host"
          .word="${this.selectedWord}"
          .guesses="${this.guesses}"
          .guessCount="${this.guessCount}"
        ></game-grid>
      </div>
    `;
  }

  private handleGuessInput(e: Event): void {
    const inputElement = e.composedPath()[0] as HTMLInputElement;
    this.guessValue = inputElement?.value;
  }

  private handleGuessClick(): void {
    this.makeGuess();
  }

  private handleGuessKeyup(e: KeyboardEvent): void {
    if (!(e.key === 'Enter' || e.keyCode === 13) || !this.validGuess) return;
    this.makeGuess();
  }

  private makeGuess(): void {
    this.guesses = [...this.guesses, this.guessValue];
    this.guessCount += 1;
    this.guessValue = null;
  }
}
