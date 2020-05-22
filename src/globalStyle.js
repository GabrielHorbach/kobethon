import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  #root, html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-size: 16px;
    font-size: 1rem;
    font-family: Lato, sans-serif;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
