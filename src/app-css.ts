import { css } from 'lit';

export default css`
  :host {
    display: block;
    padding: 25px;
    color: var(--wordle-clone-text-color, #000);
  }

  .grid {
    display: flex;
    flex-direction: column;
  }

  .field__host {
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border: none;
    margin: none;
  }

  .field__input {
    flex: 1;
    border: none;
    border-radius: none;
  }

  .field__input:focus-visible {
    outline: none;
  }

  .field__button {
    background: teal;
    border: none;
    padding: 0.25rem 1rem;
    color: white;
    opacity: 0.9;
    border-radius: 0.25rem;
  }

  .field__button:disabled {
    opacity: 0.6;
  }

  .field__button:hover:not(:disabled) {
    transition: 0.3ms opacity all;
    opacity: 1;
    cursor: pointer;
  }
`;
