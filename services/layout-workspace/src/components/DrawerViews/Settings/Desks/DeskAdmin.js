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
import TraderSelect from '../../../TraderSelect/TraderSelect'

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
          <TextField
            id="location"
            label="DESK LOCATION"
            className={classes.margin}
            value={values.location}
            onChange={handleChange('location')}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="init"
            label="NEW DESK INITIALS"
            className={classes.margin}
            value={values.init}
            onChange={handleChange('init')}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <div className={classes.switch}>
            <FormControlLabel
              value="enable"
              control={<Switch color="primary" />}
              label="Enable"
              labelPlacement="start"
            />
          </div>

          <TextField
            id="adv"
            label="%ADV"
            className={classes.margin}
            value={values.adv}
            onChange={handleChange('adv')}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="advName"
            label="ADV NAME"
            className={classes.margin}
            value={values.advName}
            onChange={handleChange('advName')}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

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

          <TextField
            id="autoBroker"
            label="AUTO PLACE BROKER/EMS"
            className={classes.margin}
            value={values.autoBroker}
            onChange={handleChange('autoBroker')}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="autoId"
            label="AUTO PLACE COMP ID"
            className={classes.margin}
            value={values.autoId}
            onChange={handleChange('autoId')}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TraderSelect />

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

          <TextField
            id="time"
            label="TIME IN FORCE"
            className={classes.margin}
            value={values.time}
            onChange={handleChange('time')}
            margin="normal"
            variant="outlined"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="limit"
            label="UPPER ORDER LIMIT"
            className={classes.margin}
            value={values.limit}
            onChange={handleChange('limit')}
            margin="normal"
            variant="outlined"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />

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

          <TextField
            id="cwGroups"
            label="CW GROUPS"
            className={classes.margin}
            value={values.cwGroups}
            onChange={handleChange('cwGroups')}
            margin="normal"
            variant="outlined"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="funds"
            label="FUNDS"
            className={classes.margin}
            value={values.funds}
            onChange={handleChange('funds')}
            margin="normal"
            variant="outlined"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />

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
