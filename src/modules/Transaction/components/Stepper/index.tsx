import React from 'react';
import {StepperWrapper} from './styles';
import { TransactionFirstStep } from '../FirstStep';
import { useTransaction } from '../../hooks/useTransaction';
import TransactionProgress from '../TransactionProgress';

export const TransactionStepperHome = () => {
  const {handleSelectTransactionType, stepProgress} = useTransaction();

  return (
    <StepperWrapper>
     <TransactionProgress progress={stepProgress} />
     <TransactionFirstStep onSelectTransactionType={handleSelectTransactionType}/>
    </StepperWrapper>
  );
};
