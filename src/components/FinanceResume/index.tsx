import React from 'react';
import {FinanceResumeWrapper} from './styles';
import {FinanceCard} from '../FinanceCard';

type FinanceResumeTypes = {
  incomeAmount: string;
  expenseAmountTabLabel: string;
};

export const FinanceResume: React.FC<FinanceResumeTypes> = ({
  incomeAmount,
  expenseAmountTabLabel,
}: FinanceResumeTypes) => {
  return (
    <FinanceResumeWrapper>
      <FinanceCard type="income" amount={incomeAmount} />
      <FinanceCard type="expense" amount={expenseAmountTabLabel}/>
    </FinanceResumeWrapper>
  );
};
