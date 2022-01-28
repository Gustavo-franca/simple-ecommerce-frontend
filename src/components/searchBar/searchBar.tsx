import React, { useEffect, useState } from 'react';
import { Container, StyledButton, StyledInput } from './styles';
import ProductClient from '../../clients/product';

interface SearchBarProps {
  requestProduct?: (value: string) => void;
}
const SearchBar = ({ requestProduct }: SearchBarProps) => {
  const [searchString, setSearchString] = useState<string>('');
  return (
    <Container>
      <StyledInput
        placeholder={'Busque produtos ...'}
        onChange={(event) => {
          setSearchString(event.currentTarget.value);
        }}
        value={searchString}
      />
      <StyledButton onClick={() => requestProduct?.(searchString)}>
        <img src="/icons/searchIcon.svg" alt="search icon" />
      </StyledButton>
    </Container>
  );
};
export default SearchBar;
