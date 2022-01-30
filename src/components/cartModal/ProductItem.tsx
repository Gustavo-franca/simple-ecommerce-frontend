import React, { FC, useCallback } from 'react';
import {
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
import SelectAmount, { toOptions } from '../selectAmount';
import { useCartModalDispatcher } from '../../contexts/cartmodal';
import { CartProduct } from '../../contexts/cartmodal/types';
import {
  changeQuantityProductInCart,
  removeProductInCart
} from '../../contexts/cartmodal/thunks';
import { Option } from '../selectAmount/SelectAmount';
import { useApplicationContext } from '../../contexts/application';

interface ProductItemProps {
  product: CartProduct;
}

const subTotal = (product: CartProduct) => product.price * product.quantity;

const ProductItemModal: FC<ProductItemProps> = ({ product }) => {
  const dispatch = useCartModalDispatcher();
  const { config } = useApplicationContext();

  const removeItem = useCallback(() => {
    dispatch(removeProductInCart({ id: product.id, config }));
  }, [dispatch]);

  const onChangeQuantity = useCallback(
    (ops: Option) => {
      dispatch(
        changeQuantityProductInCart({
          id: product.id,
          newQuantity: Number(ops.value),
          config
        })
      );
    },
    [dispatch]
  );

  return (
    <ProductItemContainer>
      <ProductItemRow>
        <ProductImg src={product.imgUrl} />
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>
            {product.description.substring(0, 70)}
          </ProductDescription>
        </ProductInfo>
      </ProductItemRow>
      <ProductItemBar>
        <CloseModalStyled onClick={removeItem}>
          <img src="/icons/close-cart-icon.svg" />
          <span> {'Remove'}</span>
        </CloseModalStyled>
        <Price>{subTotal(product).toLocaleString('pt-br')}</Price>
        <SelectAmount
          onChange={onChangeQuantity}
          name="quantity"
          id="quantity"
          options={toOptions(product.stock)}
          selectedOption={product.quantity}
        />
      </ProductItemBar>
    </ProductItemContainer>
  );
};

export default ProductItemModal;
