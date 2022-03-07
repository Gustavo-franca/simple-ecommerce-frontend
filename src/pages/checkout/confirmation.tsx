import React, { useCallback, useMemo } from 'react';
import { Options } from '../../components/checkboxgroup/types';
import {
  CheckoutButton,
  Section,
  SectionDescription,
  SectionTitle
} from './styles';
import CheckboxInput from '../../components/checkboxInput';
import { useNavigate } from 'react-router-dom';
import { finishCheckout } from '../../contexts/checkout/thunk';
import {
  useCheckoutDispatcher,
  useCheckoutState
} from '../../contexts/checkout';
import { useApplicationContext } from '../../contexts/application';

const Confirmation = () => {
  const navigate = useNavigate();
  const dispatch = useCheckoutDispatcher();
  const { config } = useApplicationContext();
  const { checkoutProducts } = useCheckoutState();

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

  const finish = useCallback(() => {
    dispatch(finishCheckout({ products: checkoutProducts, config }));
    navigate({ pathname: '/success' });
  }, [navigate, finishCheckout]);

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
          onChange={() => console.info('not implemented yet!')}
          value={value}
          primary={primary}
          id={value}
          type={'checkbox'}
        />
      ))}
      <CheckoutButton onClick={finish}>Finalizar Compra</CheckoutButton>
    </Section>
  );
};
export default Confirmation;
