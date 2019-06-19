import React from 'react'
import {
  MuiCheckbox,
  MuiFormControl,
  MuiFormHelperText,
  MuiFormGroup,
  MuiFormControlLabel,
  MuiFormLabel,
  makeStyles,
} from '@franklin-thor/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}))

export default function CheckboxesGroup() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  const { gilad, jason, antoine } = state
  const error = [gilad, jason, antoine].filter(v => v).length !== 2

  return (
    <div className={classes.root}>
      <MuiFormControl component="fieldset" className={classes.formControl}>
        <MuiFormLabel component="legend">Assign responsibility</MuiFormLabel>
        <MuiFormGroup>
          <MuiFormControlLabel
            control={<MuiCheckbox checked={gilad} onChange={handleChange('gilad')} value="gilad" />}
            label="Gilad Gray"
          />
          <MuiFormControlLabel
            control={<MuiCheckbox checked={jason} onChange={handleChange('jason')} value="jason" />}
            label="Jason Killian"
          />
          <MuiFormControlLabel
            control={
              <MuiCheckbox checked={antoine} onChange={handleChange('antoine')} value="antoine" />
            }
            label="Antoine Llorca"
          />
        </MuiFormGroup>
        <MuiFormHelperText>Be careful</MuiFormHelperText>
      </MuiFormControl>
      <MuiFormControl required error={error} component="fieldset" className={classes.formControl}>
        <MuiFormLabel component="legend">Pick two</MuiFormLabel>
        <MuiFormGroup>
          <MuiFormControlLabel
            control={<MuiCheckbox checked={gilad} onChange={handleChange('gilad')} value="gilad" />}
            label="Gilad Gray"
          />
          <MuiFormControlLabel
            control={<MuiCheckbox checked={jason} onChange={handleChange('jason')} value="jason" />}
            label="Jason Killian"
          />
          <MuiFormControlLabel
            control={
              <MuiCheckbox checked={antoine} onChange={handleChange('antoine')} value="antoine" />
            }
            label="Antoine Llorca"
          />
        </MuiFormGroup>
        <MuiFormHelperText>You can display an error</MuiFormHelperText>
      </MuiFormControl>
    </div>
  )
}
