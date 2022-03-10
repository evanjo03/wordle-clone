import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { WordleClone } from '../lib/components/wordle-clone.js';
import '../lib/define.js';

describe('WordleClone', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<WordleClone>(html`<wordle-clone></wordle-clone>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<WordleClone>(html`<wordle-clone></wordle-clone>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<WordleClone>(
      html`<wordle-clone title="attribute title"></wordle-clone>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<WordleClone>(html`<wordle-clone></wordle-clone>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
