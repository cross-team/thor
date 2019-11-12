import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import Button from '@cross.team/core/Button'
import defaultTheme from '../../themes/default'
import { ThemeProvider } from '@material-ui/styles'

const withTheme = story => <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>

storiesOf('Button', module)
  .addDecorator(withTheme)
  .add('with text', () => <Button> Hi Button</Button>)
  .add('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
