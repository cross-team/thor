import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import Button from '@franklin-thor/core';

console.log('Aquiii!!!!!!!');
console.log(JSON.stringify(Button, null, 2));

const label = 'Variant';
const options = {
  Filled: 'filled',
  Outlined: 'outlined',
  Link: 'link',
};
const defaultValue = 'filled';
const groupId = 'Default';

storiesOf('Button', module)
  .add('with text', () => (
    <Button
      accent={text('Accent', 'primary', groupId)}
      disabled={boolean('Disabled', false, groupId)}
      variant={select(label, options, defaultValue, groupId)}
    >
      Hello Button
    </Button>
  ))
  .add('with emoji', () => (
    <Button accent="primary">
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
