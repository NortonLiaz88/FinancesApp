import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import {
  ButtonWrapper,
  CongratsMessage,
  CongratsTitle,
  CongratulationWrapper,
  ContentWrapper,
  DetailSeparator,
  EditButtonWrapper,
  TransactionContentWrapper,
  TransactionDetailWrapper,
  TransactionName,
  TransactionTagWrapper,
  TransactionType,
  VerticalDivider,
} from './styles';

import {TransactionHeader} from '../../Header';
import TransactionProgress from '../../TransactionProgress';
import {useTransaction} from '../../../hooks/useTransaction';

import FinishTransactionLogo from '../../../../../assets/finish_transaction.svg';
import {strings} from '../../../../../values/strings';
import {toTitleCase} from '../../../../../utils/titleCase';
import {DotedLine} from '../../../../../components/DotedLine';
import OutlineButton from '../../../../../components/OutlineButton';
import PrimaryButton from '../../../../../components/PrimaryButton';

export const CongratulationStep = () => {
  const {
    finishTransaction,
    editTransaction,
    stepProgress,
    transactionType,
    transactionName,
    transactionDate,
    transactionAmount,
  } = useTransaction();


  const handleFinishTransaction = async () => {
    await finishTransaction();
  }

  const handleEdit = async () => {
    editTransaction()
    
  }

  const spacing = 16;
  const dashes = new Array(Math.floor(wp(100) / spacing)).fill(null);

  return (
    <CongratulationWrapper>
      <TransactionHeader />
      <VerticalDivider />
      <TransactionProgress progress={stepProgress} />
      <ContentWrapper>
        <FinishTransactionLogo width={wp(70)} height={hp(30)} />
        <VerticalDivider />
        <CongratsTitle>{strings.transaction.lastStep.title}</CongratsTitle>
        <VerticalDivider />
        <CongratsMessage>
          {strings.transaction.lastStep.message}
        </CongratsMessage>
      </ContentWrapper>

      <TransactionContentWrapper>
        <TransactionTagWrapper>
          <TransactionType>
            {transactionType === 'income' ? 'Income name' : 'Payee name'}
          </TransactionType>
          <TransactionName>{toTitleCase(transactionName)}</TransactionName>
        </TransactionTagWrapper>
        <VerticalDivider />
        <TransactionDetailWrapper>
          <TransactionTagWrapper>
            <TransactionType>Transaction type</TransactionType>
            <TransactionName>{toTitleCase(transactionType??  '')}</TransactionName>
          </TransactionTagWrapper>
          <DetailSeparator />
          <TransactionTagWrapper>
            <TransactionType>Date</TransactionType>
            <TransactionName>{transactionDate?.toDateString()}</TransactionName>
          </TransactionTagWrapper>
        </TransactionDetailWrapper>
        <VerticalDivider />
        <DotedLine dashes={dashes} spacing={spacing} />
        <VerticalDivider />
        <TransactionDetailWrapper>
          <TransactionTagWrapper>
            <TransactionType>Transaction amount</TransactionType>
            <TransactionName>${transactionAmount ?? ''}</TransactionName>
          </TransactionTagWrapper>
          <TransactionTagWrapper>
            <EditButtonWrapper>
              <OutlineButton
                testID="Transaction.Step.Congratulation"
                text={'Edit'}
                accessibilityLabel="button.edit"
                onPress={() => handleEdit()}
              />
            </EditButtonWrapper>
          </TransactionTagWrapper>
        </TransactionDetailWrapper>
      </TransactionContentWrapper>
      <VerticalDivider />
      <ButtonWrapper>
        <PrimaryButton
          testID="Transaction.Step.Congratulation"
          text={'Go to home '}
          accessibilityLabel="button.edit"
          onPress={() => handleFinishTransaction()}
        />
      </ButtonWrapper>
    </CongratulationWrapper>
  );
};
