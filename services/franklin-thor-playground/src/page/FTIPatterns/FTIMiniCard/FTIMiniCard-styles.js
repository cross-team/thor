import { makeStyles } from '@franklin-thor/core/'

const useStyles = makeStyles(theme => ({
  cardContainer: props => ({
    backgroundColor: props.checked ? '#001133' : theme.palette['card-bg-color'],
    border: `1px solid`,
    borderColor: props.checked ? theme.palette.primary['500'] : theme.palette['card-border-color'],
    borderRadius: '8px',
    height: '37px',
    width: 'px',
    display: 'flex',
  }),
  content: {
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  identifier: {
    color: theme.palette.light['900'],
  },
  data: {
    color: theme.palette.light['900'],
    fontFamily: 'Roboto',
    fontSize: '8px',
    fontWeight: '500',
    lineHeight: '8px',
  },
  label: {
    color: '#B3B0AA',
    fontFamily: 'Roboto',
    fontSize: '8px',
    fontWeight: '500',
    lineHeight: '8px',
  },
  leftContent: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  leftText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: '6px',
    height: '100%',
  },
  rightContent: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
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
    height: '100%',
  },
  infoContainer: {
    flex: '1',
  },
  progressContainer: {
    position: 'relative',
    width: '110%',
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
}))

export default useStyles
