import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {useToast} from 'react-native-toast-notifications';

import {AmountType, TransactionDTO} from '../../../data/models/Transaction';
import {TransactionWatermelonRepository} from '../../../database/transaction/transactions-watermelon';
import {DatePeriod} from '../../../data/models/DatePeriod';
import {months} from '../../../values/strings/months';
import {DateItemType} from '../../../components/FinanceFilter';
import {years} from '../../../values/strings/years';
import {week} from '../../../values/strings/week';
import {Transaction} from '../../../database/model/Transaction';

interface FinancesContextData {
  incomes: TransactionDTO[];
  expenses: TransactionDTO[];
  incomeTotal: number;
  expenseTotal: number;

  loadAllIncomesFromStorage: () => Promise<void>;
  loadAllExpensesFromStorage: () => Promise<void>;
  handleFinancesPeriod: (value: DatePeriod) => Promise<void>;
  handleSelectDate: (value: any) => void;
  handleFinancesByDate: () => Promise<void>;
}

interface FinancesProviderProps {
  children: React.ReactNode;
}

const FinancesContext = createContext<FinancesContextData>(
  {} as FinancesContextData,
);

const transactionRepository = new TransactionWatermelonRepository();

function FinancesProvider({children}: FinancesProviderProps) {
  const toast = useToast();

  const [incomes, setIncomes] = useState<TransactionDTO[]>([]);
  const [expenses, setExpenses] = useState<TransactionDTO[]>([]);

  const [selectedPeriod, setSelectedLanguage] = useState(DatePeriod.MONTH);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [periods, setPeriods] = useState(months);
  const [dateItemList, setDateItemList] = useState<DateItemType[]>([]);

  const makeTransactions = (transactions: Transaction[]): TransactionDTO[] => {
    const currentTransactions: TransactionDTO[] = transactions.map(
      transaction => transaction._raw as unknown as TransactionDTO,
    );
    return currentTransactions;
  };

  const loadIncomesFromStorage = useCallback(async () => {
    try {
      const transactions = await transactionRepository.loadAll(
        AmountType.INCOME,
      );
      setIncomes(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, []);

  const loadExpensesFromStorage = useCallback(async () => {
    try {
      const transactions = await transactionRepository.loadAll(
        AmountType.EXPENSE,
      );
      setIncomes(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as saídas', {
        type: 'danger',
      });
    }
  }, []);

  const loadIncomesByYearFromStorage = useCallback(async () => {
    try {
      const transactions = await transactionRepository.loadByYear(
        selectedDate!,
        AmountType.INCOME,
      );
      setIncomes(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, []);

  const loadExpensesByYearFromStorage = useCallback(async () => {
    try {
      const transactions = await transactionRepository.loadByYear(
        selectedDate!,
        AmountType.EXPENSE,
      );
      setExpenses(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, []);

  const loadIncomesByMonth = useCallback(async () => {
    try {
      console.log('LOAD BY MONTH', selectedDate!.getMonth());
      const transactions = await transactionRepository.loadByMonth(
        selectedDate!,
        AmountType.INCOME,
      );
      setIncomes(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, []);

  const loadExpenseByMonth = useCallback(async () => {
    try {
      const transactions = await transactionRepository.loadByMonth(
        selectedDate!,
        AmountType.EXPENSE,
      );
      setExpenses(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, []);

  const loadIncomeByWeek = useCallback(async () => {
    try {
      const transactions = await transactionRepository.loadByWeek(
        AmountType.INCOME,
      );
      setIncomes(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, []);

  const loadExpenseByWeek = useCallback(async () => {
    try {
      const transactions = await transactionRepository.loadByWeek(
        AmountType.EXPENSE,
      );
      setExpenses(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, []);


  const loadIncomeByDay = useCallback(async () => {
    try {
      const transactions = await transactionRepository.loadByDay(
        selectedDate!,
        AmountType.INCOME,
      );
      setIncomes(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, []);


  const loadExpensesByDay = useCallback(async () => {
    try {
      const transactions = await transactionRepository.loadByDay(
        selectedDate!,
        AmountType.EXPENSE,
      );
      setIncomes(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, []);


  const handleFinancesPeriod = useCallback(async (value: DatePeriod) => {
    setSelectedLanguage(value);
    console.log('VALUE', value);
    switch (value) {
      case DatePeriod.YEAR:
        const dateYear = years(new Date().getFullYear()).map(year =>
          year.toString(),
        );
        setPeriods(dateYear);
        break;
      case DatePeriod.MONTH:
        setPeriods(months);
        break;
      case DatePeriod.WEEK:
        setPeriods(week);
        break;
      case DatePeriod.DAY:
        setPeriods([]);
        break;
      default:
        break;
    }
  }, []);

  const handleSelectDate = useCallback((value: any) => {
    console.log('VALUE', value);
    const updatedDateList = dateItemList.map(ele => {
      if (ele.id === value.id) {
        const updatedDate = Object.assign({}, {...ele}, {selected: true});
        return updatedDate;
      } else {
        const updatedDate = Object.assign({}, {...ele}, {selected: false});
        return updatedDate;
      }
    });
    setSelectedDate(value);
    setDateItemList(updatedDateList);
  }, []);

  const handleFinancesByDate = useCallback(async () => {
    switch (selectedPeriod) {
      case DatePeriod.YEAR:
        await Promise.all([
          loadIncomesByYearFromStorage(),
          loadExpensesByYearFromStorage(),
        ]);
        break;
      case DatePeriod.MONTH:
        await Promise.all([loadIncomesByMonth(), loadExpenseByMonth()]);
        break;
      case DatePeriod.WEEK:
        await Promise.all([loadIncomeByWeek(), loadExpenseByWeek()]);
        break;
      case DatePeriod.DAY:
        await Promise.all([loadIncomeByDay(), loadExpensesByDay()]);
        break;
      default:
        await Promise.all([loadIncomesByMonth(), loadExpenseByMonth()]);
        break;
    }
  }, [handleSelectDate]);

  const incomeTotal = useMemo(() => {
    let total = 0;
    for (const transaction of incomes) {
      total += +transaction.value;
    }
    const amountTotal = total.toFixed(2);
    return +amountTotal;
  }, [incomes]);

  const expenseTotal = useMemo(() => {
    let total = 0;
    for (const transaction of expenses) {
      total += +transaction.value;
    }
    const amountTotal = total.toFixed(2);
    return +amountTotal;
  }, [expenses]);

  // useEffect(() => {
  //   const initHook = async () => {
  //     await handleFinancesByDate();
  //   };
  //   initHook();
  // }, []);

  return (
    <FinancesContext.Provider
      value={{
        loadAllIncomesFromStorage: loadIncomesFromStorage,
        loadAllExpensesFromStorage: loadExpensesFromStorage,
        handleFinancesPeriod,
        handleSelectDate,
        handleFinancesByDate,
        incomes,
        expenses,
        incomeTotal,
        expenseTotal,
      }}>
      {children}
    </FinancesContext.Provider>
  );
}

function useFinance(): FinancesContextData {
  const context = useContext(FinancesContext);
  return context;
}
export {useFinance, FinancesProvider};
