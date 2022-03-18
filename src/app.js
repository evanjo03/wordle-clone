import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import { getWord } from './get-word.js';
import style from './app-css.js';
import './grid.js';
import './grid-row.js';
import './grid-cell.js';
export class App extends LitElement {
    constructor() {
        super(...arguments);
        this.guesses = [];
        this.guessCount = 0;
    }
    get validGuess() {
        var _a;
        return ((_a = this.guessValue) === null || _a === void 0 ? void 0 : _a.length) === 5;
    }
    firstUpdated() {
        this.initData();
    }
    async initData() {
        this.selectedWord = await getWord();
    }
    render() {
        var _a;
        return html `
      <div>${this.selectedWord}</div>
      <div>${this.guessCount}</div>
      <fieldset class="field__host">
        <input
          .value="${(_a = this.guessValue) !== null && _a !== void 0 ? _a : ''}"
          id="guess"
          placeholder="Guess..."
          class="field__input"
          onkeydown="return /[a-z]/i.test(event.key)"
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
        .word="${this.selectedWord}"
        .guesses="${this.guesses}"
        .guessCount="${this.guessCount}"
      ></game-grid>
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
        this.guesses = [...this.guesses, this.guessValue];
        this.guessCount += 1;
        this.guessValue = null;
    }
}
App.styles = style;
__decorate([
    state()
], App.prototype, "guesses", void 0);
__decorate([
    state()
], App.prototype, "selectedWord", void 0);
__decorate([
    state()
], App.prototype, "guessCount", void 0);
__decorate([
    state()
], App.prototype, "guessValue", void 0);
//# sourceMappingURL=app.js.map