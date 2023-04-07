import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {PageWrapper} from '../../components/Screen/styles';
import {Header} from '../../components/Header';
import {FinanceFilter} from '../../components/FinanceFilter';
import {FinanceResume} from '../../components/FinanceResume';
import {strings} from '../../values/strings';
import {BudgetList} from '../../components/BudgetList';
import {FloatingAction} from 'react-native-floating-action';
import { homeActions } from '../../utils/homeActions';
import theme from '../../styles/theme';

export const HomeScreen: React.FC = () => {
  const {navigate} = useNavigation();

  const handleNavigation = () => {
    navigate('Transaction');
  }
  return (
    <>
      <PageWrapper>
        <Header>Home</Header>
        <FinanceFilter title={strings.financeFilterTitle} />
        <FinanceResume incomeAmount='6000'  expenseAmountTabLabel='4500'/>
        <FinanceFilter title={strings.financeBudgetFilterTitle} />
        <BudgetList />


      </PageWrapper>
      <FloatingAction
        actions={homeActions}
        color={theme.colors.initialGradientColor}
        onPressItem={() => handleNavigation()}
      />
    </>
  );
};