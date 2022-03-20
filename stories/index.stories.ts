import { html, TemplateResult } from 'lit';
import '../define.js';

export default {
  title: 'WordleClone',
  component: 'wordle-clone',
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<void> = () => html` <wordle-clone> </wordle-clone> `;

export const Regular = Template.bind({});
