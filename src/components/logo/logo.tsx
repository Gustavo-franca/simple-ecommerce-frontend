import React from 'react';
import { LogoStyled } from './styles';
import { useApplicationContext } from '../../contexts/application';
import { Link } from 'react-router-dom';

const Logo = () => {
  const {
    config: { appName }
  } = useApplicationContext();

  return (
    <Link to={{ pathname: '/' }}>
      <LogoStyled>{appName}</LogoStyled>
    </Link>
  );
};
export default Logo;
