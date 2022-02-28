import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      main: string;
    };

    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    colors: {
      white: string;
      rose: string;
      magenta: string;
      red: string;
      black: string;
      lightGrey: string;
      cyan: string;
      green: string;
    };

    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    fontWeights: {
      light: number;
      regular: number;
      bold: number;
      heavy: number;
    };
  }
}
