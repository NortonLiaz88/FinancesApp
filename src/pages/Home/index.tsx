import React from 'react';
import {Text, View} from 'react-native';
import {PageWrapper} from '../../components/Screen/styles';
import {Header} from '../../components/Header';
import {FinanceFilter} from '../../components/FinanceFilter';

export const HomeScreen: React.FC = () => {
  return (
    <PageWrapper>
      <Header>Home</Header>
      <FinanceFilter />
    </PageWrapper>
  );
};
