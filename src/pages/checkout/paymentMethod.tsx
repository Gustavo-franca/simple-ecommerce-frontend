import React, { useMemo } from 'react';
import { Options } from '../../components/checkboxgroup/types';
import {
  Section,
  SectionDescription,
  SectionTitle,
  StyledCheckboxGroupForBillingMethod
} from './styles';

const PaymentMethod = () => {
  const billingOptions: Options[] = useMemo(
    () => [
      {
        primary: 'Cartão de Crédito',
        imgUrl:
          'https://oinsider.com.br/wp-content/uploads/2020/07/visa-ou-mastercard.jpg',
        value: 'credit-card'
      },
      {
        primary: 'Biticoin',
        value: 'cripto-bitcoin',
        imgUrl: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1.png'
      },
      {
        primary: 'Playpal',
        value: 'playpal',
        imgUrl: 'https://www.andydev.co.uk/images/projects/playpal.png'
      }
    ],
    []
  );

  return (
    <Section width={50}>
      <SectionTitle>Método de Pagamento</SectionTitle>
      <SectionDescription>
        Por favor, escolha um Método de pagamento
      </SectionDescription>
      <StyledCheckboxGroupForBillingMethod
        id={'billing-radio'}
        options={billingOptions}
        onChange={console.log}
      />
    </Section>
  );
};

export default PaymentMethod;
