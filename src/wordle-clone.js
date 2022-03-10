import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
export class WordleClone extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Hey there';
        this.counter = 5;
    }
    __increment() {
        this.counter += 1;
    }
    render() {
        return html `
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
    }
}
WordleClone.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--wordle-clone-text-color, #000);
    }
  `;
__decorate([
    property({ type: String })
], WordleClone.prototype, "title", void 0);
__decorate([
    property({ type: Number })
], WordleClone.prototype, "counter", void 0);
//# sourceMappingURL=wordle-clone.js.map