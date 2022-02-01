import React, { FC, useCallback, useState } from 'react';

import NotificationItem from '../notificationItem';
import CartModal from '../cartModal';
import { Action, Container } from './styles';
import {
  useCartModalDispatcher,
  useCartModalState
} from '../../contexts/cartmodal';

const CartBar: FC = () => {
  const dispatch = useCartModalDispatcher();
  const { products } = useCartModalState();

  const openModal = useCallback(() => {
    dispatch({
      type: 'OPEN_CART'
    });
  }, [dispatch]);

  return (
    <Container>
      <Action onClick={openModal}>
        <img src="/icons/cart.svg" />
        {String(products.length) && (
          <NotificationItem content={String(products.length)} />
        )}
      </Action>
      <CartModal />
    </Container>
  );
};
export default CartBar;
