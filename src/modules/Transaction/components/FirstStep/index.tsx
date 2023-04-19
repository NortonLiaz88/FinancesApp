import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import TransactionLogo from '../../../../assets/online_transactions.svg';

import {InitialStepWrapper, Message} from './styles';
import {strings} from '../../../../values/strings';
import {FinanceResume} from '../../../../components/FinanceResume';
import {AmountType} from '../../../../models/Transaction';

interface ITransactionFirstStep {
  onSelectTransactionType: (transactionType: AmountType) => void;
}

export const TransactionFirstStep: React.FC<ITransactionFirstStep> = ({
  onSelectTransactionType,
}: ITransactionFirstStep) => {
  return (
    <InitialStepWrapper>
      <TransactionLogo width={wp(70)} height={hp(30)} />
      <Message>{strings.transaction.firstStep.title}</Message>
      <FinanceResume transactionAction={onSelectTransactionType} />
    </InitialStepWrapper>
  );
};
