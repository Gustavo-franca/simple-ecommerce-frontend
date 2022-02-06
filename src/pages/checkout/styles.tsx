import styled from 'styled-components';
import { StyledInput } from '../../components/searchBar/styles';
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
