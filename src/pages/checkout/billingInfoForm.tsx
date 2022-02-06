import React, { useMemo } from 'react';
import {
  SectionTitle,
  Section,
  SectionDescription,
  StyledInputGroup
} from './styles';
import DefaultInput from '../../components/defaultInput';

const BillingInfoForm = () => {
  const formInputs = useMemo(
    () => [
      {
        id: 'first-name-input',
        type: 'text',
        label: 'Primeiro Nome',
        placeholder: 'Primeiro Nome',
        onChange: console.log
      },
      {
        id: 'last-name-input',
        type: 'text',
        label: 'Sobrenome',
        placeholder: 'Sobrenome',
        onChange: console.log
      },
      {
        id: 'email-input',
        type: 'text',
        label: 'Email',
        placeholder: 'Email',
        onChange: console.log
      },

      {
        id: 'phone-number-input',
        type: 'text',
        label: 'Numero de Telefone/Celular',
        placeholder: 'Numero de Telefone/Celular',
        onChange: console.log
      },
      {
        id: 'address-input',
        type: 'text',
        label: 'Endereço',
        placeholder: 'Endereço',
        onChange: console.log
      },
      {
        id: 'city-input',
        type: 'text',
        label: 'Cidade',
        placeholder: 'Cidade',
        onChange: console.log
      },
      {
        id: 'state-input',
        type: 'text',
        label: 'Estado',
        placeholder: 'Estado',
        onChange: console.log
      },
      {
        id: 'cep-input',
        type: 'text',
        label: 'CEP',
        placeholder: 'CEP',
        onChange: console.log
      }
    ],
    []
  );

  return (
    <Section width={60}>
      <SectionTitle>Informações de Entrega</SectionTitle>
      <SectionDescription>
        Por favor adicione seus dados de entrega
      </SectionDescription>
      <StyledInputGroup>
        {formInputs.map(({ id, onChange, placeholder, label }) => (
          <DefaultInput
            key={id}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            label={label}
          />
        ))}
      </StyledInputGroup>
    </Section>
  );
};

export default BillingInfoForm;
