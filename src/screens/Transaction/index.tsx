import React from 'react';
import {PageWrapper} from '../../components/Screen/styles';
import {TransactionHeader} from '../../modules/Transaction/components/Header';
import {TransactionStepperHome} from '../../modules/Transaction/components/Stepper';
import {TransactionProvider} from '../../modules/Transaction/hooks/useTransaction';

export const TransactionScreen: React.FC = () => {
  return (
      <PageWrapper>
        <TransactionHeader />
        <TransactionStepperHome />
      </PageWrapper>
  );
};
