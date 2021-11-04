import Navigation from 'components/organisms/Navigation/Navigation';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import React, { FC } from 'react';
import { Wrapper } from './MainTemplate.style';

const MainTemplate: FC = ({ children }) => (
  <Wrapper>
    <Navigation />
    <SearchBar />
    {children}
  </Wrapper>
);

export default MainTemplate;
