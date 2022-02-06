import styled from 'styled-components';
import CheckboxGroup from '../../components/checkboxgroup';

export const Container = styled.section`
  margin-top: 42px;
  display: grid;
  gap: 20px;
  align-items: center;
`;

export const ImgStyled = styled.img`
  max-width: 569px;
  max-height: 436px;
  width: 100vw;
  height: 76.6vw;
  image-rendering: high-quality;
  image-resolution: from-image;
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

export const Section = styled.section<{ width: number }>`
  width: ${(props) => `${props.width}%` || '60%'};
`;

export const SectionTitle = styled.h2`
  margin-bottom: 0;
`;

export const SectionDescription = styled.span`
  display: inline-block;
  margin-bottom: 20px;

  font-size: 12px;
  line-height: 16px;
  font-style: normal;
  font-weight: normal;
  font-style: ${(props) => props.theme.fontFamily.openSans};
`;

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    width: 40%;
  }

  gap: 20px;
`;

export const StyledCheckboxGroupForBillingMethod = styled(CheckboxGroup)`
  margin: 20px 0;
`;

export const CheckoutButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0;
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
  cursor: pointer;

  & > span {
    margin-right: 3px;
  }

  & > img {
    position: relative;
    bottom: 1px;
  }
`;
