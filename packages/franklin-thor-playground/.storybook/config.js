import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';

function loadStories() {
  require('stories/Button');
}

addDecorator(withKnobs);

configure(loadStories, module);
