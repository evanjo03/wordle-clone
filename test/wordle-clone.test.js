import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../define.js';
describe('WordleClone', () => {
    it('has a default title "Hey there" and counter 5', async () => {
        const el = await fixture(html `<wordle-clone></wordle-clone>`);
        expect(el.title).to.equal('Hey there');
    });
    it('can override the title via attribute', async () => {
        const el = await fixture(html `<wordle-clone title="attribute title"></wordle-clone>`);
        expect(el.title).to.equal('attribute title');
    });
    it('passes the a11y audit', async () => {
        const el = await fixture(html `<wordle-clone></wordle-clone>`);
        await expect(el).shadowDom.to.be.accessible();
    });
});
//# sourceMappingURL=wordle-clone.test.js.map