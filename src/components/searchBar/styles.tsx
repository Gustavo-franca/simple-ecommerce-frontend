import styled from 'styled-components';

export const StyledButton = styled.button`
  max-width: 50px;
  width: 10%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.c1H};
  border: none;

  border-radius: 0 8px 8px 0;
`;

export const StyledInput = styled.input`
  height: 100%;
  width: 100%;

  padding-left: 15px;

  color: ${(props) => props.theme.colors.c1C};
  font-size: ${(props) => props.theme.fontSize.body};

  border: none;
  border-radius: 8px 0 0 8px;

  outline: ${(props) => props.theme.colors.c1J} solid 1px;

  background: ${(props) => props.theme.colors.c1H};
`;

export const Container = styled.div`
  max-width: 500px;
  width: 45vw;
  height: 30px;
  display: flex;

  align-items: center;

  background: ${(props) => props.theme.colors.c1H};
  border: 2px solid ${(props) => props.theme.colors.c1D};
  border-radius: 8px;
  font-weight: bolder;
`;
