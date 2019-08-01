import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import DrawerHeading from '../../../DrawerHeading/DrawerHeading'

const useStyles = makeStyles(theme => ({
  root: {
    width: '320px',
  },
  bar: {
    width: '100%',
    height: '24px',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  switch: {
    display: 'flex',
    alignItems: 'space-between',
  },
  button: {
    margin: theme.spacing(1),
    width: '103px',
  },
}))

export default function UserAdmin(props) {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    fname: '',
    lname: '',
    role: 'Trader',
    location: 'Fort Lauderdale',
    enable: 'true',
    hod: 'true',
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const textField = (id, label) => (
    <TextField
      id={id}
      label={label}
      className={classes.textField}
      value={values[id]}
      onChange={handleChange({ id })}
      margin="normal"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )

  return (
    <div className={classes.root}>
      {/* This div contains the heading of the drawers view */}
      <DrawerHeading
        isChild={true}
        parent="userSettings"
        title="New User Setup"
        updateView={props.updateView}
        toggleDrawer={props.toggleDrawer}
      />
      <div className={classes.bar}>
        <Typography variant="caption">NEW USER</Typography>
      </div>

      {/* This form contains the inputs and buttons for adding a new user */}
      <form className={classes.form}>
        {textField('fname', 'FIRST NAME')}
        {textField('lname', 'LAST NAME')}
        {textField('role', 'ROLE')}
        {textField('location', 'LOCATION')}

        <FormGroup>
          <FormControlLabel
            className={classes.switch}
            value="enable"
            control={<Switch color="primary" />}
            label="Enable"
            labelPlacement="start"
          />
          <FormControlLabel
            className={classes.switch}
            value="hod"
            control={<Switch color="primary" />}
            label="Include in HOD View"
            labelPlacement="start"
          />
        </FormGroup>
        <div>
          <Fab variant="extended" className={classes.button}>
            Cancel
          </Fab>
          <Fab variant="extended" color="primary" className={classes.button}>
            Save
          </Fab>
        </div>
      </form>
    </div>
  )
}
