import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/ClearRounded'
import Checkbox from '@material-ui/icons/CheckBox'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIosRounded'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles(theme => ({
  root: {
    width: '256px',
  },
  heading: {
    width: '100%',
    height: '120px',
    display: 'block',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-end',
    // flexFlow: 'row-reverse || wrap'
    position: 'relative',
    backgroundColor: '#3377FF',
  },
  headingText: {
    // alignSelf: 'flex-end',
    position: 'absolute',
    bottom: '0',
    paddingBottom: '16px',
    paddingLeft: '16px',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  backArrow: {
    paddingLeft: '16px',
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
    //marginRight: theme.spacing(1),
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
    // backgroundColor: '#0D0D0C',
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
      <div className={classes.heading}>
        <div className={classes.buttonContainer}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="List"
            onClick={props.updateView('deskSettings')}
            className={classes.backArrow}
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
          New Desk Setup
        </Typography>
      </div>
      <div className={classes.bar}>
        <Typography variant="caption">NEW DESK</Typography>
      </div>
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

          {/*<Card className={`${classes.cardContainer}, ${classes.margin}`}>
            <CardContent>
              <div className={classes.chipContainer}>
                <Chip onDelete={handleDelete} avatar={<Avatar>FH</Avatar>} />
              </div>
              <List>
                {[0, 1, 2, 3].map(value => {
                  const labelId = `checkbox-list-label-${value}`

                  return (
                    <ListItem
                      key={value}
                      role={undefined}
                      dense
                      button
                      onClick={handleToggle(value)}
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(value) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                    </ListItem>
                  )
                })}
              </List>
            </CardContent>
              </Card>*/}

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
