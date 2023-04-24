import React, {useState} from 'react';
import {
  ButtonWrapper,
  CategoryName,
  CategoryWrapper,
  CurrentCategoryWrapper,
  ExpenseDescriptionWrapper,
  InputWrapper,
  VerticalDivider,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';
import {ValidationError} from 'yup';
import {InputDatePicker} from '../../../../../components/DatePicker';
import PrimaryButton from '../../../../../components/PrimaryButton';
import {IncomeCategory} from '../../../../../data/models/Income';
import {incomeCategoryToIcon} from '../../../../../utils/incomeTooIcon';
import {toTitleCase} from '../../../../../utils/titleCase';
import {strings} from '../../../../../values/strings';
import {CategoryComponent} from '../../../../../components/CategoryIcon';
import {useBudget} from '../../../hooks/useBudgets';
import {FinanceHeader} from '../../../../../components/FinanceHeader';
import FinanceProgress from '../../../../../components/FinanceProgress';
import {Input} from '../../../../../components/Input';
import {expenseCategoryToIcon} from '../../../../../utils/expensetoIcon';
import {ExpenseCategory} from '../../../../../data/models/Expense';

export const BudgetDescriptionStep: React.FC = () => {
  const {navigate} = useNavigation();

  const {
    updateStep,
    setTransactionAmount,
    setTransactionDate,
    previousStep,
    stepProgress,
    transactionExpenseCategory,
    transactionAmount,
    transactionDate,
    descriptionStepSchema,
  } = useBudget();
  const [chosenDate, setChosenDate] = useState(new Date());

  const handleChangeDate = (date: Date) => {
    console.log(date);
    setChosenDate(date);
    setTransactionDate(date);
  };

  const toast = useToast();

  const handleNextStep = async () => {
    try {
      const data = {
        transactionAmount,
        transactionDate,
      };
      await descriptionStepSchema.validate(data);
      updateStep();
      navigate('BudgetCongratulationStep');
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
    <ExpenseDescriptionWrapper>
      <FinanceHeader previousStep={previousStep} title="Add Budget" />

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
              {toTitleCase(transactionExpenseCategory)}
            </CategoryName>
          </CategoryWrapper>
        )}
      </CurrentCategoryWrapper>
      <InputWrapper>
        <Input
          onChangeText={value => setTransactionAmount(+value)}
          label={
            strings.transaction.expenseSteps.descriptionStep.inputAmount.label
          }
          placeholder={
            strings.transaction.expenseSteps.descriptionStep.inputAmount
              .placeholder
          }
          keyboardType="numeric"
        />
        <VerticalDivider />
        <InputDatePicker
          label={
            strings.transaction.expenseSteps.descriptionStep.inputDate.label
          }
          placeholder={
            strings.transaction.expenseSteps.descriptionStep.inputDate
              .placeholder
          }
          date={chosenDate}
          onDateChange={handleChangeDate}
          value={chosenDate}
        />
      </InputWrapper>

      <ButtonWrapper>
        <PrimaryButton
          testID="Expense.Step.Transaction"
          accessibilityLabel="button.continue"
          text={'Continue'}
          onPress={() => handleNextStep()}
        />
      </ButtonWrapper>
    </ExpenseDescriptionWrapper>
  );
};
