import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {PageWrapper} from '../../components/Screen/styles';
import {Header} from '../../components/Header';
import {FinanceFilter} from '../../components/FinanceFilter';
import {FinanceResume} from '../../components/FinanceResume';
import {strings} from '../../values/strings';
import {BudgetList} from '../../components/BudgetList';
import {FloatingAction} from 'react-native-floating-action';
import {homeActions} from '../../utils/homeActions';
import theme from '../../styles/theme';
import {useFinance} from '../../modules/Finances/hooks/useFinances';
import { HomeStackRoutes } from '../../routes/app.home.stack.routes';
import { useTransaction } from '../../modules/Transaction/hooks/useTransaction';

export const HomeScreen: React.FC = () => {
  const {
    incomeTotal,
    expenseTotal,
    loadAllExpensesFromStorage: loadExpensesFromStorage,
    loadAllIncomesFromStorage: loadIncomesFromStorage,
    handleFinancesByDate,
  } = useFinance();

  const {beginTransaction, finishTransaction} = useTransaction();

  useEffect(() => {
    const initFinance = async () => {
      await handleFinancesByDate();
    };
    initFinance();
  }, [finishTransaction]);

  const handleCreateTransaction = () => {
    beginTransaction()
  };
  return (
    <>
      <PageWrapper>
        <Header>Home</Header>
        <FinanceFilter title={strings.financeFilterTitle} />
        <FinanceResume
          incomeAmount={`${incomeTotal}`}
          expenseAmountTabLabel={`${expenseTotal}`}
        />
        <FinanceFilter title={strings.financeBudgetFilterTitle} />
        <BudgetList />
      </PageWrapper>
      <FloatingAction
        actions={homeActions}
        color={theme.colors.initialGradientColor}
        onPressItem={() => handleCreateTransaction()}
      />
    </>
  );
};
