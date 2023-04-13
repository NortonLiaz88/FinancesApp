import React from 'react';
import {BackButton, ButtonWrapper, HeaderWrapper, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

export const TransactionHeader: React.FC = () => {
  const {goBack} = useNavigation();

  const handleBack = () => {
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
