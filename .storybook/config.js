import { configure, addDecorator } from '@storybook/react';
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

configure(loadStories, module);
