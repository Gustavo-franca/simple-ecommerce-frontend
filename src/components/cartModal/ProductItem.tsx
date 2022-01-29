import React, { FC } from 'react';
import {
  Action,
  CloseModalStyled,
  Price,
  ProductDescription,
  ProductImg,
  ProductInfo,
  ProductItemBar,
  ProductItemContainer,
  ProductItemRow,
  ProductTitle
} from './styles';
import { Product } from '../../types';
import SelectAmount, { toOptions } from '../selectAmount';

interface ProductItemProps {
  product: Product;
}

const ProductItemModal: FC<ProductItemProps> = ({ product }) => {
  return (
    <ProductItemContainer>
      <ProductItemRow>
        <ProductImg src={product.imgUrl} />
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductInfo>
      </ProductItemRow>
      <ProductItemBar>
        <CloseModalStyled onClick={() => undefined}>
          <img src="/icons/close-cart-icon.svg" />
          <span> {'Remove'}</span>
        </CloseModalStyled>
        <Price>{product.price.toLocaleString('pt-br')}</Price>
        <SelectAmount
          onChange={() => undefined}
          name="quantity"
          id="quantity"
          options={toOptions(product.stock)}
          selectedOption={1}
        />
      </ProductItemBar>
    </ProductItemContainer>
  );
};

export default ProductItemModal;
