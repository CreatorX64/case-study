import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  /* We use a normalizer instead of a reset to preserve useful defaults */
  ${normalize}

  :root {
    --color-white: #FFF;
    --color-black: #000;

    --color-primary: #E82223;
    --color-accent: #0DAFC0;

    --color-gray-50: #FEFEFE;
    --color-gray-100: #FAFAFA;
    --color-gray-200: #F1F3F5;
    --color-gray-300: #E6E6E6;
    --color-gray-400: #CFCFCF;
    --color-gray-500: #BBC3CF;
    --color-gray-600: #77869E;
    --color-gray-700: #64738C;
    --color-gray-800: #4D4D4D;
    --color-gray-900: #121212;
  }

  *,
  *::before,
  *::after {
    /* normalize.css doesn't do this! */
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
    font-family: "Nunito Sans", sans-serif;
  }

  body {
    overflow-x: hidden;
    background-color: var(--color-gray-50);
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
  }

  h2 {
    font-size: 24px;
  }
`;

export const LayoutWrapper = styled.div`
  min-height: 100vh;

  & > main {
    padding: 48px 24px 88px;
  }
`;
