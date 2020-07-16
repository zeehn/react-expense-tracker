import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#068a9c';
const arcOrange = '#0088AF';

export const theme = createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
});
