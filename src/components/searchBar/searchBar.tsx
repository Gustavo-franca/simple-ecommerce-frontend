import React from 'react';
import { Container, StyledButton, StyledInput } from './styles';

const SearchBar = () => {
  return (
    <Container>
      <StyledInput placeholder={'Busque produtos ...'} />
      <StyledButton>
        <img src="/icons/searchIcon.svg" alt="search icon" />
      </StyledButton>
    </Container>
  );
};
export default SearchBar;
