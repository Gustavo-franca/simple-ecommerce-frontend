import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/globalStyle';
import { ApplicationProvider } from '../../contexts/application';
import { Theme } from '../../styles/theme';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <ApplicationProvider >
        <GlobalStyle />
        {children}
      </ApplicationProvider>
    </ThemeProvider>
  );
};
export default Layout;
