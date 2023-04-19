import React from 'react';
import {ExpenseCategory} from '../../../../models/Expense';
import {
  Description,
  MessageWrapper,
  PayeeWrapper,
  Title,
} from './styles';
import { CategoryComponent } from '../ExpenseCategory';

interface Props {
  icon: string;
  name: string
  category: ExpenseCategory;
}

export const Payee: React.FC<Props> = ({icon, name}: Props) => {
  return (
    <PayeeWrapper>
      <CategoryComponent icon={icon} />
      <MessageWrapper>
        <Description>Payee</Description>
        <Title>{name}</Title>
    </MessageWrapper>
    </PayeeWrapper>
  );
};
