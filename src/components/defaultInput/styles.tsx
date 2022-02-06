import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  font-style: ${(props) => props.theme.fontFamily.poppins};
`;

export const StyledInput = styled.input`
  height: 40px;
  width: 100%;

  padding-left: 15px;

  color: ${(props) => props.theme.colors.c1A};
  font-size: ${(props) => props.theme.fontSize.body};

  border: 2px solid ${(props) => props.theme.colors.c1D};
  border-radius: 8px;

  outline: ${(props) => props.theme.colors.c1D} solid 3px;

  background: ${(props) => props.theme.colors.c1H};
`;

export const Container = styled.div`
  width: 100%;
`;
