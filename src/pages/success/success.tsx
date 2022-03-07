import React from 'react';
import Header from '../../components/header';
import { Button, Container, Title } from './styles';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>
          {
            ' Seu pedido de Compra foi efetuada com Sucesso! Logo você receberá mais informações sobre o processamento da sua compra! '
          }
        </Title>
        <Button to={'/'}> Continue Comprando!</Button>
      </Container>
    </>
  );
};

export default Success;
