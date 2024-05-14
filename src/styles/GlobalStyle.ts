import { createGlobalStyle } from 'styled-components';

import AxiformaRegular from '../../src/assets/fonts/Axiforma/Kastelov - Axiforma Regular.otf';
import AxiformaLight from '../../src/assets/fonts/Axiforma/Kastelov - Axiforma Light.otf';

import AxiformaThin from '../../src/assets/fonts/Axiforma/Kastelov - Axiforma Thin.otf';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Axiforma Regular";
    src: url(${AxiformaRegular}) format('opentype');
  }

  @font-face {
    font-family: "Axiforma Light";
    src: url(${AxiformaLight}) format('opentype');
  }

  @font-face {
    font-family: "Axiforma Thin";
    src: url(${AxiformaThin}) format('opentype');
  }

  :root {
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #000000;
    font-family: "Axiforma Regular", sans-serif;
  }
`;
