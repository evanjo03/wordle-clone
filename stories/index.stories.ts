import { html, TemplateResult } from 'lit';
import '../define.js';

export default {
  title: 'WordleClone',
  component: 'lit-wordle',
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<void> = () => html` <lit-wordle> </lit-wordle> `;

export const Regular = Template.bind({});
