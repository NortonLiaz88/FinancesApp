import React from 'react';
import {AmountType} from '../../../../models/Amount';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Description,
  MessageWrapper,
  Title,
  TransactionWrapper,
} from './styles';

interface Props {
  type: AmountType;
}

export const TransactionTypeComponent: React.FC<Props> = ({type}: Props) => {
  return (
    <TransactionWrapper>
      {type === 'income' ? <ArrowDownIcon/> : <ArrowUpIcon/>}
      <MessageWrapper>
        <Description>Transaction type</Description>
        <Title>{type === 'income' ? 'Income' : 'Expense'}</Title>
      </MessageWrapper>
    </TransactionWrapper>
  );
};
