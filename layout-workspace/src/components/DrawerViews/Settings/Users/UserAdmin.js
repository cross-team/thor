import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/ClearRounded'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIosRounded'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const useStyles = makeStyles(theme => ({
  root: {
    width: '256px',
  },
  heading: {
    width: '256px',
    height: '120px',
    display: 'block',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-end',
    // flexFlow: 'row-reverse || wrap'
    position: 'relative',
  },
  headingText: {
    // alignSelf: 'flex-end',
    width: '100%',
    position: 'absolute',
    bottom: '0',
    // padding:
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
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

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <div className={classes.buttonContainer}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="List"
            onClick={props.updateView('userSettings')}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="List"
            onClick={props.toggleDrawer(false)}
          >
            <ClearIcon />
          </IconButton>
        </div>
        <Typography variant="h5" className={classes.headingText}>
          New Users Setup
        </Typography>
      </div>
      <div className={classes.bar}>
        <Typography variant="caption">NEW USER</Typography>
      </div>
      <form className={classes.form}>
        <TextField
          id="fname"
          label="FIRST NAME"
          className={classes.textField}
          value={values.fname}
          onChange={handleChange('fname')}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="lname"
          label="LAST NAME"
          className={classes.textField}
          value={values.lname}
          onChange={handleChange('lname')}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="role"
          label="ROLE"
          className={classes.textField}
          value={values.role}
          onChange={handleChange('role')}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="location"
          label="LOCATION"
          className={classes.textField}
          value={values.location}
          onChange={handleChange('location')}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
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
