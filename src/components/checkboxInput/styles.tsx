import styled from 'styled-components';

export const StyledLabel = styled.label`
  width: 100%;
  min-width: 400px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 10px;
  padding-right: 10px;

  border: 2px solid ${(props) => props.theme.colors.c1D};
  border-radius: 8px;

  background: ${(props) => props.theme.colors.c1H};
  margin-bottom: 10px;

  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  font-style: ${(props) => props.theme.fontFamily.poppins};
`;

export const StyledInput = styled.input`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.colors.c1A};

  background: ${(props) => props.theme.colors.c1H};
`;

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PrimaryDescription = styled.span`
  font-size: 12px;
  font-style: ${(props) => props.theme.fontFamily.poppins};
  line-height: 18px;
`;
export const SecondaryDescription = styled.span`
  font-size: 12px;
  font-style: ${(props) => props.theme.fontFamily.poppins};
  line-height: 18px;
`;
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  min-width: 50px;
  margin-right: 10px;
  height: 48px;
`;

export const Img = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
`;
