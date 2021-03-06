import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.main};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, button {
    margin: 0;
  }

  button {
    border: none;
  }

  a {
    text-decoration: none;
  }

  li{
    list-style: none;
  }  
`;

export default GlobalStyles;
