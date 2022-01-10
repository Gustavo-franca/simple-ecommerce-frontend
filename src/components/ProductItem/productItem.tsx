import React, { FC, useCallback } from 'react';
import { Container, ImgStyled } from './styles';
import { Product } from '../../types';
import ItemDescription from './itemDescription';
import ItemPrice from './itemPrice';

interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const onClickHandler = useCallback(() => '', []);
  return (
    <Container>
      <ImgStyled src={product.imgURL} />
      <ItemDescription description={product.description} title={product.name} />
      <ItemPrice price={product.price} onClick={onClickHandler} />
    </Container>
  );
};

export default ProductItem;
