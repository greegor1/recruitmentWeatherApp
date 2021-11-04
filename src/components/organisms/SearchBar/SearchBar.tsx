import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';
import SearchBarForm from 'views/SearchBarForm/SearchBarForm';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <Title>Search</Title>
      </StatusInfo>
      <SearchBarForm />
    </SearchBarWrapper>
  );
};

export default SearchBar;
