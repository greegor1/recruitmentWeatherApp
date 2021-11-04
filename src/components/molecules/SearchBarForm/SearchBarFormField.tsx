import React, { ChangeEvent, FC } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import { Wrapper } from './SearchBarFormField.style';

interface ISearchBarFormFieldProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  name: string;
  id: string;
}

const SearchBarFormField: FC<ISearchBarFormFieldProps> = ({ label, id, ...rest }) => {
  const placeholder = label === 'City' ? 'e.g. Warsaw, London, etc...' : 'e.g. PL, GB, etc...';
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input placeholder={placeholder} type="text" {...{ id, ...rest }} />
    </Wrapper>
  );
};

export default SearchBarFormField;
