import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { HeaderComponent } from '../inventory-management/shared/header/header.component';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [CommonModule],
    }),
    withKnobs,
  ],
};

const Template: Story<HeaderComponent> = () => ({
    component: HeaderComponent,
    props: {
      color: 'primary',
      content: 'Visit Storybook',
      href: 'https://storybook.js.org/',
      target: '_blank',
    },
//     template: `
//       <app-header
//         [color]="color"
//         [href]="href"
//         [target]="target"
//       >
//         {{ content }}
//       </app-header>`,
  });
export const Base = Template.bind({});
