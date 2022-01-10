import React, { FC } from 'react';
import { DescriptionStyled, TitleStyled } from './styles';

interface ItemDescriptionProps {
  title: string;
  description: string;
}

const ItemDescription: FC<ItemDescriptionProps> = ({ title, description }) => {
  return (
    <div>
      <TitleStyled>{title}</TitleStyled>
      <DescriptionStyled>{description}</DescriptionStyled>
    </div>
  );
};

export default ItemDescription;
