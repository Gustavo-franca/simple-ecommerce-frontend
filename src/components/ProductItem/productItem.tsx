import React, { FC, useCallback } from 'react';
import { Container, ImgStyled } from './styles';
import { Product } from '../../types';
import ItemDescription from './itemDescription';
import ItemPrice from './itemPrice';

interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <Container>
      <ImgStyled src={product.imgUrl} />
      <ItemDescription
        description={product.description.substring(0, 100)}
        title={product.title}
      />
      <ItemPrice price={product.price} id={product.id} />
    </Container>
  );
};

export default ProductItem;
