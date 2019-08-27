import { makeStyles } from '@cross.team/core'

const useStyles = makeStyles({
  paper: {
    border: 'solid #4e4e4e 1px',
    borderRadius: '14px !important',
  },
  contentContainer: {
    padding: '6px',
    display: 'flex',
  },
  brokerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  priceAndAvg: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: '6',
    marginRight: '10px',
  },
  statusInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: '2',
    width: '100%',
  },
  iconContainer: {
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  infoContainer: {
    flex: '1',
  },
  progressContainer: {
    position: 'relative',
    width: '80%',
  },
  topContainer: {
    display: 'flex',
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
  percentChange: {
    display: 'flex',
    alignItems: 'center',
  },
  progress: {
    height: '3.3px',
    backgroundColor: '#E05554',
  },
  avatar: {
    position: 'absolute',
    top: '-6px',
    left: '-15px',
    width: '15px',
    height: '15px',
    fontSize: '12px',
    fontWeight: 'bold',
    backgroundColor: '#E05554',
  },
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
  orderNumber: {
    color: 'grey',
  },
  orderText: {
    marginRight: '4px',
  },
})

export default useStyles
