import { storiesOf } from '@storybook/vue';
import { text, number, optionsKnob, select } from '@storybook/addon-knobs';

import SimpleCalculator from '../components/SimpleCalculator.vue';

storiesOf('SimpleCalculator', module).add('as default', () => ({
  components: { SimpleCalculator },
  template: '<simple-calculator v-bind="$props" />',
  props: {
    calculatedResultBackgroundColor: {
      type: String,
      default: () => select('Result Background Color', ['primary', 'orange', 'teal'], 'primary')
    }
  }
}));
