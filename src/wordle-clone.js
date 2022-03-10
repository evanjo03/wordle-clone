import { __decorate } from "tslib";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { html, css, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { getWord } from './get-word.js';
export class WordleClone extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Hey there';
        this.counter = 5;
    }
    get validGuess() {
        var _a;
        return ((_a = this.guessValue) === null || _a === void 0 ? void 0 : _a.length) === 5;
    }
    firstUpdated(_changedProperties) {
        this.initData();
    }
    async initData() {
        this.selectedWord = await getWord();
    }
    render() {
        var _a;
        return html `
      <div>${this.selectedWord}</div>
      <fieldset>
        <input
          .value="${(_a = this.guessValue) !== null && _a !== void 0 ? _a : ''}"
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
    handleGuessInput(e) {
        const inputElement = e.composedPath()[0];
        this.guessValue = inputElement === null || inputElement === void 0 ? void 0 : inputElement.value;
    }
    handleGuessClick() {
        this.makeGuess();
    }
    handleGuessKeyup(e) {
        if (!(e.key === 'Enter' || e.keyCode === 13) || !this.validGuess)
            return;
        this.makeGuess();
    }
    makeGuess() {
        console.log(this.guessValue);
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
    property({ type: String })
], WordleClone.prototype, "selectedWord", void 0);
__decorate([
    property({ type: Number })
], WordleClone.prototype, "counter", void 0);
__decorate([
    state()
], WordleClone.prototype, "guessValue", void 0);
//# sourceMappingURL=wordle-clone.js.map