import {
  CheckoutBar,
  CheckoutButton,
  Price,
  ProductDescription,
  ProductInformationContainer,
  ProductTitle
} from './styles';
import React, { useCallback, useState } from 'react';
import { Product } from '../../types';
import SelectAmount, { toOptions } from './SelectAmount';

interface ProductImgProps {
  product: Product;
}

const ProductInformation = ({ product }: ProductImgProps) => {
  const [quantitySelected, setQuantitySelected] = useState(0);
  const onChangeQuantity = useCallback(
    (opt) => setQuantitySelected(opt.value),
    [setQuantitySelected]
  );
  return (
    <ProductInformationContainer>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <CheckoutBar>
        <Price>{product.price}</Price>
        <SelectAmount
          onChange={onChangeQuantity}
          name="quantity"
          id="quantity"
          options={toOptions(product.stock)}
          selectedOption={quantitySelected}
        />
        <CheckoutButton>
          <span>+ </span> <img src="/icons/white-cart.svg" />
        </CheckoutButton>
        <CheckoutButton>Comprar Agora</CheckoutButton>
      </CheckoutBar>
    </ProductInformationContainer>
  );
};

export default ProductInformation;
