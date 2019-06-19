import React from 'react'
import {
  MuiCheckbox,
  MuiFormControl,
  MuiFormGroup,
  MuiFormControlLabel,
  MuiFormLabel,
} from '@franklin-thor/core'

function FormControlLabelPosition() {
  const [value, setValue] = React.useState('female')

  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <MuiFormControl component="fieldset">
      <MuiFormLabel component="legend">labelPlacement</MuiFormLabel>
      <MuiFormGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <MuiFormControlLabel
          value="top"
          control={<MuiCheckbox color="primary" />}
          label="Top"
          labelPlacement="top"
        />
        <MuiFormControlLabel
          value="start"
          control={<MuiCheckbox color="primary" />}
          label="Start"
          labelPlacement="start"
        />
        <MuiFormControlLabel
          value="bottom"
          control={<MuiCheckbox color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <MuiFormControlLabel
          value="end"
          control={<MuiCheckbox color="primary" />}
          label="End"
          labelPlacement="end"
        />
      </MuiFormGroup>
    </MuiFormControl>
  )
}

export default FormControlLabelPosition
