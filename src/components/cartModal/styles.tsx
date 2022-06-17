import styled from 'styled-components';

export const Action = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
`;

export const ButtonStyled = styled.button`
  display: block;

  width: 100%;
  height: 40px;

  background: ${(props) => props.theme.colors.c2A};
  border: 3px solid ${(props) => props.theme.colors.c2A};
  border-radius: 8px;

  font-family: ${(props) => props.theme.fontFamily.poppins};
  font-weight: bold;
  text-decoration: none;
  font-size: 15px;
  color: ${(props) => props.theme.colors.c1J};
`;

export const ButtonPrimary = styled(ButtonStyled)`
  cursor: pointer;

  width: 100%;
  height: 40px;
`;

export const ButtonSecondary = styled(ButtonStyled)`
  cursor: pointer;
  width: 100%;

  background: ${(props) => props.theme.colors.c1J};
  border: 3px solid ${(props) => props.theme.colors.c1J};
  color: ${(props) => props.theme.colors.c1A};

  font-size: 12px;

  border-radius: 8px;
`;

export const Title = styled.h2``;

export const HeaderSection = styled.div`
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  align-items: center;

  margin-bottom: 10px;
`;

export const ProductSection = styled.div`
  flex: 1;
`;

export const SubTitle = styled.p`
  font-family: ${(props) => props.theme.fontFamily.poppins};

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

export const SubTotal = styled.p`
  font-family: ${(props) => props.theme.fontFamily.poppins};
  font-style: normal;
  font-weight: 600;
  font-size: 26px;

  margin: 0;
`;

export const SubtotalSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 10px;
  margin: 0 0 10px 0;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 20px;
`;

export const ContainerModal = styled.div`
  position: absolute;
  z-index: 20;
  top: 40px;
  right: 0px;
  min-width: 300px;
  width: 100vw;
  max-width: 400px;
  height: 90vh;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.c1J};
  border: 4px solid ${(props) => props.theme.colors.c1H};
  border-radius: 8px;
`;

export const Price = styled.p`
  font-family: ${(props) => props.theme.fontFamily.poppins};

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

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 150px;
  overflow: hidden;
  margin-bottom: 10px;
  padding: 0 10px 0 10px;
`;
export const ProductDescription = styled.p`
  overflow: hidden;
  font-family: ${(props) => props.theme.fontFamily.poppins};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  max-width: 100%;
  max-height: 40px;
`;
export const ProductTitle = styled.h2`
  overflow: hidden;
  font-family: ${(props) => props.theme.fontFamily.poppins};

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  max-width: 100%;
  max-height: 22px;
`;
export const ProductItemRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ProductItemBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 40px;
`;
export const ProductInfo = styled.div`
  flex: 1;
  padding: 10px;
  max-height: 40px;
`;
export const CloseModalStyled = styled(Action)`
  display: flex;
  align-items: center;

  img {
    height: 10px;
    width: 10px;
    margin-right: 1px;
  }

  span {
    font-family: ${(props) => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${(props) => props.theme.colors.c1C};
  }
`;

export const ProductImg = styled.img`
  background: ${(props) => props.theme.colors.c1H};
  width: 35%;
  max-height: 100px;

  border-radius: 16px;

  image-rendering: high-quality;
  image-resolution: from-image;
  object-fit: contain;
`;
