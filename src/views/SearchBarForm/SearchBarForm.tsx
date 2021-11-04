import React from 'react';
import { SearchButton } from 'components/atoms/SearchButton/SearchButton';
import SearchBarFormField from 'components/molecules/SearchBarForm/SearchBarFormField';
import { useForm } from 'hooks/useForm';
import { useWeatherContext } from 'providers/WeatherProvider';
import { Wrapper } from './SearchBarForm.styles';

enum FormFields {
  City = 'city',
  Country = 'country',
}

const SearchBarForm = () => {
  const { handleSearchForm } = useWeatherContext();
  const { formValue, handleInputChange, handleClearForm } = useForm();

  const handleSearchSubmit = () => handleSearchForm(formValue);

  return (
    <Wrapper>
      <SearchBarFormField label="City" id={FormFields.City} name={FormFields.City} value={formValue.city} onChange={handleInputChange} />
      <SearchBarFormField label="Country" id={FormFields.Country} name={FormFields.Country} value={formValue.country} onChange={handleInputChange} />
      <SearchButton onClick={handleSearchSubmit}>Search</SearchButton>
      <SearchButton onClick={handleClearForm}>Clear</SearchButton>
    </Wrapper>
  );
};

export default SearchBarForm;
