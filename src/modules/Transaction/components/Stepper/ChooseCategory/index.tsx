import React, {useEffect} from 'react';
import {ValidationError} from 'yup';

import {TransactionHeader} from '../../Header';
import {useTransaction} from '../../../hooks/useTransaction';
import TransactionProgress from '../../TransactionProgress';
import {
  ButtonWrapper,
  CategoriesContentWrapper,
  CategoriesDescription,
  CategoriesWrapper,
  CategoryName,
  CategoryWrapper,
  CurrentCategoryWrapper,
  ExpenseWrapper,
  InputWrapper,
  VerticalDivider,
} from './styles';
import {TransactionTypeComponent} from '../../TransactionType';
import {AmountType} from '../../../../../models/Transaction';
import {expenseCategoryToIcon} from '../../../../../utils/expensetoIcon';
import {ExpenseCategory} from '../../../../../models/Expense';
import {Input} from '../../Input';
import {CategoryComponent} from '../../ExpenseCategory';
import {strings} from '../../../../../values/strings';
import PrimaryButton from '../../../../../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';
import {toTitleCase} from '../../../../../utils/titleCase';
import {IncomeCategory} from '../../../../../models/Income';
import {incomeCategoryToIcon} from '../../../../../utils/incomeTooIcon';

export const CategoryStep = () => {
  const {navigate} = useNavigation();

  const {
    handleSelectTransactionType,
    updateStep,
    setTransactionCategory: setTransactionExpenseCategory,
    setTransactionName,
    transactionName,
    transactionExpenseCategory,
    transactionType,
    stepProgress,
    categoryStepSchema,
  } = useTransaction();

  const toast = useToast();

  const handleNextStep = async () => {
    try {
      const data = {
        transactionName,
        transactionCategory: transactionExpenseCategory,
      };
      await categoryStepSchema.validate(data);
      updateStep();
      navigate('DescriptionStep');
    } catch (error) {
      if (error instanceof ValidationError) {
        toast.show(`Opa, ${error.message}`, {
          type: 'danger',
          placement: 'bottom',
        });
        return;
      }
      toast.show('Não foi possível atualizar o perfil.', {
        type: 'danger',
        placement: 'bottom',
      });
    }
  };

  return (
    <ExpenseWrapper>
      <TransactionHeader />
      <VerticalDivider />
      <TransactionProgress progress={stepProgress} />
      <TransactionTypeComponent
        type={
          transactionType === 'income' ? AmountType.INCOME : AmountType.EXPENSE
        }
      />
      <CurrentCategoryWrapper>
        {transactionExpenseCategory && (
          <CategoryWrapper>
            <CategoryComponent
              icon={
                transactionType === 'income'
                  ? incomeCategoryToIcon(
                      transactionExpenseCategory as IncomeCategory,
                    )
                  : expenseCategoryToIcon(
                      transactionExpenseCategory as ExpenseCategory,
                    )
              }
            />

            <CategoryName>
              {toTitleCase(transactionExpenseCategory ?? '')}
            </CategoryName>
          </CategoryWrapper>
        )}
      </CurrentCategoryWrapper>

      <InputWrapper>
        <Input
          onChangeText={value => setTransactionName(value)}
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
          {transactionType === 'income' ? (
            <>
              {Object.values(IncomeCategory).map(ele => {
                return (
                  <CategoryWrapper key={ele}>
                    <CategoryComponent
                      icon={incomeCategoryToIcon(ele)}
                      onPress={() => setTransactionExpenseCategory(ele)}
                    />
                    <CategoryName>{toTitleCase(ele) ?? ''}</CategoryName>
                  </CategoryWrapper>
                );
              })}
            </>
          ) : (
            <>
              {Object.values(ExpenseCategory).map(ele => {
                return (
                  <CategoryWrapper key={ele}>
                    <CategoryComponent
                      icon={expenseCategoryToIcon(ele)}
                      onPress={() => setTransactionExpenseCategory(ele)}
                    />
                    <CategoryName>{toTitleCase(ele) ?? ''}</CategoryName>
                  </CategoryWrapper>
                );
              })}
            </>
          )}
        </CategoriesContentWrapper>
      </CategoriesWrapper>
      <ButtonWrapper>
        <PrimaryButton
          testID="Expense.Step.Transaction"
          accessibilityLabel="button.continue"
          text={'Continue'}
          onPress={() => handleNextStep()}
        />
      </ButtonWrapper>
    </ExpenseWrapper>
  );
};
