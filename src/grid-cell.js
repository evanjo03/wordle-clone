import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './grid-cell-css.js';
let GridCell = class GridCell extends LitElement {
    render() {
        return html `<div class="cell-content">${this.value}</div>`;
    }
};
GridCell.styles = style;
__decorate([
    property({ type: String })
], GridCell.prototype, "value", void 0);
__decorate([
    property({ type: String, reflect: true })
], GridCell.prototype, "status", void 0);
GridCell = __decorate([
    customElement('grid-cell')
], GridCell);
export { GridCell };
//# sourceMappingURL=grid-cell.js.map