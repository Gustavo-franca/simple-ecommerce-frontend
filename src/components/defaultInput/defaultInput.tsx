import React, { ChangeEvent, FC, useCallback, useEffect } from 'react';
import { Container, StyledInput, StyledLabel } from './styles';

interface InputProps {
  id: string;
  placeholder?: string;
  onChange: (value: string) => void;
  label: string;
}

const DefaultInput: FC<InputProps> = ({ id, placeholder, label, onChange }) => {
  const onInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.currentTarget.value);
    },
    [onChange]
  );
  return (
    <Container>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput onChange={onInputChange} id={id} placeholder={placeholder} />
    </Container>
  );
};
export default DefaultInput;
