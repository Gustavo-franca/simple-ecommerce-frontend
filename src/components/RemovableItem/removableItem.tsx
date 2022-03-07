import React, { ChangeEvent, FC, ReactNode, useCallback } from 'react';
import {
  Container,
  Img,
  ImgContainer,
  PrimaryDescription,
  SecondaryDescription,
  StyledInput,
  StyledLabel
} from './styles';
import { CartProduct } from '../../contexts/cartmodal/types';
import { useCartModalDispatcher } from '../../contexts/cartmodal';
import { useApplicationContext } from '../../contexts/application';
import {
  changeQuantityProductInCart,
  removeProductInCart
} from '../../contexts/cartmodal/thunks';
import SelectAmount, { Option, toOptions } from '../selectAmount/SelectAmount';
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
} from '../cartModal/styles';

interface InputProps {
  id: string;
  type?: 'radio' | 'checkbox';
  secondary?: string | ReactNode;
  onChange: (value: string) => void;
  primary: string;
  imgUrl?: string;
  value: string;
}

interface ProductItemProps {
  product: CartProduct;
  onChangeQuantity: (props: { id: string; newQuantity: number }) => void;
  onRemoveItem: (props: { id: string }) => void;
}

const subTotal = (product: CartProduct) => product.price * product.quantity;

const RemovableItem: FC<ProductItemProps> = ({
  product,
  onRemoveItem,
  onChangeQuantity
}) => {
  const removeItem = useCallback(() => {
    onRemoveItem({ id: product.id });
  }, [onRemoveItem]);

  const onQuantity = useCallback(
    (ops: Option) => {
      onChangeQuantity({ id: product.id, newQuantity: Number(ops.value) });
    },
    [onChangeQuantity]
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
          onChange={onQuantity}
          name="quantity-checkout"
          id="quantity-checkout"
          options={toOptions(product.stock)}
          selectedOption={product.quantity}
        />
      </ProductItemBar>
    </ProductItemContainer>
  );
};
export default RemovableItem;
