import { css } from 'lit';
export default css `
  * {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin: 0.25rem;
    flex: 1;
    min-height: 2rem;
    min-width: 2rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.125rem;
  }

  :host([status='incorrect']) {
    background: red;
    color: white;
  }

  :host([status='correct']) {
    background: green;
    color: white;
  }
  :host([status='misplaced']) {
    background: yellow;
  }

  .cell-content {
    flex: 1;
    text-align: center;
    text-transform: capitalize;
  }
`;
//# sourceMappingURL=grid-cell-css.js.map