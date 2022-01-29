import styled from 'styled-components';

export const SelectStyled = styled.div`
  width: 25%;
  max-width: 150px;
  min-width: 100px;
  position: relative;
  background: ${(props) => props.theme.colors.c1J};
  border-radius: 8px;

  & select {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 3px solid ${(props) => props.theme.colors.c1C};

    padding: 5px;
    border-radius: 8px;
  }

  & span {
    display: block;
    position: absolute;
    top: 5px;
    right: 23px;
  }
`;
