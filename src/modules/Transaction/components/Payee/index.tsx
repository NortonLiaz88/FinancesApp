import React from 'react';
import {ExpenseCategory} from '../../../../models/Expense';
import {
  CategoryWrapper,
  Description,
  MessageWrapper,
  PayeeWrapper,
  PrimaryIcon,
  SecondaryIcon,
  Title,
} from './styles';

interface Props {
  icon: string;
  name: string
  category: ExpenseCategory;
}

export const Payee: React.FC<Props> = ({icon, name}: Props) => {
  const primaryIconExist = PrimaryIcon.hasIcon(icon);

  return (
    <PayeeWrapper>
      <CategoryWrapper>
        {primaryIconExist ? (
          <PrimaryIcon name={icon} />
        ) : (
          <SecondaryIcon name={icon} />
        )}
      </CategoryWrapper>
      <MessageWrapper>
        <Description>Payee</Description>
        <Title>{name}</Title>
    </MessageWrapper>
    </PayeeWrapper>
  );
};
