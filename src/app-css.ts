import { css } from 'lit';

export default css`
  :host {
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
    flex: 1;
    border: none;
    border-radius: none;
    min-width: 2rem;
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

  .grid__host {
    flex: 1;
  }
`;
