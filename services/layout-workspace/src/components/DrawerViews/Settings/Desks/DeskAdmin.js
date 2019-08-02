import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import DrawerHeading from '../../../DrawerHeading/DrawerHeading'
import { FTITraderSelect } from 'f@franklin-thor/fti'

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
  margin: {
    margin: theme.spacing(1),
  },
  switch: {
    display: 'flex',
    alignItems: 'space-between',
  },
  button: {
    margin: theme.spacing(1),
    width: '103px',
  },
  chipContainer: {
    width: '96%',
  },
  cardContainer: {
    maxWidth: '250px',
  },
}))

export default function DeskAdmin(props) {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    location: 'Fort Lauderdale',
    init: 'FLT',
    enable: 'true',
    adv: '',
    advName: '',
    autoEx: 'true',
    autoBroker: '',
    autoId: '',
    traderId: 'LT3',
    time: '0',
    limit: '0',
    excludeLimit: 'false',
    cwGroups: '',
    funds: '',
  })

  const traders = {
    0: '[CDA] Chistopher Darcy',
    1: '[DJB] Don Johnson',
    2: '[JKI] Jason Killian',
    3: '[BMA] Beth Mason',
    4: '[NRO] Nancy Robertson',
  }

  const [checked, setChecked] = React.useState([0])
  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const handleDelete = () => {
    alert('You clicked the delete icon.')
  }

  const textField = (id, label) => (
    <TextField
      id={id}
      label={label}
      className={classes.margin}
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
        parent="deskSettings"
        title="New Desk Setup"
        updateView={props.updateView}
        toggleDrawer={props.toggleDrawer}
      />
      <div className={classes.bar}>
        <Typography variant="caption">NEW DESK</Typography>
      </div>

      {/* This form contains the inputs and buttons for adding a new desk */}
      <form className={classes.form}>
        <FormGroup>
          {textField('location', 'DESK LOCATION')}
          {textField('init', 'NEW DESK INITIALS')}

          <div className={classes.switch}>
            <FormControlLabel
              value="enable"
              control={<Switch color="primary" />}
              label="Enable"
              labelPlacement="start"
            />
          </div>

          {textField('adv', '%ADV')}
          {textField('advName', 'ADV NAME')}

          <FormControl variant="outlined" className={classes.margin}>
            <InputLabel ref={inputLabel} htmlFor="autoEx" shrink="true">
              AUTO EXECUTE
            </InputLabel>
            <Select
              value={values.autoEx}
              onChange={handleChange('autoEx')}
              input={<OutlinedInput labelWidth={labelWidth} name="autoEx" id="autoEx" />}
            >
              <MenuItem value={'true'}>True</MenuItem>
              <MenuItem value={'false'}>False</MenuItem>
            </Select>
          </FormControl>

          {textField('autoBroker', 'AUTO PLACE BROKER/EMS')}
          {textField('autoId', 'AUTO PLACE COMP ID')}

          <FTITraderSelect label="INCLUDE TRADERS" traders={traders} />
          <FTITraderSelect label="INCLUDE LOW TOUCH MANAGERS" traders={traders} />
          <FTITraderSelect label="INCLUDE NO TOUCH MANAGERS" traders={traders} />

          <FormControl variant="outlined" className={classes.margin}>
            <InputLabel ref={inputLabel} htmlFor="traderId" shrink="true">
              ROUTE TO TRADER IDS
            </InputLabel>
            <Select
              value={values.traderId}
              onChange={handleChange('traderId')}
              input={<OutlinedInput labelWidth={labelWidth} name="traderId" id="traderId" />}
            >
              <MenuItem value={'LT3'}>LT3</MenuItem>
              <MenuItem value={'Something Else'}>Something Else</MenuItem>
            </Select>
          </FormControl>

          {textField('time', 'TIME IN FORCE')}
          {textField('limit', 'UPPER ORDER LIMIT')}

          <FormControl variant="outlined" className={classes.margin}>
            <InputLabel ref={inputLabel} htmlFor="excludeLimit" shrink="excludeLimit">
              EXCLUDE LIMIT ORDERS
            </InputLabel>
            <Select
              value={values.excludeLimit}
              onChange={handleChange('excludeLimit')}
              input={
                <OutlinedInput labelWidth={labelWidth} name="excludeLimit" id="excludeLimit" />
              }
            >
              <MenuItem value={'false'}>False</MenuItem>
              <MenuItem value={'true'}>True</MenuItem>
            </Select>
          </FormControl>

          {textField('cwGroups', 'CW GROUPS')}
          {textField('funds', 'FUNDS')}

          <div>
            <Fab variant="extended" className={classes.button}>
              Cancel
            </Fab>
            <Fab variant="extended" color="primary" className={classes.button}>
              Save
            </Fab>
          </div>
        </FormGroup>
      </form>
    </div>
  )
}
