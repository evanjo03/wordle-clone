/* eslint-disable @typescript-eslint/no-unused-vars */
import { html, css, LitElement, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import { getWord } from './get-word.js';

export class WordleClone extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--wordle-clone-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: String }) selectedWord: string;

  @property({ type: Number }) counter = 5;

  @state() private guessValue: string;

  get validGuess(): boolean {
    return this.guessValue?.length === 5;
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    this.initData();
  }

  private async initData() {
    this.selectedWord = await getWord();
  }

  render() {
    return html`
      <div>${this.selectedWord}</div>
      <fieldset>
        <input
          .value="${this.guessValue ?? ''}"
          id="guess"
          placeholder="Guess..."
          onkeydown="return /[a-z]/i.test(event.key)"
          @keyup="${this.handleGuessKeyup}"
          @input="${this.handleGuessInput}"
          maxlength="5"
        />
        <button
          @click="${this.handleGuessClick}"
          ?disabled="${!this.validGuess}"
        >
          Guess
        </button>
      </fieldset>
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
    console.log(this.guessValue);
  }
}
