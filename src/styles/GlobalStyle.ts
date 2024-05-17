import { createGlobalStyle } from 'styled-components';
import 'animate.css/animate.min.css';

import AxiformaRegular from '/fonts/Axiforma/Kastelov - Axiforma Regular.otf';
import AxiformaLight from '/fonts/Axiforma/Kastelov - Axiforma Light.otf';

import MarvelLogo from '/fonts/MarvelRegular-Dj83.ttf';

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
    font-family: "MarvelRegular";
    src: url(${MarvelLogo}) format('TrueType');
  }

  :root {
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${({ theme }) => theme.colors.second};
    font-family: ${({ theme }) => theme.fonts.font_stack};
    color: ${({ theme }) => theme.colors.text};
  }
`;
