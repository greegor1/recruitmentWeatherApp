import { createGlobalStyle } from 'styled-components';
import React from 'react';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }

    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`;

export const GlobalStyleContent = () => (
  <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
    <GlobalStyle />
  </>
);
