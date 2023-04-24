import React from 'react';
import {FinanceFilter} from '../../components/FinanceFilter';
import {strings} from '../../values/strings';
import {useBudget} from '../../modules/Budget/hooks/useBudgets';
import {BudgetList} from '../../components/BudgetList';
import { PageWrapper } from './styles';
import PrimaryButton from '../../components/PrimaryButton';

export const BudgetScreen: React.FC = () => {
  const {
    budgets,
    dateItemList: budgetItemList,
    periods: budgetPeriods,
    selectedDate: selectedBudgetDate,
    selectedPeriod: selectedBudgetPeriod,
    handleBudgetPeriod,
    handleSelectDate: handleSelectBudgetDate,
  } = useBudget();

  return (
    <PageWrapper>
      <FinanceFilter
        title={strings.financeBudgetFilterTitle}
        handlePeriod={handleBudgetPeriod}
        handleSelectDate={handleSelectBudgetDate}
        dateItemList={budgetItemList}
        periods={budgetPeriods}
        selectedDate={selectedBudgetDate}
        selectedPeriod={selectedBudgetPeriod}
      />
      <BudgetList budgets={budgets} />
      <PrimaryButton accessibilityLabel='Budget.Create' testID='Budget.Create' text='Create a budget'/>
    </PageWrapper>
  );
};
