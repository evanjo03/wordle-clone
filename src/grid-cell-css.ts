import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    background: #fff;
    border: 1px solid var(--_cell-border-color);
    margin: 0.25rem;
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  :host([status='incorrect']) {
    border: none;
    background: var(--_incorrect-bg-color);
    color: #fff;
  }

  :host([status='correct']) {
    border: none;
    background: var(--_correct-bg-color);
    color: #fff;
  }

  :host([status='misplaced']) {
    border: none;
    background: var(--_misplaced-bg-color);
    color: #fff;
  }

  .cell-content {
    flex: 1;
    font-size: var(--_cell-font-size);
    text-align: center;
    text-transform: capitalize;
  }
`;
