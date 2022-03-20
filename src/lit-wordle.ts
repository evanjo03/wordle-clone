import { html, LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import { getWord, isWord } from './word-utils.js';
import style from './lit-wordle-css.js';

import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.72/dist/components/dialog/dialog.js';

import './grid.js';
import './grid-row.js';
import './grid-cell.js';

export class LitWordle extends LitElement {
  @state() private guesses: string[] = [];
  @state() private selectedWord: string;
  @state() private guessValue: string;
  @state() private dialogOpen: boolean;
  @state() private dialogText: string;

  static styles = style;

  get lowerCaseGuess(): string {
    return this.guessValue?.toLowerCase();
  }

  get validGuess(): boolean {
    return this.guessValue?.length === 5 && isWord(this.lowerCaseGuess);
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
        <fieldset part="field" class="field__host">
          <input
            .value="${this.guessValue ?? ''}"
            id="guess"
            part="field-input"
            class="field__input"
            onkeydown="return /[a-z]/i.test(event.key)"
            @keyup="${this.handleGuessKeyup}"
            @input="${this.handleGuessInput}"
            maxlength="5"
          />
          <button
            class="field__button"
            part="field-button"
            @click="${this.handleGuessClick}"
            ?disabled="${!this.validGuess}"
          >
            Guess
          </button>
        </fieldset>
        <game-grid
          part="grid"
          class="grid__host"
          .word="${this.selectedWord}"
          .guesses="${this.guesses}"
        ></game-grid>
      </div>
      <sl-dialog
        .open="${this.dialogOpen}"
        label="Dialog"
        id="dialog"
        no-header
        style="--width: 40vw;"
        @sl-hide="${() => {
          this.dialogOpen = false;
        }}"
        @sl-request-close="${(event: any) => {
          if (event.detail.source === 'overlay') {
            event.preventDefault();
          }
        }}"
      >
        <div class="dialog__content">
          <span class="dialog__span">${this.dialogText}</span>
          <div class="dialog__buttonContainer">
            <button class="dialog__button" @click="${this.handleConfirmClick}">
              OK
            </button>
          </div>
        </div>
      </sl-dialog>
    `;
  }

  private handleGuessInput(e: Event): void {
    const inputElement = e.composedPath()[0] as HTMLInputElement;
    // slice for mobile devices that don't support keydown configuration
    this.guessValue = inputElement?.value?.slice(0, 5) ?? '';
  }

  private handleGuessClick(): void {
    this.makeGuess();
  }

  private handleConfirmClick(): void {
    this.dialogOpen = false;

    this.guesses = [];
    this.guessValue = null;
    this.initData();
  }

  private handleGuessKeyup(e: KeyboardEvent): void {
    if (!(e.key === 'Enter' || e.keyCode === 13) || !this.validGuess) return;
    this.makeGuess();
  }

  private makeGuess(): void {
    this.guesses = [...this.guesses, this.lowerCaseGuess];

    if (this.lowerCaseGuess === this.selectedWord) {
      this.dialogText = 'Nice work!';
      this.dialogOpen = true;
      return;
    }

    if (this.guesses?.length === 6) {
      this.dialogText = 'Better luck next time!';
      this.dialogOpen = true;
      return;
    }
    this.guessValue = null;
  }
}
