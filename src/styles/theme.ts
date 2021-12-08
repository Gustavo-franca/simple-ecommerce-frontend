import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    c1J: '#FFFFFF',
    c1A: '#151515'
  },
  fontSize: {
    S1: '9.4em',
    S2: '6.4em',
    S3: '4.8em',
    S4: '3.6em',
    S5: '2.4em',
    S6: '1.8em',
    SP: '1.4em'
  },
  fontFamily: {
    raleway: "'Raleway',sans-serif",
    roboto: "'Roboto Slab',sans-serif"
  },
  breakpoints: {
    xlg: 1200,
    lg: 992,
    md: 768,
    sm: 576
  },
  spacing: {
    size8: '8px'
  },
  container: {
    maxWidth: '1200px'
  }
};

export { Theme };
