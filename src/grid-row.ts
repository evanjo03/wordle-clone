import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getStatus } from './status-utils.js';
import style from './grid-row-css.js';

@customElement('grid-row')
export class GridRow extends LitElement {
  @property({ type: String }) guess: string;
  @property({ type: String }) word: string;
  @property({ type: Boolean }) empty: boolean;

  static styles = style;

  render() {
    if (this.empty) {
      return html`${Array.from(Array(5)).map(
        () => html`<grid-cell></grid-cell>`
      )}`;
    }
    return html`
      ${(this.guess?.split('') ?? []).map((letter: string, index: number) => {
        const status = getStatus(letter, this.word, index);

        return html`<grid-cell
          .value="${letter}"
          .status="${status}"
        ></grid-cell>`;
      })}
    `;
  }
}
