import React from 'react';
import {BackButton, ButtonWrapper, HeaderWrapper, Title} from './styles';
import {useNavigation} from '@react-navigation/native';
import { useTransaction } from '../../hooks/useTransaction';

interface Props {
  backAction?: () => void;
}

export const TransactionHeader: React.FC<Props> = ({backAction}) => {
  const {goBack} = useNavigation();
  const {previousStep} = useTransaction();

  const handleBack = () => {
    previousStep();
    backAction ? backAction() : goBack();
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
