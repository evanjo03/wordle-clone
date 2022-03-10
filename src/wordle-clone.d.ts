import { LitElement, PropertyValueMap } from 'lit';

export declare class WordleClone extends LitElement {
  static styles: import('lit').CSSResult;

  title: string;

  selectedWord: string;

  counter: number;

  private guessValue;

  get validGuess(): boolean;

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void;

  private initData;

  render(): import('lit-html').TemplateResult<1>;

  private handleGuessInput;

  private handleGuessClick;

  private handleGuessKeyup;

  private makeGuess;
}
