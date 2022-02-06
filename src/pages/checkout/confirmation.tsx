import React, { useMemo } from 'react';
import { Options } from '../../components/checkboxgroup/types';
import {
  CheckoutButton,
  Section,
  SectionDescription,
  SectionTitle,
  StyledCheckboxGroupForBillingMethod
} from './styles';
import CheckboxInput from '../../components/checkboxInput';

const Confirmation = () => {
  const confirmation: Options[] = useMemo(
    () => [
      {
        primary: 'Eu concordo em receber informações do meu pedido por email',
        value: 'email-confirmation'
      },
      {
        primary: 'Eu concordo com os termos de uso e privacidade',
        value: 'privacity-confirmation'
      }
    ],
    []
  );

  return (
    <Section width={60}>
      <SectionTitle>Confirmação</SectionTitle>
      <SectionDescription>
        Estamos chegando ao fim. Mais alguns clicks para a sua compra sem
        finalizada!
      </SectionDescription>
      {confirmation.map(({ primary, value }) => (
        <CheckboxInput
          key={value}
          onChange={console.log}
          value={value}
          primary={primary}
          id={value}
          type={'checkbox'}
        />
      ))}
      <CheckoutButton>Finalizar Compra</CheckoutButton>
    </Section>
  );
};
export default Confirmation;
