import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { themes } from '@storybook/theming';
import '@storybook/addon-console';

function loadStories() {
  require('../src/stories/Button');
}

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

configure(loadStories, module);
