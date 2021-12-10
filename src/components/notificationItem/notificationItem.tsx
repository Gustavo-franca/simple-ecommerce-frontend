import React from 'react';
import { NotificationStyled } from './styles';

const NotificationItem = ({ content }: { content: string }) => {
  return <NotificationStyled>{content}</NotificationStyled>;
};
export default NotificationItem;
