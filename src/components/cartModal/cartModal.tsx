import React, { FC, useCallback, useEffect, useMemo } from 'react';
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
import {
  useCartModalDispatcher,
  useCartModalState
} from '../../contexts/cartmodal';
import { createCart } from '../../contexts/cartmodal/thunks';

const CartModal: FC = () => {
  const { config } = useApplicationContext();
  const { appName } = config;

  const { id, open, products } = useCartModalState();
  const dispatch = useCartModalDispatcher();

  useEffect(() => {
    if (!id) dispatch(createCart({ config }));
  }, [dispatch, id]);

  const closeModal = useCallback(() => {
    dispatch({
      type: 'CLOSE_CART'
    });
  }, [dispatch]);

  const subtotal = useMemo(
    () => products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
    [products]
  );

  return open ? (
    <ContainerModal>
      <HeaderSection>
        <Title>{appName}</Title>
        <Action onClick={closeModal}>
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
        <SubTotal>{subtotal.toFixed(2)} R$</SubTotal>
      </SubtotalSection>
      <ButtonSection>
        <ButtonSecondary onClick={closeModal}>
          {'Continuar Comprando'}
        </ButtonSecondary>
        <ButtonPrimary>{'Finalizar Compra'}</ButtonPrimary>
      </ButtonSection>
    </ContainerModal>
  ) : null;
};
export default CartModal;
