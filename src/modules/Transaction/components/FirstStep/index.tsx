import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import TransactionLogo from '../../../../assets/online_transactions.svg';

import {InitialStepWrapper, Message} from './styles';
import { strings } from '../../../../values/strings';
import { FinanceResume } from '../../../../components/FinanceResume';

export const TransactionFirstStep = () => {
  return (
    <InitialStepWrapper>
      <TransactionLogo width={wp(70)}  height={hp(30)}/>
      <Message>{strings.transaction.firstStep.title}</Message>
      <FinanceResume/>
    </InitialStepWrapper>
  );
};