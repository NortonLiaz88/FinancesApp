import React from 'react';
import {PageWrapper} from '../../components/Screen/styles';
import {TransactionHeader} from '../../modules/Transaction/components/Header';
import {TransactionStepperHome} from '../../modules/Transaction/components/Stepper';
import {SafeAreaView} from 'react-native-safe-area-context';

export const TransactionScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <PageWrapper>
        <TransactionHeader />
        <TransactionStepperHome />
      </PageWrapper>
    </SafeAreaView>
  );
};
