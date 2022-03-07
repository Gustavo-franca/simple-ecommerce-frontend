import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 140%;
  font-family: ${(props) => props.theme.fontFamily.poppins};
  text-align: center;
`;

export const Button = styled(Link)`
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
  cursor: pointer;

  text-decoration: none;
  padding: 10px;

  & > span {
    margin-right: 3px;
  }

  & > img {
    position: relative;
    bottom: 1px;
  }
`;
