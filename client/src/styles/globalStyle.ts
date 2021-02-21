import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Variables */
  html {
    --color-primary: #51B6FE;
    --color-text-body: #39496a;
  }
  #root {
    height: 100vh;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
