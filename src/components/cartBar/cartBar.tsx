import React, { FC, useCallback, useState } from 'react';

import NotificationItem from '../notificationItem';
import CartModal from '../cartModal';
import { Action, Container } from './styles';
import { useCartModalDispatcher } from '../../contexts/cartmodal';

const CartBar: FC = () => {
  const [notification, setNotification] = useState('1');
  const dispatch = useCartModalDispatcher();

  const openModal = useCallback(() => {
    dispatch({
      type: 'OPEN_CART'
    });
  }, [dispatch]);

  return (
    <Container>
      <Action onClick={openModal}>
        <img src="/icons/cart.svg" />
        {notification && <NotificationItem content={notification} />}
      </Action>
      <CartModal />
    </Container>
  );
};
export default CartBar;
