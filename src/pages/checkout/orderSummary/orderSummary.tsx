import React, { useMemo } from 'react';
import { SectionDescription, SectionTitle } from '../styles';
import { useCartModalState } from '../../../contexts/cartmodal';
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

const OrderSummary = () => {
  const { products } = useCartModalState();

  const subtotal = useMemo(
    () => products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
    [products]
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
        {products.map((product) => (
          <RemovableItem
            key={product.id}
            product={product}
            onRemoveItem={() => undefined}
            onChangeQuantity={() => undefined}
          />
        ))}
      </ProductSection>
      <SubtotalSection>
        <SummaryItem title={'Subtotal'} total={subtotal} />
        <SummaryItem title={'Entrega'} total={subtotal} />
      </SubtotalSection>
      <TotalSection>
        <TotalLeft>
          <TotalTitle>Total do Pedido</TotalTitle>
          <TotalDescription> Entrega até xxx-xxx-xxx</TotalDescription>
        </TotalLeft>
        <Total>{subtotal.toFixed(2)}</Total>
      </TotalSection>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
