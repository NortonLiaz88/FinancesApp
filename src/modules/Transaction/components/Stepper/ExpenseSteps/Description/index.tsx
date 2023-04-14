import React, {useState} from 'react';
import {
  ButtonWrapper,
  ExpenseDescriptionWrapper,
  InputWrapper,
  VerticalDivider,
} from './styles';
import {TransactionHeader} from '../../../Header';
import TransactionProgress from '../../../TransactionProgress';
import {TransactionTypeComponent} from '../../../TransactionType';
import {useTransaction} from '../../../../hooks/useTransaction';
import {AmountType} from '../../../../../../models/Amount';
import {Input} from '../../../Input';
import {strings} from '../../../../../../values/strings';
import {InputDatePicker} from '../../../../../../components/DatePicker';
import PrimaryButton from '../../../../../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

export const ExpenseDescriptionStep = () => {
  const {navigate} = useNavigation();

  const {handleSelectTransactionType, stepProgress} = useTransaction();
  const [chosenDate, setChosenDate] = useState(new Date());

  const handleChangeDate = (date: Date) => {
    console.log(date);
    setChosenDate(date);
  };

  const handleNextStep = () => {
    navigate('CongratulationStep');
  };

  return (
    <ExpenseDescriptionWrapper>
      <TransactionHeader />
      <VerticalDivider />
      <TransactionProgress progress={stepProgress} />
      <TransactionTypeComponent type={AmountType.EXPENSE} />

      <InputWrapper>
        <Input
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
