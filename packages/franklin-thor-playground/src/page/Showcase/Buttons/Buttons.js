import React from 'react';
import PropTypes from 'prop-types';
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

  return (
    <div>
      <Typography variant={'h4'}>Buttons</Typography>
      <ContainedButtons className={classes.buttonsSection} />
      <TextButtons className={classes.buttonsSection} />
    </div>
  );
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buttons);
