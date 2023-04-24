import React from 'react';
import {ValidationError} from 'yup';

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

import {CategoryComponent} from '../../../../../components/CategoryIcon';
import {strings} from '../../../../../values/strings';
import PrimaryButton from '../../../../../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';
import {toTitleCase} from '../../../../../utils/titleCase';
import {IncomeCategory} from '../../../../../data/models/Income';
import {incomeCategoryToIcon} from '../../../../../utils/incomeTooIcon';
import {useBudget} from '../../../hooks/useBudgets';
import {FinanceHeader} from '../../../../../components/FinanceHeader';
import FinanceProgress from '../../../../../components/FinanceProgress';
import {Input} from '../../../../../components/Input';
import {ExpenseCategory} from '../../../../../data/models/Expense';
import {expenseCategoryToIcon} from '../../../../../utils/expensetoIcon';

export const BudgetCategoryStep: React.FC = () => {
  const {navigate} = useNavigation();

  const {
    previousStep,
    updateStep,
    setTransactionCategory: setTransactionExpenseCategory,
    setTransactionName,
    transactionName,
    transactionExpenseCategory,
    stepProgress,
    categoryStepSchema,
  } = useBudget();

  const toast = useToast();

  const handleNextStep = async () => {
    try {
      const data = {
        transactionName,
        transactionCategory: transactionExpenseCategory,
      };
      await categoryStepSchema.validate(data);
      updateStep();
      navigate('DescriptionBudgetStep');
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
      <FinanceHeader previousStep={previousStep} />
      <VerticalDivider />
      <FinanceProgress progress={stepProgress} />
      <CurrentCategoryWrapper>
        {transactionExpenseCategory && (
          <CategoryWrapper>
            <CategoryComponent
              icon={expenseCategoryToIcon(
                transactionExpenseCategory as ExpenseCategory,
              )}
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
        </CategoriesContentWrapper>
      </CategoriesWrapper>
      <ButtonWrapper>
        <PrimaryButton
          testID="Budget.Step.Transaction"
          accessibilityLabel="button.continue"
          text={'Continue'}
          onPress={() => handleNextStep()}
        />
      </ButtonWrapper>
    </ExpenseWrapper>
  );
};
