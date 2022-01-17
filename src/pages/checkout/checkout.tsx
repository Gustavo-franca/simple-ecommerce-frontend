import React from 'react';
import Header from '../../components/header';
import { Container } from './styles';
import BillingInfoForm from './billingInfoForm';
import OrderSummary from './orderSummary';
import BillingMethodForm from './billingMethodForm';
import PaymentMethod from './paymentMethod';
import AdditionalInformation from './additionalInformation';
import Confirmation from './confirmation';

const Checkout = () => {
  return (
    <>
      <Header />
      <Container>
        <BillingInfoForm />
        <OrderSummary />
        <BillingMethodForm />
        <PaymentMethod />
        <AdditionalInformation />
        <Confirmation />
      </Container>
    </>
  );
};

export default Checkout;
