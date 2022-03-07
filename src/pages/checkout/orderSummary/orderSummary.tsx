import React, { useMemo } from 'react';
import { SectionDescription, SectionTitle } from '../styles';
import {
  Header,
  OrderSummaryContainer,
  ProductSection,
  SubtotalSection,
  Total,
  TotalDescription,
  TotalLeft,
  TotalSection,
  TotalTitle
} from './styles';
import RemovableItem from '../../../components/RemovableItem';
import SummaryItem from './summaryItem';
import {
  useCheckoutDispatcher,
  useCheckoutState
} from '../../../contexts/checkout';

const OrderSummary = () => {
  const { checkoutProducts } = useCheckoutState();
  const dispatch = useCheckoutDispatcher();

  const subtotal = useMemo(
    () =>
      checkoutProducts.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
    [checkoutProducts]
  );

  const shippingPrice = useMemo(() => Math.random() * 100, [subtotal]);

  const total = useMemo(
    () => subtotal + shippingPrice,
    [subtotal, shippingPrice]
  );

  return (
    <OrderSummaryContainer>
      <Header>
        <SectionTitle>Resumo do Pedido</SectionTitle>
        <SectionDescription>
          Preço pode mudar dependendo dos valores de envio para cada estado.
        </SectionDescription>
      </Header>
      <ProductSection>
        {checkoutProducts.map((product) => (
          <RemovableItem
            key={product.id}
            product={product}
            onRemoveItem={() => {
              dispatch({
                type: 'REMOVE_PRODUCT',
                payload: {
                  id: product.id
                }
              });
            }}
            onChangeQuantity={({ newQuantity, id }) => {
              dispatch({
                type: 'CHANGE_QUANTITY_PRODUCT',
                payload: {
                  newQuantity,
                  id
                }
              });
            }}
          />
        ))}
      </ProductSection>
      <SubtotalSection>
        <SummaryItem title={'Subtotal'} total={subtotal} />
        <SummaryItem title={'Entrega'} total={shippingPrice} />
      </SubtotalSection>
      <TotalSection>
        <TotalLeft>
          <TotalTitle>Total do Pedido</TotalTitle>
          <TotalDescription> Entrega até xxx-xxx-xxx</TotalDescription>
        </TotalLeft>
        <Total>{total.toFixed(2)}</Total>
      </TotalSection>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
