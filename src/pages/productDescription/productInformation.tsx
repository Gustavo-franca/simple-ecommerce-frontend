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
import SelectAmount, { toOptions } from '../../components/selectAmount';
import { useCartModalDispatcher } from '../../contexts/cartmodal';
import { addProductInCart } from '../../contexts/cartmodal/thunks';
import { useApplicationContext } from '../../contexts/application';

interface ProductImgProps {
  product: Product;
}

const ProductInformation = ({ product }: ProductImgProps) => {
  const [quantitySelected, setQuantitySelected] = useState(1);
  const dispatch = useCartModalDispatcher();
  const { config } = useApplicationContext();

  const onChangeQuantity = useCallback(
    (opt) => setQuantitySelected(opt.value),
    [setQuantitySelected]
  );

  const addToCart = useCallback(
    () =>
      dispatch(
        addProductInCart({ product, quantity: quantitySelected, config })
      ),
    [product.id, dispatch, quantitySelected]
  );

  return (
    <ProductInformationContainer>
      <ProductTitle>{product.title}</ProductTitle>
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
        <CheckoutButton onClick={addToCart}>
          <span>+ </span> <img src="/icons/white-cart.svg" />
        </CheckoutButton>
        <CheckoutButton>Comprar Agora</CheckoutButton>
      </CheckoutBar>
    </ProductInformationContainer>
  );
};

export default ProductInformation;
