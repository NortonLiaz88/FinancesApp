import React from 'react';
import {TransactionHeader} from '../../Header';
import {useTransaction} from '../../../hooks/useTransaction';
import TransactionProgress from '../../TransactionProgress';
import {ExpenseWrapper, VerticalDivider} from './styles';
import {TransactionTypeComponent} from '../../TransactionType';
import {AmountType} from '../../../../../models/Amount';
import {Payee} from '../../Payee';
import {expenseCategoryToIcon} from '../../../../../utils/expensetoIcon';
import {ExpenseCategory} from '../../../../../models/Expense';

export const ExpenseCategoryStep = () => {
  const {handleSelectTransactionType, stepProgress} = useTransaction();

  return (
    <ExpenseWrapper>
      <TransactionHeader />
      <VerticalDivider />
      <TransactionProgress progress={stepProgress} />
      <TransactionTypeComponent type={AmountType.EXPENSE} />
      <Payee
        icon={expenseCategoryToIcon(ExpenseCategory.TRAVEL)}
        name={'Dubai Travel'}
        category={ExpenseCategory.TRAVEL}
      />
    </ExpenseWrapper>
  );
};
