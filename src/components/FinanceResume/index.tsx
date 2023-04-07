import React from 'react';
import {FinanceResumeWrapper} from './styles';
import {FinanceCard} from '../FinanceCard';
import {AmountType} from '../../models/Amount';

interface IFinanceResume {
  incomeAmount?: string;
  expenseAmountTabLabel?: string;
  transactionAction?: (value: AmountType) => void;
}

export const FinanceResume: React.FC<IFinanceResume> = ({
  incomeAmount,
  expenseAmountTabLabel,
  transactionAction,
}: IFinanceResume) => {
  return (
    <FinanceResumeWrapper>
      <FinanceCard
        amount={incomeAmount}
        onPress={() =>
          transactionAction ? transactionAction(AmountType.INCOME) : () => null
        }
        type="income"
      />
      <FinanceCard
        amount={expenseAmountTabLabel}
        onPress={() =>
          transactionAction ? transactionAction(AmountType.EXPENSE) : () => null
        }
        type="expense"
      />
    </FinanceResumeWrapper>
  );
};
