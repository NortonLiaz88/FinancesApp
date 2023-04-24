import React, {useEffect} from 'react';
import {FloatingAction} from 'react-native-floating-action';
import {useTransaction} from '../../modules/Transaction/hooks/useTransaction';
import {useFinance} from '../../modules/Finances/hooks/useFinances';

import {homeActions} from '../../utils/homeActions';
import {strings} from '../../values/strings';
import theme from '../../styles/theme';

import {PageWrapper} from '../../components/Screen/styles';
import {Header} from '../../components/Header';
import {FinanceFilter} from '../../components/FinanceFilter';
import {FinanceResume} from '../../components/FinanceResume';
import {BudgetList} from '../../components/BudgetList';
import { useBudget } from '../../modules/Budget/hooks/useBudgets';

export const HomeScreen: React.FC = () => {
  const {
    incomeTotal,
    expenseTotal,
    dateItemList,
    periods,
    selectedDate,
    selectedPeriod,
    handleFinancesByDate,
    handleFinancesPeriod,
    handleSelectDate,
  } = useFinance();

  const {
    budgets,
    dateItemList: budgetItemList,
    periods: budgetPeriods,
    selectedDate: selectedBudgetDate,
    selectedPeriod: selectedBudgetPeriod,
    handleBudgetPeriod,
    handleSelectDate: handleSelectBudgetDate,
  } = useBudget();

  const {beginTransaction, finishTransaction} = useTransaction();

  useEffect(() => {
    const initFinance = async () => {
      await handleFinancesByDate();
    };
    initFinance();
  }, [finishTransaction]);

  const handleCreateTransaction = () => {
    beginTransaction();
  };
  return (
    <>
      <PageWrapper>
        <Header>Home</Header>
        <FinanceFilter
          title={strings.financeFilterTitle}
          handlePeriod={handleFinancesPeriod}
          handleSelectDate={handleSelectDate}
          dateItemList={dateItemList}
          periods={periods}
          selectedDate={selectedDate}
          selectedPeriod={selectedPeriod}
        />
        <FinanceResume
          incomeAmount={`${incomeTotal}`}
          expenseAmountTabLabel={`${expenseTotal}`}
        />
        <FinanceFilter
          title={strings.financeBudgetFilterTitle}
          handlePeriod={handleBudgetPeriod}
          handleSelectDate={handleSelectBudgetDate}
          dateItemList={budgetItemList}
          periods={budgetPeriods}
          selectedDate={selectedBudgetDate}
          selectedPeriod={selectedBudgetPeriod}
        />
        <BudgetList budgets={budgets} horizontal/>
      </PageWrapper>
      <FloatingAction
        actions={homeActions}
        color={theme.colors.initialGradientColor}
        onPressItem={() => handleCreateTransaction()}
      />
    </>
  );
};
