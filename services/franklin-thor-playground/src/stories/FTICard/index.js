import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import FTICard from '../../page/FTIPatterns/FTICard/FTICard'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'

theme.then(apiTheme =>
  storiesOf('FTICard', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI Card', () => (
      <FTICard
        actNum="01234-56789"
        type="buy"
        traderName="MSFT"
        progress="77"
        current="16,000"
        max="20,000"
        money="300,000"
        orderNum="17608"
        automated="true"
        group="H1H"
        location="WZM"
        trader="DL1"
        priceCurrent="101.82"
        priceChange="+4.15"
        percentChange="4.47%"
      />
    )),
)
