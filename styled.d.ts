import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      c1H: string;
      c1A: string;
      c1C: string;
      c1D: string;
      c1J: string;
      c2A: string;
      c2B: string;
    };

    fontSize: {
      body: string;
    };

    fontFamily: {
      raleway: string;
      roboto: string;
      poppins: string;
      openSans: string;
    };

    breakpoints: {
      xlg: number;
      lg: number;
      md: number;
      sm: number;
    };

    spacing: {
      size8: string;
    };

    container: {
      maxWidth: string;
    };
  }
}
