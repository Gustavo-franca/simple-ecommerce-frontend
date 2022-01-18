import React, { SyntheticEvent, useCallback } from 'react';
import { SelectStyled } from './styles';

interface ProductImgProps {
  id: string;
  name: string;
  options: Option[];
  selectedOption: number | string;
  onChange: (optionSelected: Option) => void;
}

export interface Option {
  value: string | number;
  label: string;
}

export const toOptions = (stock: number): Option[] => {
  const rangeArray = Array.from(Array(stock).keys());
  return rangeArray.map((_, index) => ({
    value: index + 1,
    label: String(index + 1)
  }));
};

const SelectAmount = ({
  options,
  selectedOption,
  name,
  id,
  onChange
}: ProductImgProps) => {
  const onSelect = useCallback(
    (event: SyntheticEvent<HTMLSelectElement>) => {
      onChange(
        options.find(
          ({ value }) => value == event.currentTarget.value
        ) as Option
      );
    },
    [options, onChange]
  );

  return (
    <SelectStyled>
      <select onChange={onSelect} value={selectedOption} name={name} id={id}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <span> | un</span>
    </SelectStyled>
  );
};

export default SelectAmount;
