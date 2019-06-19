import React from 'react'
import {
  MuiInput,
  MuiOutlinedInput,
  MuiFilledInput,
  MuiInputLabel,
  MuiMenuItem,
  MuiFormHelperText,
  MuiFormControl,
  MuiSelect,
  makeStyles,
} from '@franklin-thor/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function SimpleSelect() {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  })

  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <form className={classes.root} autoComplete="off">
      <MuiFormControl className={classes.formControl}>
        <MuiInputLabel htmlFor="age-simple">Age</MuiInputLabel>
        <MuiSelect
          value={values.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MuiMenuItem value="">
            <em>None</em>
          </MuiMenuItem>
          <MuiMenuItem value={10}>Ten</MuiMenuItem>
          <MuiMenuItem value={20}>Twenty</MuiMenuItem>
          <MuiMenuItem value={30}>Thirty</MuiMenuItem>
        </MuiSelect>
      </MuiFormControl>
      <MuiFormControl className={classes.formControl}>
        <MuiInputLabel htmlFor="age-helper">Age</MuiInputLabel>
        <MuiSelect
          value={values.age}
          onChange={handleChange}
          input={<MuiInput name="age" id="age-helper" />}
        >
          <MuiMenuItem value="">
            <em>None</em>
          </MuiMenuItem>
          <MuiMenuItem value={10}>Ten</MuiMenuItem>
          <MuiMenuItem value={20}>Twenty</MuiMenuItem>
          <MuiMenuItem value={30}>Thirty</MuiMenuItem>
        </MuiSelect>
        <MuiFormHelperText>Some important helper text</MuiFormHelperText>
      </MuiFormControl>
      <MuiFormControl className={classes.formControl}>
        <MuiSelect
          value={values.age}
          onChange={handleChange}
          displayEmpty
          name="age"
          className={classes.selectEmpty}
        >
          <MuiMenuItem value="">
            <em>None</em>
          </MuiMenuItem>
          <MuiMenuItem value={10}>Ten</MuiMenuItem>
          <MuiMenuItem value={20}>Twenty</MuiMenuItem>
          <MuiMenuItem value={30}>Thirty</MuiMenuItem>
        </MuiSelect>
        <MuiFormHelperText>Without label</MuiFormHelperText>
      </MuiFormControl>
      <MuiFormControl className={classes.formControl}>
        <MuiInputLabel shrink htmlFor="age-label-placeholder">
          Age
        </MuiInputLabel>
        <MuiSelect
          value={values.age}
          onChange={handleChange}
          input={<MuiInput name="age" id="age-label-placeholder" />}
          displayEmpty
          name="age"
          className={classes.selectEmpty}
        >
          <MuiMenuItem value="">
            <em>None</em>
          </MuiMenuItem>
          <MuiMenuItem value={10}>Ten</MuiMenuItem>
          <MuiMenuItem value={20}>Twenty</MuiMenuItem>
          <MuiMenuItem value={30}>Thirty</MuiMenuItem>
        </MuiSelect>
        <MuiFormHelperText>Label + placeholder</MuiFormHelperText>
      </MuiFormControl>
      <MuiFormControl className={classes.formControl} disabled>
        <MuiInputLabel htmlFor="name-disabled">Name</MuiInputLabel>
        <MuiSelect
          value={values.name}
          onChange={handleChange}
          input={<MuiInput name="name" id="name-disabled" />}
        >
          <MuiMenuItem value="">
            <em>None</em>
          </MuiMenuItem>
          <MuiMenuItem value="hai">Hai</MuiMenuItem>
          <MuiMenuItem value="olivier">Olivier</MuiMenuItem>
          <MuiMenuItem value="kevin">Kevin</MuiMenuItem>
        </MuiSelect>
        <MuiFormHelperText>Disabled</MuiFormHelperText>
      </MuiFormControl>
      <MuiFormControl className={classes.formControl} error>
        <MuiInputLabel htmlFor="name-error">Name</MuiInputLabel>
        <MuiSelect
          value={values.name}
          onChange={handleChange}
          name="name"
          renderValue={value => `⚠️  - ${value}`}
          input={<MuiInput id="name-error" />}
        >
          <MuiMenuItem value="">
            <em>None</em>
          </MuiMenuItem>
          <MuiMenuItem value="hai">Hai</MuiMenuItem>
          <MuiMenuItem value="olivier">Olivier</MuiMenuItem>
          <MuiMenuItem value="kevin">Kevin</MuiMenuItem>
        </MuiSelect>
        <MuiFormHelperText>Error</MuiFormHelperText>
      </MuiFormControl>
      <MuiFormControl className={classes.formControl}>
        <MuiInputLabel htmlFor="name-readonly">Name</MuiInputLabel>
        <MuiSelect
          value={values.name}
          onChange={handleChange}
          input={<MuiInput name="name" id="name-readonly" readOnly />}
        >
          <MuiMenuItem value="">
            <em>None</em>
          </MuiMenuItem>
          <MuiMenuItem value="hai">Hai</MuiMenuItem>
          <MuiMenuItem value="olivier">Olivier</MuiMenuItem>
          <MuiMenuItem value="kevin">Kevin</MuiMenuItem>
        </MuiSelect>
        <MuiFormHelperText>Read only</MuiFormHelperText>
      </MuiFormControl>
      <MuiFormControl className={classes.formControl}>
        <MuiInputLabel htmlFor="age-auto-width">Age</MuiInputLabel>
        <MuiSelect
          value={values.age}
          onChange={handleChange}
          input={<MuiInput name="age" id="age-auto-width" />}
          autoWidth
        >
          <MuiMenuItem value="">
            <em>None</em>
          </MuiMenuItem>
          <MuiMenuItem value={10}>Ten</MuiMenuItem>
          <MuiMenuItem value={20}>Twenty</MuiMenuItem>
          <MuiMenuItem value={30}>Thirty</MuiMenuItem>
        </MuiSelect>
        <MuiFormHelperText>Auto width</MuiFormHelperText>
      </MuiFormControl>
      <MuiFormControl className={classes.formControl}>
        <MuiSelect
          value={values.age}
          onChange={handleChange}
          name="age"
          displayEmpty
          className={classes.selectEmpty}
        >
          <MuiMenuItem value="" disabled>
            Placeholder
          </MuiMenuItem>
          <MuiMenuItem value={10}>Ten</MuiMenuItem>
          <MuiMenuItem value={20}>Twenty</MuiMenuItem>
          <MuiMenuItem value={30}>Thirty</MuiMenuItem>
        </MuiSelect>
        <MuiFormHelperText>Placeholder</MuiFormHelperText>
      </MuiFormControl>
      <MuiFormControl required className={classes.formControl}>
        <MuiInputLabel htmlFor="age-required">Age</MuiInputLabel>
        <MuiSelect
          value={values.age}
          onChange={handleChange}
          name="age"
          inputProps={{
            id: 'age-required',
          }}
          className={classes.selectEmpty}
        >
          <MuiMenuItem value="">
            <em>None</em>
          </MuiMenuItem>
          <MuiMenuItem value={10}>Ten</MuiMenuItem>
          <MuiMenuItem value={20}>Twenty</MuiMenuItem>
          <MuiMenuItem value={30}>Thirty</MuiMenuItem>
        </MuiSelect>
        <MuiFormHelperText>Required</MuiFormHelperText>
      </MuiFormControl>
      <MuiFormControl variant="outlined" className={classes.formControl}>
        <MuiInputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Age
        </MuiInputLabel>
        <MuiSelect
          value={values.age}
          onChange={handleChange}
          input={<MuiOutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
        >
          <MuiMenuItem value="">
            <em>None</em>
          </MuiMenuItem>
          <MuiMenuItem value={10}>Ten</MuiMenuItem>
          <MuiMenuItem value={20}>Twenty</MuiMenuItem>
          <MuiMenuItem value={30}>Thirty</MuiMenuItem>
        </MuiSelect>
      </MuiFormControl>
      <MuiFormControl variant="filled" className={classes.formControl}>
        <MuiInputLabel htmlFor="filled-age-simple">Age</MuiInputLabel>
        <MuiSelect
          value={values.age}
          onChange={handleChange}
          input={<MuiFilledInput name="age" id="filled-age-simple" />}
        >
          <MuiMenuItem value="">
            <em>None</em>
          </MuiMenuItem>
          <MuiMenuItem value={10}>Ten</MuiMenuItem>
          <MuiMenuItem value={20}>Twenty</MuiMenuItem>
          <MuiMenuItem value={30}>Thirty</MuiMenuItem>
        </MuiSelect>
      </MuiFormControl>
    </form>
  )
}
