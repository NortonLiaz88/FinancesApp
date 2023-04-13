import React from 'react';
import {TransactionHeader} from '../../Header';
import {useTransaction} from '../../../hooks/useTransaction';
import TransactionProgress from '../../TransactionProgress';
import {
  CategoriesContentWrapper,
  CategoriesDescription,
  CategoriesWrapper,
  CategoryName,
  CategoryWrapper,
  ExpenseWrapper,
  InputWrapper,
  VerticalDivider,
} from './styles';
import {TransactionTypeComponent} from '../../TransactionType';
import {AmountType} from '../../../../../models/Amount';
import {Payee} from '../../Payee';
import {expenseCategoryToIcon} from '../../../../../utils/expensetoIcon';
import {ExpenseCategory} from '../../../../../models/Expense';
import {Input} from '../../Input';
import {ExpenseCategoryComponent} from '../../ExpenseCategory';
import {strings} from '../../../../../values/strings';

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
      <InputWrapper>
        <Input
          label={strings.transaction.expenseSteps.addTransactionStep.inputLabel}
          placeholder={
            strings.transaction.expenseSteps.addTransactionStep.inputPlaceholder
          }
        />
      </InputWrapper>
      <CategoriesWrapper>
        <CategoriesDescription>
          {strings.transaction.expenseSteps.addTransactionStep.chooseCategory}
        </CategoriesDescription>
        <CategoriesContentWrapper>
          {Object.values(ExpenseCategory).map(ele => {
            return (
              <CategoryWrapper key={ele}>
                <ExpenseCategoryComponent icon={expenseCategoryToIcon(ele)} />
                <CategoryName>{ele}</CategoryName>
              </CategoryWrapper>
            );
          })}
        </CategoriesContentWrapper>
      </CategoriesWrapper>
    </ExpenseWrapper>
  );
};
