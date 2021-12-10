import styled from 'styled-components';

export const NotificationStyled = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 15px;
  width: 15px;

  bottom: -13px;
  left: 0px;

  color: ${(props) => props.theme.colors.c1H};
  font-size: 11px;
  font-weight: bolder;
  border-radius: 500px;
  background: indianred;
`;
