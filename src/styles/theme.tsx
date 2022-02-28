import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import GlobalStyles from './globals';
import FontStyles from './fonts';

const theme: DefaultTheme = {
  fonts: {
    main: 'Ideal Sans',
  },

  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
  },

  colors: {
    white: '#ffffff',
    rose: '#e76ece',
    black: '#000000',
  },

  breakpoints: {
    xs: 'screen and (min-width: 320px) and (max-width: 424px)',
    sm: 'screen and (min-width: 425px) and (max-width: 767px)',
    md: 'screen and (min-width: 768px) and (max-width: 1023px)',
    lg: 'screen and (min-width: 1024px)',
    xl: 'screen and (min-width: 1440px)',
  },

  fontWeights: {
    light: 300,
    regular: 400,
    bold: 600,
    heavy: 800,
  },
};

const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <FontStyles />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
