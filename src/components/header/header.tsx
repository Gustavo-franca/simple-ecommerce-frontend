import React from 'react';
import { HeaderContainer } from './styles';
import Logo from '../logo';
import SearchBar from '../searchBar';
import CartBar from '../cartBar';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SearchBar />
      <CartBar />
    </HeaderContainer>
  );
};
export default Header;
