import React from 'react';
import Header from '../../components/header';
import { Container, ContainerLeft } from './styles';
import BillingInfoForm from './billingInfoForm';
import OrderSummary from './orderSummary';
import BillingMethodForm from './billingMethodForm';
import PaymentMethod from './paymentMethod';
import Confirmation from './confirmation';

const Checkout = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerLeft>
          <BillingInfoForm />
          <BillingMethodForm />
          <PaymentMethod />
          <Confirmation />
        </ContainerLeft>
        <OrderSummary />
      </Container>
    </>
  );
};

export default Checkout;
