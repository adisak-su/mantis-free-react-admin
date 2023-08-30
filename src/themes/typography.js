// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

import { createTheme } from '@mui/material/styles';
const theme = createTheme();

const Typography = (fontFamily) => ({
  htmlFontSize: 16,
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: 1.21,
    [theme.breakpoints.up('md')]: {
      fontSize: '2.375rem'
    }
  },
  h2: {
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.27,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.875rem'
    }
  },
  h3: {
    fontWeight: 600,
    fontSize: '1.4rem',
    lineHeight: 1.33,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem'
    }
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.2rem',
    lineHeight: 1.4,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem'
    }
  },
  h5: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.5
  },
  h6: {
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.57
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66
  },
  body1: {
    fontSize: '0.875rem',
    lineHeight: 1.57
  },
  body2: {
    fontSize: '0.75rem',
    lineHeight: 1.66
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.57
  },
  subtitle2: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.66
  },
  overline: {
    lineHeight: 1.66
  },
  button: {
    textTransform: 'capitalize'
  }
});

export default Typography;
