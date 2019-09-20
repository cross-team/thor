import { makeStyles } from '@cross.team/core'

const useStyles = makeStyles(theme => ({
  paper: {
    border: 'solid 1px',
    borderColor: theme.palette['card-border-color'],
    backgroundColor: theme.palette['card-bg-color'],
    width: '236px',
    borderRadius: '12px !important', // using !important to override library styles
  },
  contentContainer: {
    padding: '4px',
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
    minWidth: '70px',
  },
  statusInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    minWidth: '80px',
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
    backgroundColor: props.progressType ? '#044132' : '#581A19',

    // Overrides default progress styling for MatUi, if upgrading check for breaking changes here!
    '& div:first-child': {
      backgroundColor: props.progressType ? '#11C197' : '#E05554',
    },
  }),
  avatar: props => ({
    position: 'absolute',
    top: '-6px',
    left: '-15px',
    width: '16px',
    height: '16px',
    fontSize: '12px',
    fontWeight: 'bold',
    backgroundColor: props.progressType ? '#11C197' : '#E05554',
  }),
  changeColor: props => ({
    color: props.progressType ? '#1A8F72' : '#A64444',
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
    whiteSpace: 'nowrap',
  },
  lightFont: {
    color: '#fff',
  },
  orderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
}))

export default useStyles
