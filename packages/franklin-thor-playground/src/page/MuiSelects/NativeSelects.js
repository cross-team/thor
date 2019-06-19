import React from 'react'
import {
  MuiNativeSelect,
  MuiInputBase,
  MuiInputLabel,
  MuiMenuItem,
  MuiFormControl,
  MuiSelect,
  makeStyles,
  withStyles,
} from '@franklin-thor/core'

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(MuiInputBase)

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}))

export default function CustomizedSelects() {
  const classes = useStyles()
  const [age, setAge] = React.useState('')
  const handleChange = event => {
    setAge(event.target.value)
  }
  return (
    <form className={classes.root} autoComplete="off">
      <MuiFormControl className={classes.margin}>
        <MuiInputLabel htmlFor="age-customized-input">Age</MuiInputLabel>
        <BootstrapInput id="age-customized-input" />
      </MuiFormControl>
      <MuiFormControl className={classes.margin}>
        <MuiInputLabel htmlFor="age-customized-select">Age</MuiInputLabel>
        <MuiSelect
          value={age}
          onChange={handleChange}
          input={<BootstrapInput name="age" id="age-customized-select" />}
        >
          <MuiMenuItem value="">
            <em>None</em>
          </MuiMenuItem>
          <MuiMenuItem value={10}>Ten</MuiMenuItem>
          <MuiMenuItem value={20}>Twenty</MuiMenuItem>
          <MuiMenuItem value={30}>Thirty</MuiMenuItem>
        </MuiSelect>
      </MuiFormControl>
      <MuiFormControl className={classes.margin}>
        <MuiInputLabel htmlFor="age-customized-native-simple">Age</MuiInputLabel>
        <MuiNativeSelect
          value={age}
          onChange={handleChange}
          input={<BootstrapInput name="age" id="age-customized-native-simple" />}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </MuiNativeSelect>
      </MuiFormControl>
    </form>
  )
}
