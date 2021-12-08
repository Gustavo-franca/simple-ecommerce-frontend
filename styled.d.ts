import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      c1A: string;
      c1J: string;
    };

    fontSize: {
      S1: string;
      S2: string;
      S3: string;
      S4: string;
      S5: string;
      S6: string;
      SP: string;
    };

    fontFamily: {
      raleway: string;
      roboto: string;
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
