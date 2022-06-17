import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/globalStyle';
import { ApplicationProvider } from '../../contexts/application';
import { Theme } from '../../styles/theme';
import { ApplicationContainer } from './styles';
import { CartModalProvider } from '../../contexts/cartmodal';
import { SearchBarProvider } from '../../contexts/searchBar';
import { CheckoutProvider } from '../../contexts/checkout';
import TraceProvider from '../../contexts/tracer/tracer';

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
              <TraceProvider>
                <ApplicationContainer>{children}</ApplicationContainer>
              </TraceProvider>
            </SearchBarProvider>
          </CheckoutProvider>
        </CartModalProvider>
      </ApplicationProvider>
    </ThemeProvider>
  );
};
export default Layout;
