import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>setup</div>
    </ThemeProvider>
  );
};

export default Root;
