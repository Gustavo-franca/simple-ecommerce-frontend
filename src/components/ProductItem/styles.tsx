import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 45% 27% 28%;
  align-items: center;
  justify-items: center;

  min-width: 800px;
  width: 80%;
  height: 280px;

  background: ${(props) => props.theme.colors.c1H};
  border: 2px solid ${(props) => props.theme.colors.c1D};
  border-radius: 8px;
`;
export const ImgStyled = styled.img`
  width: 90%;
  height: 90%;
`;

export const TitleStyled = styled.h2``;
export const DescriptionStyled = styled.p``;

export const ButtonStyled = styled.button`
  width: 100%;
  height: 40px;

  background: ${(props) => props.theme.colors.c2A};
  border: 3px solid ${(props) => props.theme.colors.c2A};
  border-radius: 8px;

  font-family: ${(props) => props.theme.fontFamily.poppins};
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.c1J};
`;
