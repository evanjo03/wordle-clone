import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './grid-css.js';

@customElement('game-grid')
export class GameGrid extends LitElement {
  @property({ type: Array }) guesses: string[];
  @property({ type: String }) word: string;
  @property({ type: Number }) guessCount: number;

  styles = style;

  render() {
    return html`${this.renderGuesses()} ${this.renderEmptyRows()}`;
  }

  renderGuesses(): any {
    return html`${(this.guesses ?? []).map(
      (guess: string) =>
        html`<grid-row .guess="${guess}" .word="${this.word}"></grid-row>`
    )} `;
  }

  renderEmptyRows(): any {
    const emptyRows =
      this.guesses.length < 6 ? Array.from(Array(6 - this.guesses.length)) : [];
    return html`${emptyRows.map(() => html`<grid-row empty></grid-row>`)}`;
  }
}
