import styled from 'styled-components';

export const OrderSummaryContainer = styled.div`
  min-width: 300px;
  width: 100vw;
  max-width: 400px;
  height: 90vh;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.c1J};
  border: 4px solid ${(props) => props.theme.colors.c1H};
  border-radius: 8px;
  padding-right: 10px;
`;

export const Header = styled.div`
  padding: 20px;
`;

export const SummaryTitle = styled.p`
  font-family: ${(props) => props.theme.fontFamily.poppins};

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  margin: 0;
`;

export const SummaryTotal = styled.p`
  font-family: ${(props) => props.theme.fontFamily.poppins};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;

  margin: 0;
`;

export const StyledSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
`;

export const ProductSection = styled.div`
  flex: 1;
`;

export const SubtotalSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 10px;
`;

export const TotalSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
`;

export const TotalLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 10px;
  margin: 0 0 10px 0;
`;

export const TotalTitle = styled.h2`
  font-family: ${(props) => props.theme.fontFamily.poppins};

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  margin: 0;
`;

export const TotalDescription = styled.p`
  font-family: ${(props) => props.theme.fontFamily.poppins};
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  color: ${(props) => props.theme.colors.c2A};

  margin: 5px 0;
`;

export const Total = styled.p`
  font-family: Poppins, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  /* identical to box height */

  /* C2/A */

  color: #6a983c;

  &:after {
    content: ' R$';
  }
`;
