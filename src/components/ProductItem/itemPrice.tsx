import React, { FC, SyntheticEvent } from 'react';
import { ButtonStyled, TitleStyled } from './styles';

interface ItemPriceProps {
  price: number;
  onClick: (event: SyntheticEvent) => void;
}

const ItemPrice: FC<ItemPriceProps> = ({ price, onClick }) => {
  return (
    <div>
      <TitleStyled>R$ {price.toLocaleString('pt-br')}</TitleStyled>
      <ButtonStyled onClick={onClick}>Detalhe do produto</ButtonStyled>
    </div>
  );
};

export default ItemPrice;
