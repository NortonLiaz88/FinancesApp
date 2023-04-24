import React from 'react';
import {
  AmountText,
  BudgetCardWrapper,
  BudgetDate,
  BudgetIconWrapper,
  BudgetName,
  DescriptionWrapper,
  IdentificationWrapper,
} from './styles';
import {PrimaryIcon} from '../CategoryIcon/styles';
import {format} from 'date-fns';

interface Props {
  icon: string;
  name: string;
  date: string;
  amount: string;
}

export const 
BudgetCard: React.FC<Props> = ({icon, name, amount, date}) => {
  return (
    <BudgetCardWrapper>
      <DescriptionWrapper>
        <BudgetIconWrapper>
          <PrimaryIcon name={icon} />
        </BudgetIconWrapper>
        <IdentificationWrapper>
          <BudgetName>{name}</BudgetName>
          <BudgetDate>{format(new Date(date), 'dd/MM/yyyy')}</BudgetDate>
        </IdentificationWrapper>
      </DescriptionWrapper>
      <AmountText>${amount}</AmountText>
    </BudgetCardWrapper>
  );
};
