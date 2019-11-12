import React from 'react'
import { storiesOf } from '@storybook/react'
import Showcase from '../../page/Showcase'
// import DefaultTokens from 'themes/default.tokens';
// import { muiTheme } from 'storybook-addon-material-ui';

storiesOf('Showcase', module)
  // .addDecorator(muiTheme([DefaultTokens]))
  .add('theme', () => <Showcase />)
