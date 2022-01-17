import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    c1A: '#151515',
    c1C: '#A9A9A9',
    c1D: '#D1D1D1',
    c1H: '#F9F9F9',
    c1J: '#FFFFFF',
    c2A: '#6A983C',
    c2B: '#46760A'
  },
  fontSize: {
    body: '14px'
  },
  fontFamily: {
    raleway: "'Raleway',sans-serif",
    poppins: "'Poppins',sans-serif",
    roboto: "'Roboto Slab',sans-serif",
    openSans: "'Open Sans',sans-serif"
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
