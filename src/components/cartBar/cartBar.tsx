import React, { FC, useState } from 'react';

import NotificationItem from '../notificationItem';
import CartModal from '../cartModal';
import { Action, Container } from './styles';

const CartBar: FC = () => {
  const [notification, setNotification] = useState('1');
  const handleOnClick = () => console.log('Open Cart!', setNotification);

  return (
    <Container>
      <Action onClick={handleOnClick}>
        <img src="/icons/cart.svg" />
        {notification && <NotificationItem content={notification} />}
      </Action>
      <CartModal />
    </Container>
  );
};
export default CartBar;
