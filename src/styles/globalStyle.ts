import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html,h1,h3,h4,h5,h6{
    font-family : 'Roboto Slab',sans-serif; 
  }
  
  body {
    overflow-x: hidden; 
    background-color: ${(props) => props.theme.colors.c1J};
    height:100vh;
    width:100vw;
    margin: 0;
    padding: 0;
  }
  
  p{
    font-family : 'Raleway',sans-serif;
  }
`;

export default GlobalStyle;
