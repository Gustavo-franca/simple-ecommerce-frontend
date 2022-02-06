import React, { FC } from 'react';
import { Container } from './styles';
import CheckboxInput from '../checkboxInput';
import { Options } from './types';

interface CheckboxGroupProps {
  id: string;
  options: Options[];
  className?: string;
  onChange: (values: string) => void;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  id,
  className,
  options,
  onChange
}) => {
  return (
    <Container className={className}>
      {options.map(({ primary, secondary, imgUrl, value }) => (
        <CheckboxInput
          id={id}
          key={`${id}:${value}`}
          onChange={onChange}
          primary={primary}
          secondary={secondary}
          imgUrl={imgUrl}
          value={value}
        />
      ))}
    </Container>
  );
};
export default CheckboxGroup;
