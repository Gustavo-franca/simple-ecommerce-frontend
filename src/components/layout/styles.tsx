import styled from 'styled-components';

export const ApplicationContainer = styled.main`
  display: flex;
  justify-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  max-width: ${(props) => props.theme.container.maxWidth};

  margin: 0 auto;

  background: ${(props) => props.theme.colors.c1J};
`;
