import { createGlobalStyle } from 'styled-components';

// import font from '../../src/assets/fonts/Axiforma';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

  }

  /* @font-face {
    font-family: "Axioforma";
    src: local(Axioforma), url('../../src/assets/fonts/Axiforma');
  } */

  :root {
    -webkit-font-smoothing: antialiased;
    //teste
    font-family: Arial, Helvetica, sans-serif;
  }
`;
