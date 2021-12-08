import React from 'react';
import { LogoStyled } from './styles';
import { useApplicationContext } from '../../contexts/application';

const Logo = () => {
  const {
    config: { appName }
  } = useApplicationContext();

  return <LogoStyled>{appName}</LogoStyled>;
};
export default Logo;
