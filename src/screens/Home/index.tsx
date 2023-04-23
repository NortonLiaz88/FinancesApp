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
          handlePeriod={handleFinancesPeriod}
          handleSelectDate={handleSelectDate}
          dateItemList={dateItemList}
          periods={periods}
          selectedDate={selectedDate}
          selectedPeriod={selectedPeriod}
        />
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
