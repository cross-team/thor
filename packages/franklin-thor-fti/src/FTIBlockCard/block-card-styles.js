import { makeStyles } from '@cross.team/core'

const useStyles = makeStyles(theme => ({
  paper: {
    border: 'solid 1px',
    borderColor: theme.palette['card-border-color'],
    backgroundColor: theme.palette['card-bg-color'],
    borderRadius: '12px !important', // using !important to override library styles
  },
  contentContainer: {
    padding: '4px',
    display: 'flex',
    overflow: 'hidden',
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '76px',
  },
  companyText: {
    display: 'block',
    color: '#9D9A95',
    maxWidth: '76px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '8px',
    lineHeight: '8px',
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
    marginLeft: '4px',
  },
  statusInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    minWidth: '80px',
  },
  fontAwesome: {
    height: '16px !important', // using !important to override library styles
    width: '16px !important', // using !important to override library styles
  },
  infoContainer: {
    flex: '1',
  },
  progressContainer: {
    position: 'relative',
    width: '84%',
  },
  divider: {
    borderTop: 'solid rgba(0,0,0,0.4) 1px',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: 'solid rgba(255,255,255,0.1) 1px',
    height: '0px',
    marginTop: '4px',
    marginBottom: '4px',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  progress: props => ({
    height: '2px',
    width: '100%',
    backgroundColor: props.progressType ? '#044132' : '#581A19',

    // Overrides default progress styling for MatUi, if upgrading check for breaking changes here!
    '& div:first-child': {
      backgroundColor: props.progressType ? '#11C197' : '#E05554',
    },
  }),
  avatar: props => ({
    position: 'absolute',
    top: '-3px',
    left: '-7px',
    width: '8px',
    height: '8px',
    fontSize: '6px',
    lineHeight: '8px',
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
  },
  lightFont: {
    color: '#fff',
  },
  orderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  identifier: {
    fontSize: '14px',
    lineHeight: '16px',
  },
  caption: {
    fontSize: '8px',
    lineHeight: '8px',
  },
  topMargin: {
    marginTop: '4px',
  },
}))

export default useStyles
