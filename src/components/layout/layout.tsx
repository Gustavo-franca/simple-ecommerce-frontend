import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/globalStyle';
import { ApplicationProvider } from '../../contexts/application';
import { Theme } from '../../styles/theme';
import { ApplicationContainer } from './styles';
import { CartModalProvider } from '../../contexts/cartmodal';
import { SearchBarProvider } from '../../contexts/searchBar';
import { CheckoutProvider } from '../../contexts/checkout';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <ApplicationProvider>
        <CartModalProvider>
          <CheckoutProvider>
            <SearchBarProvider>
              <GlobalStyle />
              <ApplicationContainer>{children}</ApplicationContainer>
            </SearchBarProvider>
          </CheckoutProvider>
        </CartModalProvider>
      </ApplicationProvider>
    </ThemeProvider>
  );
};
export default Layout;
