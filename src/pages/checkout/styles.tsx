import styled from 'styled-components';
import { ButtonStyled } from '../../components/ProductItem/styles';

export const Container = styled.section`
  margin-top: 42px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
`;

export const ProductImgContainer = styled.section`
  width: 80%;
  height: 100%;
`;

export const ProductInformationContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export const ImgStyled = styled.img`
  max-width: 569px;
  max-height: 436px;
  width: 100vw;
  height: 76.6vw;
  image-rendering: high-quality;
  image-resolution: from-image;
`;

export const ImgContainer = styled.div`
  background: ${(props) => props.theme.colors.c1H};
  margin-bottom: 20px;
  padding: 2px;
`;

export const ProductTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 140%;
  font-family: ${(props) => props.theme.fontFamily.poppins};
`;

export const ProductDescription = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 23px;
`;

export const CheckoutBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background: ${(props) => props.theme.colors.c1H};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.c1D};
`;

export const Price = styled.p`
  width: 25%;
  font-family: Poppins, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  /* identical to box height */

  /* C2/A */

  color: #6a983c;

  &:after {
    content: ' R$';
  }
`;

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

export const CheckoutButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 40px;

  background: ${(props) => props.theme.colors.c2A};
  border: 3px solid ${(props) => props.theme.colors.c2A};
  border-radius: 8px;
  padding: 5px;

  font-family: ${(props) => props.theme.fontFamily.poppins};
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.c1J};

  & > span {
    margin-right: 3px;
  }

  & > img {
    position: relative;
    bottom: 1px;
  }
`;
