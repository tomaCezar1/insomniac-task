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
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
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
