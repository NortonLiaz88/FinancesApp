import React from 'react';
import {Text} from 'react-native';
import {PageWrapper} from '../../../../../components/Screen/styles';
import {TransactionHeader} from '../../Header';
import {useTransaction} from '../../../hooks/useTransaction';
import TransactionProgress from '../../TransactionProgress';
import { StepperWrapper } from '../styles';
import { ExpenseWrapper } from './styles';

export const ExpenseCategoryStep = () => {
  const {handleSelectTransactionType, stepProgress} = useTransaction();

  return (
   <ExpenseWrapper>
      <TransactionHeader />
      <Text style={{color: 'tomato'}}>RAPAZ</Text>
      <TransactionProgress progress={stepProgress} />

    </ExpenseWrapper>
  );
};
