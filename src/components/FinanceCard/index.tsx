import React from 'react';
import {
  AmountText,
  ArrowDownIcon,
  ArrowUpIcon,
  CardWrapper,
  Title,
} from './styles';

type FinanceCardTypes = {
  type: 'income' | 'expense';
  amount?: string;
};

export const FinanceCard: React.FC<FinanceCardTypes> = ({
  type,
  amount,
}: FinanceCardTypes) => (
  <CardWrapper>
    {type === 'income' ? (
      <>
        <ArrowDownIcon />
        <Title>Income</Title>
       {amount && <AmountText>$676292</AmountText>} 
      </>
    ) : (
      <>
        <ArrowUpIcon />
        <Title>Expense</Title>
        {amount && <AmountText>$676292</AmountText>} 

      </>
    )}
  </CardWrapper>
);
