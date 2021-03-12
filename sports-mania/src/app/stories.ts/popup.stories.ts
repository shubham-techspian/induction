import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PopupComponent } from '../inventory-management/shared/popup/popup.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';

export default {
  title: 'Components/Popups',
  component: PopupComponent,
  decorators: [
    moduleMetadata({
      declarations: [PopupComponent],
      imports: [CommonModule],
    }),
    withKnobs,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
    popupTitle : {},
  },
}  as Meta;

const Template: Story<PopupComponent> = (args) => ({
    component: PopupComponent,
    props: args,
  });

export const Primary = Template.bind({});
Primary.args = {
    popupTitle : 'Delete Product ?',
    popupContent: text('Text', 'change the content in knobs'),
    showPopup: true,
    action: action('👊 Button was clicked')
}
Primary.parameters = {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
      ],
    },
  };

export const Secondary = Template.bind({})
Secondary.args = { ...Primary.args, showPopup: true };

// export const Tertiary = () => ({
//     component: PopupComponent,
//     props: {
//       label: '📚📕📈🤓',
//       background: '#ff0',
//     },
