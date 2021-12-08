import { DefaultTheme } from 'styled-components';

const Theme : DefaultTheme = {
  borderRadius: '5px',

  colors: {
    primary: '#000F6E',
    background: '#FCFCFC',
    textP: '#5F5F5F',
    textTitle: '#5F5F5F',
    navigationButton: '#C4C4C4',
    whatsapp: '#25D366'
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
  }
};

export { Theme };
