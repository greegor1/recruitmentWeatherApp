import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import WeatherProvider from 'providers/WeatherProvider';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Dashboard from './Dashboard';
import { Wrapper } from './Root.style';

const Root = () => (
  <ThemeProvider {...{ theme }}>
    <GlobalStyle />
    <WeatherProvider>
      <Wrapper>
        <Dashboard />
      </Wrapper>
    </WeatherProvider>
  </ThemeProvider>
);

export default Root;
