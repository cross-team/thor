import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import FTIBadge from '../../page/FTIPatterns/FTIBadge/FTIBadge'

storiesOf('FTIBadge', module).add('FTI Badge Buy', () => <FTIBadge type="buy" />)
storiesOf('FTIBadge', module).add('FTI Badge Sell', () => <FTIBadge type="sell" />)
