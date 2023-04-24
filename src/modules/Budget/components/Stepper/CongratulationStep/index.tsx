import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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

import FinishTransactionLogo from '../../../../../assets/finish_transaction.svg';
import {strings} from '../../../../../values/strings';
import {toTitleCase} from '../../../../../utils/titleCase';
import {DotedLine} from '../../../../../components/DotedLine';
import OutlineButton from '../../../../../components/OutlineButton';
import PrimaryButton from '../../../../../components/PrimaryButton';
import { useBudget } from '../../../hooks/useBudgets';
import { FinanceHeader } from '../../../../../components/FinanceHeader';
import FinanceProgress from '../../../../../components/FinanceProgress';
import { format } from 'date-fns';

export const BudgetCongratulationStep: React.FC = () => {
  const {
    finishTransaction,
    previousStep,
    editTransaction,
    stepProgress,
    transactionName,
    transactionDate,
    transactionAmount,
  } = useBudget();


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
      <FinanceHeader  previousStep={previousStep}/>
      <VerticalDivider />
      <FinanceProgress progress={stepProgress} />
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
            {'Budget name'}
          </TransactionType>
          <TransactionName>{toTitleCase(transactionName)}</TransactionName>
        </TransactionTagWrapper>
        <VerticalDivider />
        <TransactionDetailWrapper>
          <TransactionTagWrapper>
            <TransactionType>Transaction type</TransactionType>
            <TransactionName>{format(transactionDate, 'HH:mm')}</TransactionName>
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
            <TransactionType>Budget amount</TransactionType>
            <TransactionName>${transactionAmount ?? ''}</TransactionName>
          </TransactionTagWrapper>
          <TransactionTagWrapper>
            <EditButtonWrapper>
              <OutlineButton
                testID="Budget.Step.Congratulation"
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
          testID="Budget.Step.Congratulation"
          text={'Go to home '}
          accessibilityLabel="button.edit"
          onPress={() => handleFinishTransaction()}
        />
      </ButtonWrapper>
    </CongratulationWrapper>
  );
};
