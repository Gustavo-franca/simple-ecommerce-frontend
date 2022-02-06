import React, { useMemo } from 'react';
import {
  Section,
  SectionDescription,
  SectionTitle,
  StyledCheckboxGroupForBillingMethod
} from './styles';
import CheckboxGroup from '../../components/checkboxgroup';
import { Options } from '../../components/checkboxgroup/types';

const BillingMethodForm = () => {
  const billingOptions: Options[] = useMemo(
    () => [
      {
        primary: 'FedEx',
        secondary: '+10 Additional price',
        imgUrl:
          'https://logosmarcas.net/wp-content/uploads/2020/04/FedEx-Logo.png',
        value: 'fedex'
      },
      {
        primary: 'DHL',
        value: 'dhl',
        secondary: '+45 Additional price',
        imgUrl:
          'https://logosmarcas.net/wp-content/uploads/2020/04/FedEx-Logo.png'
      }
    ],
    []
  );

  return (
    <Section width={60}>
      <SectionTitle>Método de Entrega</SectionTitle>
      <SectionDescription>
        Por favor, escolha um Método de Entrega
      </SectionDescription>
      <StyledCheckboxGroupForBillingMethod
        id={'billing-radio'}
        options={billingOptions}
        onChange={console.log}
      />
    </Section>
  );
};

export default BillingMethodForm;
