import React, { FC } from 'react';
import { StyledSummaryItem, SummaryTitle, SummaryTotal } from './styles';

interface SummaryItemProps {
  title: string;
  total: number;
}
const SummaryItem: FC<SummaryItemProps> = ({ total, title }) => (
  <StyledSummaryItem>
    <SummaryTitle>{title}</SummaryTitle>
    <SummaryTotal>{total.toFixed(2)} R$</SummaryTotal>
  </StyledSummaryItem>
);
export default SummaryItem;
