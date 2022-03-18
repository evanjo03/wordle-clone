import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './grid-cell-css.js';

@customElement('grid-cell')
export class GridCell extends LitElement {
  @property({ type: String }) value: string;
  @property({ type: String, reflect: true }) status: string;

  static styles = style;

  render() {
    return html`<div class="cell-content">${this.value}</div>`;
  }
}
