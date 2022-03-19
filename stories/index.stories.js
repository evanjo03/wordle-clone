import { html } from 'lit';
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
const Template = ({ title = 'Hello world', textColor, slot, }) => html `
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
//# sourceMappingURL=index.stories.js.map