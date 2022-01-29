import React, { FC } from 'react';
import {
  ButtonSection,
  ContainerModal,
  HeaderSection,
  ProductSection,
  SubtotalSection,
  Title,
  Action,
  SubTitle,
  SubTotal,
  ButtonPrimary,
  ButtonSecondary
} from './styles';
import { useApplicationContext } from '../../contexts/application';
import ProductItem from './ProductItem';
import { Product } from '../../types';

const products: Product[] = [
  {
    id: 'asdasd',
    title: 'asdasdasdasd',
    description: 'asdsd',
    imgUrl: '/icons/rectangle.png',
    stock: 10,
    price: 150.25,
    shippingPrice: 10,
    rate: 10,
    previousPrice: 10,
    images: []
  },
  {
    id: 'asdadasd',
    title: 'adasdasd',
    description: 'asdadasd',
    imgUrl: '/icons/rectangle.png',
    stock: 10,
    price: 0,
    shippingPrice: 10,
    rate: 10,
    previousPrice: 10,
    images: []
  },
  {
    id: 'asdadasd',
    title: 'adasdasd',
    description: 'asdadasd',
    imgUrl: '/icons/rectangle.png',
    stock: 10,
    price: 0,
    shippingPrice: 10,
    rate: 10,
    previousPrice: 10,
    images: []
  },
  {
    id: 'asdadasd',
    title: 'adasdasd',
    description: 'asdadasd',
    imgUrl: '/icons/rectangle.png',
    stock: 10,
    price: 0,
    shippingPrice: 10,
    rate: 10,
    previousPrice: 10,
    images: []
  }
];

const CartModal: FC = () => {
  const {
    config: { appName }
  } = useApplicationContext();

  return (
    <ContainerModal>
      <HeaderSection>
        <Title>{appName}</Title>
        <Action onClick={() => undefined}>
          <img src="/icons/close-cart-icon.svg" />
        </Action>
      </HeaderSection>
      <ProductSection>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductSection>
      <SubtotalSection>
        <SubTitle>{'subtotal'}</SubTitle>
        <SubTotal>{'73.98'} R$</SubTotal>
      </SubtotalSection>
      <ButtonSection>
        <ButtonSecondary>{'Continuar Comprando'}</ButtonSecondary>
        <ButtonPrimary>{'Finalizar Compra'}</ButtonPrimary>
      </ButtonSection>
    </ContainerModal>
  );
};
export default CartModal;
