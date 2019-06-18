import React from 'react';
import { storiesOf } from '@storybook/react';
// import { boolean, text, select } from '@storybook/addon-knobs';
import { MuiButton } from '@franklin-thor/core';

storiesOf('MuiButton', module).add('Simple Button', () => (
  <MuiButton color={'primary'}>Hello Button</MuiButton>
));
