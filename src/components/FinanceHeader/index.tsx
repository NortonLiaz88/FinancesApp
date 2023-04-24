import React from 'react';
import {BackButton, ButtonWrapper, HeaderWrapper, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

interface Props {
  backAction?: () => void;
  previousStep: () => void;
}

export const FinanceHeader: React.FC<Props> = ({backAction, previousStep}) => {
  const {goBack} = useNavigation();

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
