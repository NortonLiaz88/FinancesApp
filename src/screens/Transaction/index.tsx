import React from 'react';
import {PageWrapper} from '../../components/Screen/styles';
import {TransactionHeader} from '../../modules/Transaction/components/Header';
import {TransactionStepperHome} from '../../modules/Transaction/components/Stepper/SelectTransactionStep';
import {useTransaction} from '../../modules/Transaction/hooks/useTransaction';

export const TransactionScreen: React.FC = () => {
  const {cancelTransaction} = useTransaction();

  return (
    <PageWrapper>
      <TransactionHeader backAction={() => cancelTransaction()} />
      <TransactionStepperHome />
    </PageWrapper>
  );
};
