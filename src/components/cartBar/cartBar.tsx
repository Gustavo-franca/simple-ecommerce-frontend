import React, { FC, useState } from 'react';
import { Action, Container } from './styles';
import NotificationItem from '../notificationItem';

const CartBar: FC = () => {
  const [notification, setNotification] = useState('1');
  const handleOnClick = () => console.log('Open Cart!', setNotification);

  return (
    <Container>
      <Action onClick={handleOnClick}>
        <img src="/icons/cart.svg" />
        {notification && <NotificationItem content={notification} />}
      </Action>
    </Container>
  );
};
export default CartBar;
