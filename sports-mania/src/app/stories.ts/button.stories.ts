import { storiesOf } from '@storybook/angular';
// import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';

import { ButtonComponent } from '../inventory-management/shared/button/button.component';
storiesOf('button', module)
  .add('with text and color', () => ({
    component: ButtonComponent,
    props: {
      text: 'Add Products',
      color: '#ffffff',
      disabled : false
    }
  }))

  .add('with action', () => ({
    component: ButtonComponent,
    props: {
      text: 'Add inventory',
      color: '#ffffff;',
      disabled : true,
      onClickTask: action('👊 Button was clicked')
    }
  }));
