import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './grid-css.js';
let GameGrid = class GameGrid extends LitElement {
    constructor() {
        super(...arguments);
        this.styles = style;
    }
    render() {
        return html `${this.renderGuesses()} ${this.renderEmptyRows()}`;
    }
    renderGuesses() {
        var _a;
        return html `${((_a = this.guesses) !== null && _a !== void 0 ? _a : []).map((guess) => html `<grid-row .guess="${guess}" .word="${this.word}"></grid-row>`)} `;
    }
    renderEmptyRows() {
        const emptyRows = this.guesses.length < 6 ? Array.from(Array(6 - this.guesses.length)) : [];
        return html `${emptyRows.map(() => html `<grid-row empty></grid-row>`)}`;
    }
};
__decorate([
    property({ type: Array })
], GameGrid.prototype, "guesses", void 0);
__decorate([
    property({ type: String })
], GameGrid.prototype, "word", void 0);
__decorate([
    property({ type: Number })
], GameGrid.prototype, "guessCount", void 0);
GameGrid = __decorate([
    customElement('game-grid')
], GameGrid);
export { GameGrid };
//# sourceMappingURL=grid.js.map