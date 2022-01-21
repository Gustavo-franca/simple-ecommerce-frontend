import React, { FC, SyntheticEvent } from 'react';
import { ButtonStyled, TitleStyled } from './styles';

interface ItemPriceProps {
  price: number;
  id: string;
}

const ItemPrice: FC<ItemPriceProps> = ({ price, id }) => {
  return (
    <div>
      <TitleStyled>R$ {price.toLocaleString('pt-br')}</TitleStyled>
      <ButtonStyled href={'/products/' + id}>Detalhe do produto</ButtonStyled>
    </div>
  );
};

export default ItemPrice;
