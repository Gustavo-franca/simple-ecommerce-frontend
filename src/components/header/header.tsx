import React from 'react';
import { HeaderContainer } from './styles';
import Logo from '../logo';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <div>SearchBar</div>
      <div>icons</div>
    </HeaderContainer>
  );
};
export default Header;
