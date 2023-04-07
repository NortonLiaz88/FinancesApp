import React from 'react';
import {
  AmountText,
  ArrowDownIcon,
  ArrowUpIcon,
  CardWrapper,
  Title,
} from './styles';

interface IFinanceCard {
  type: 'income' | 'expense';
  amount?: string;
  onPress: () => void;
};

export const FinanceCard: React.FC<IFinanceCard> = ({
  type,
  amount,
  onPress,
}: IFinanceCard) => (
  <CardWrapper onPress={() => onPress()}>
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
