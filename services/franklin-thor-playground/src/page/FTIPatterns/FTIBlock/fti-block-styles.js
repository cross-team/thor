import { makeStyles } from '@cross.team/core'

const useStyles = makeStyles({
  paper: {
    border: 'solid #4e4e4e 0.5px',
    borderRadius: '8px !important',
  },
  contentContainer: {
    padding: '6px',
    display: 'flex',
  },
  brokerContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  infoContainer: {
    flex: '1',
  },
  divider: {
    borderTop: 'solid #2d2c2c 0.5px',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: 'solid #565656 0.5px',
    height: '1px',
  },
  currencyType: {
    marginRight: '4px',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  percentChange: {
    display: 'flex',
    alignItems: 'center',
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
