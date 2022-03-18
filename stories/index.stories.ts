import { html, TemplateResult } from 'lit';
import '../define.js';

export default {
  title: 'WordleClone',
  component: 'wordle-clone',
  argTypes: {
    title: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  counter?: number;
  textColor?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  title = 'Hello world',
  textColor,
  slot,
}: ArgTypes) => html`
  <wordle-clone
    style="--wordle-clone-text-color: ${textColor || 'black'}"
    .title=${title}
  >
    ${slot}
  </wordle-clone>
`;

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});

export const CustomCounter = Template.bind({});

export const SlottedContent = Template.bind({});
