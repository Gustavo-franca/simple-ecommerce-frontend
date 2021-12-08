import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/globalStyle';
import { ApplicationProvider } from '../../contexts/application';
import { Theme } from '../../styles/theme';
import config from '../../config';

interface LayoutProps {
  children: ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  const conf = await config();
  return (
    <ThemeProvider theme={Theme}>
      <ApplicationProvider value={{ config: conf }}>
        <GlobalStyle />
        {children}
      </ApplicationProvider>
    </ThemeProvider>
  );
};
export default Layout;
