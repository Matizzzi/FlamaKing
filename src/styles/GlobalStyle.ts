import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    background-color: #121212;
    color: #f4f1ea;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    min-height: 100vh;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
