import React, { ChangeEvent, FC, ReactNode, useCallback } from 'react';
import {
  Container,
  Img,
  ImgContainer,
  PrimaryDescription,
  SecondaryDescription,
  StyledInput,
  StyledLabel
} from './styles';

interface InputProps {
  id: string;
  secondary?: string | ReactNode;
  onChange: (value: string) => void;
  primary: string;
  imgUrl?: string;
  value: string;
}

const CheckboxInput: FC<InputProps> = ({
  id,
  primary,
  secondary,
  imgUrl,
  onChange,
  value
}) => {
  const onInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.currentTarget.value);
    },
    [onChange]
  );
  console.log(imgUrl);
  return (
    <StyledLabel htmlFor={`${id}:${value}`}>
      <Container>
        <StyledInput
          type="radio"
          name={id}
          onChange={onInputChange}
          id={`${id}:${value}`}
          value={value}
        />
        <PrimaryDescription> {primary}</PrimaryDescription>
      </Container>

      <SecondaryDescription> {secondary}</SecondaryDescription>
      {imgUrl ? (
        <ImgContainer>
          <Img src={imgUrl} />
        </ImgContainer>
      ) : null}
    </StyledLabel>
  );
};
export default CheckboxInput;
