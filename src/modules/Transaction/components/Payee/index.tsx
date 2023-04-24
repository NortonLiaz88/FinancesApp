import React from 'react';
import {ExpenseCategory} from '../../../../data/models/Expense';
import {
  Description,
  MessageWrapper,
  PayeeWrapper,
  Title,
} from './styles';
import { CategoryComponent } from '../../../../components/CategoryIcon';

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
