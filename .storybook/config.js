import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    theme: themes.dark
  }
});

addDecorator(
  withInfo({
    header: false,
    inline: true
  })
);

addDecorator(withKnobs);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
