import React from 'react';
import {BackButton, ButtonWrapper, HeaderWrapper, Title} from './styles';
import {useNavigation} from '@react-navigation/native';
import { useTransaction } from '../../hooks/useTransaction';

export const TransactionHeader: React.FC = () => {
  const {goBack} = useNavigation();
  const {previousStep} = useTransaction();

  const handleBack = () => {
    previousStep();
    goBack();
  };

  return (
    <HeaderWrapper>
      <ButtonWrapper onPress={handleBack} >
        <BackButton />
      </ButtonWrapper>
      <Title>Add Transaction</Title>
    </HeaderWrapper>
  );
};
