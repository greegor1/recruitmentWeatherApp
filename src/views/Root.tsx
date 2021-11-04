import { GlobalStyleContent } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import WeatherProvider from 'providers/WeatherProvider';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Dashboard from './Dashboard';
import { Wrapper } from './Root.style';

const Root = () => (
  <ThemeProvider {...{ theme }}>
    <GlobalStyleContent />
    <WeatherProvider>
      <MainTemplate>
        <Wrapper>
          <Dashboard />
        </Wrapper>
      </MainTemplate>
    </WeatherProvider>
  </ThemeProvider>
);

export default Root;
