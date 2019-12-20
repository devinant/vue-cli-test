/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withVuetify } from './addon-vuetify';

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withVuetify);

const req = require.context('../../src/stories', true, /.stories.(j|t)s$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
