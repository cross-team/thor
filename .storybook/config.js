import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

function loadStories() {
  require('../src/stories');
}

addDecorator(
  withInfo({
    header: false,
    inline: true
  })
);

addDecorator(withKnobs);

configure(loadStories, module);
