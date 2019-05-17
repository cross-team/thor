import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ContainedButtons from './ContainedButtons';
import TextButtons from './TextButtons';

const styles = theme => ({
  buttonsSection: {
    padding: theme.spacing.unit * 2,
  },
});

function Buttons(props) {
  const { classes } = props;

  console.log(JSON.stringify(classes.buttonsSection, null, 2));
  return (
    <div>
      <Typography variant={'h4'}>Buttons</Typography>
      <ContainedButtons className={classes.buttonsSection} />
      <TextButtons className={classes.buttonsSection} />
    </div>
  );
}

export default withStyles(styles)(Buttons);
