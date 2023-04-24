import React from 'react';
import {BackButton, ButtonWrapper, HeaderWrapper, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

interface Props {
  backAction?: () => void;
  previousStep: () => void;
  title: string;
}

export const FinanceHeader: React.FC<Props> = ({backAction, previousStep, title}) => {
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
      <Title>{title}</Title>
    </HeaderWrapper>
  );
};
