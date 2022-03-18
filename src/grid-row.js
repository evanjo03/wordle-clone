import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getStatus } from './get-status.js';
import style from './grid-row-css.js';
let GridRow = class GridRow extends LitElement {
    render() {
        var _a, _b;
        if (this.empty) {
            return html `${Array.from(Array(5)).map(() => html `<grid-cell></grid-cell>`)}`;
        }
        return html `
      ${((_b = (_a = this.guess) === null || _a === void 0 ? void 0 : _a.split('')) !== null && _b !== void 0 ? _b : []).map((letter, index) => {
            const status = getStatus(letter, this.word, index);
            return html `<grid-cell
          .value="${letter}"
          .status="${status}"
        ></grid-cell>`;
        })}
    `;
    }
};
GridRow.styles = style;
__decorate([
    property({ type: String })
], GridRow.prototype, "guess", void 0);
__decorate([
    property({ type: String })
], GridRow.prototype, "word", void 0);
__decorate([
    property({ type: Boolean })
], GridRow.prototype, "empty", void 0);
GridRow = __decorate([
    customElement('grid-row')
], GridRow);
export { GridRow };
//# sourceMappingURL=grid-row.js.map