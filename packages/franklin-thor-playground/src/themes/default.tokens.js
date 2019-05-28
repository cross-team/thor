import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';

const tokens = {
  themeName: 'Default Theme',
  typography: {
    useNextVariants: true,
  },
  shape: {
    borderRadius: 4,
  },
  palette: {
    primary: green,
    secondary: orange,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
};

export default tokens;
