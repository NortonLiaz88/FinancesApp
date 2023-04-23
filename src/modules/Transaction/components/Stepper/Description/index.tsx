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
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { ValidationError } from 'yup';
import { InputDatePicker } from '../../../../../components/DatePicker';
import PrimaryButton from '../../../../../components/PrimaryButton';
import { ExpenseCategory } from '../../../../../data/models/Expense';
import { IncomeCategory } from '../../../../../data/models/Income';
import { AmountType } from '../../../../../data/models/Transaction';
import { expenseCategoryToIcon } from '../../../../../utils/expensetoIcon';
import { incomeCategoryToIcon } from '../../../../../utils/incomeTooIcon';
import { toTitleCase } from '../../../../../utils/titleCase';
import { strings } from '../../../../../values/strings';
import { useTransaction } from '../../../hooks/useTransaction';
import { CategoryComponent } from '../../ExpenseCategory';
import { TransactionHeader } from '../../Header';
import { Input } from '../../Input';
import TransactionProgress from '../../TransactionProgress';
import { TransactionTypeComponent } from '../../TransactionType';

export const DescriptionStep = () => {
  const {navigate} = useNavigation();

  const {
    updateStep,
    setTransactionAmount,
    setTransactionDate,
    stepProgress,
    transactionExpenseCategory,
    transactionAmount,
    transactionDate,
    transactionType,
    descriptionStepSchema,
  } = useTransaction();
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
      navigate('CongratulationStep');
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
