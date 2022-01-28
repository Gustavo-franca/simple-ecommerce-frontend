import React from 'react';
import { HeaderContainer } from './styles';
import Logo from '../logo';
import SearchBar from '../searchBar';
import CartBar from '../cartBar';

interface HeaderProps {
  requestProduct?: (value: string) => void;
}
const Header = ({ requestProduct }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Logo />
      <SearchBar requestProduct={requestProduct} />
      <CartBar />
    </HeaderContainer>
  );
};
export default Header;
