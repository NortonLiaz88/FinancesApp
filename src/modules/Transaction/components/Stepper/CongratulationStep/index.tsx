import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {
  CongratsMessage,
  CongratsTitle,
  CongratulationWrapper,
  ContentWrapper,
  DetailSeparator,
  TicketDivider,
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
import Svg, {G, Rect} from 'react-native-svg';
import theme from '../../../../../styles/theme';

export const CongratulationStep = () => {
  const {
    handleSelectTransactionType,
    stepProgress,
    transactionType,
    transactionName,
    transactionDate,
  } = useTransaction();

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
            <TransactionName>{toTitleCase(transactionType)}</TransactionName>
          </TransactionTagWrapper>
          <DetailSeparator />
          <TransactionTagWrapper>
            <TransactionType>Date</TransactionType>
            <TransactionName>{transactionDate.toDateString()}</TransactionName>
          </TransactionTagWrapper>
        </TransactionDetailWrapper>
        <VerticalDivider />
        <Svg height="11" width="100%">
          <G>
            {dashes.map((_, index) => (
              <Rect
                key={index}
                x="11"
                y="10"
                width="10"
                height="1"
                fill={theme.colors.endGradientColor}
                translateX={spacing * index}
              />
            ))}
          </G>
        </Svg>
      </TransactionContentWrapper>
    </CongratulationWrapper>
  );
};
