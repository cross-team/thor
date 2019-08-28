import { makeStyles } from '@cross.team/core'

const useStyles = makeStyles({
  paper: {
    border: 'solid #4e4e4e 1px',
    borderRadius: '14px !important', // using !important to override library styles
  },
  contentContainer: {
    padding: '6px',
    display: 'flex',
  },
  iconContainer: {
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  brokerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  orderDetails: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  priceAndAvg: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: '36px',
  },
  statusInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  fontAwesome: {
    height: '25px !important', // using !important to override library styles
    width: '25px !important', // using !important to override library styles
  },
  infoContainer: {
    flex: '1',
  },
  progressContainer: {
    position: 'relative',
    width: '110%',
  },
  divider: {
    borderTop: 'solid #2d2c2c 1px',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: 'solid #565656 1px',
    height: '1px',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  progress: props => ({
    height: '3.3px',
    backgroundColor: props.progressType ? '#581A19' : '#044132',

    // Overrides default progress styling for MatUi, if upgrading check for breaking changes here!
    '& div:first-child': {
      backgroundColor: props.progressType ? '#E05554' : '#11C197',
    },
  }),
  avatar: props => ({
    position: 'absolute',
    top: '-6px',
    left: '-15px',
    width: '15px',
    height: '15px',
    fontSize: '12px',
    fontWeight: 'bold',
    backgroundColor: props.progressType ? '#E05554' : '#11C197',
  }),
  changeColor: props => ({
    color: props.progressType ? '#A64444' : '#1A8F72',
  }),
  upArrow: {
    width: 0,
    height: 0,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid black',
    marginRight: '4px',
  },
  downArrow: {
    width: 0,
    height: 0,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderTop: '5px solid #f00',
    marginRight: '4px',
  },
  darkFont: {
    color: '#9D9A95',
  },
  lightFont: {
    color: '#ffffff',
  },
})

export default useStyles
