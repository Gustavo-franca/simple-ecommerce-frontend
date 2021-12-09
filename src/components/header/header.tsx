import React from 'react';
import { HeaderContainer } from './styles';
import Logo from '../logo';
import SearchBar from '../searchBar';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SearchBar />
      <div>icons</div>
    </HeaderContainer>
  );
};
export default Header;
