import React from 'react'
import Typography from '@material-ui/core/Typography'
import CircularIndeterminate from './CircularIndeterminate'
import LinearIndeterminate from './LinearIndeterminate'

function Progress() {
  return (
    <>
      <Typography variant={'h4'}>Progress</Typography>
      <Typography variant={'h6'}>
        Progress indicators express an unspecified wait time or display the length of a process.
      </Typography>
      <CircularIndeterminate />
      <LinearIndeterminate />
    </>
  )
}

export default Progress
