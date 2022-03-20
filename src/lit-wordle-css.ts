import { css } from 'lit';

export default css`
  :host {
    --_guess-btn-bg-color: var(--guess-btn-bg-color, #6aaa64);
    --_correct-bg-color: var(--correct-bg-color, #6aaa64);
    --_incorrect-bg-color: var(--incorrect-bg-color, #787c7e);
    --_misplaced-bg-color: var(--misplaced-bg-color, #c9b458);

    --_cell-font-size: var(--cell-font-size, 1rem);
    --_cell-border-color: var(--cell-border-color, #d3d6da);
    --_guess-field-font-size: var(--guess-field-font-size, 1rem);

    --_font-color: var(--font-color, #787c7e);
    --_font-family: var(--font-family, Arial, Helvetica, sans-serif);

    color: var(--_font-color);
    display: block;
    height: 400px;
    min-height: 245px;
    min-width: 155px;
  }

  .container__host {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .field__host {
    display: flex;
    border: 0;
    margin: 0;
    padding: 0.5rem;
    min-inline-size: auto;
  }

  .field__input {
    color: var(--_font-color);
    flex: 1;
    font-size: var(--_guess-field-font-size);
    border: 1px solid var(--_cell-border-color);
    border-radius: none;
    padding: 0 0.5rem;
    min-width: 2rem;
    border-radius: 0.25rem 0 0 0.25rem;
  }

  .field__input:focus-visible {
    outline: none;
  }

  .field__button {
    background: var(--_guess-btn-bg-color);
    border: none;
    padding: 0.5rem 1rem;
    color: white;
    font-size: var(--_guess-field-font-size);
    opacity: 0.9;
    border-radius: 0 0.25rem 0.25rem 0;
  }

  .field__button:disabled {
    opacity: 0.6;
  }

  .field__button:hover:not(:disabled) {
    transition: 0.3ms opacity all;
    opacity: 1;
    cursor: pointer;
  }

  .grid__host {
    flex: 1;
  }

  .dialog__content {
    font-family: Arial, Helvetica, sans-serif;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dialog__span {
    padding: 0.5rem;
  }

  .dialog__buttonContainer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .dialog__button {
    background: #fff;
    border: none;
    padding: 0.25rem 1rem;
    color: #6aaa64;
    transition: color 100ms ease;
    max-width: 3rem;
    border-radius: 0.25rem;
  }

  .dialog__button:hover:not(:disabled) {
    color: black;
    transition: color 100ms ease;
    cursor: pointer;
  }
`;
