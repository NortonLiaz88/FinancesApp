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
import {PeriodDate, months, monthsData, monthsDate} from '../../../values/strings/months';
import {DateItemType} from '../../../components/FinanceFilter';
import {years} from '../../../values/strings/years';
import {week} from '../../../values/strings/week';
import {Transaction} from '../../../database/model/Transaction';

interface FinancesContextData {
  incomes: TransactionDTO[];
  expenses: TransactionDTO[];
  incomeTotal: number;
  expenseTotal: number;

  periods: PeriodDate;
  selectedDate: Date;
  selectedPeriod: DatePeriod;
  dateItemList: DateItemType[];

  loudFinancesFromStorage: (type: AmountType) => Promise<void>;
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
  const [periods, setPeriods] = useState<PeriodDate>(monthsData);
  const [dateItemList, setDateItemList] = useState<DateItemType[]>([]);

  const makeTransactions = (transactions: Transaction[]): TransactionDTO[] => {
    const currentTransactions: TransactionDTO[] = transactions.map(
      transaction => transaction._raw as unknown as TransactionDTO,
    );
    return currentTransactions;
  };

  const loudFinancesFromStorage = useCallback(async (type: AmountType) => {
    try {
      const transactions = await transactionRepository.loadAll(type);
      type === AmountType.INCOME
        ? setIncomes(makeTransactions(transactions))
        : setExpenses(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, []);

  const loadFinancesByYearFromStorage = useCallback(
    async (type: AmountType) => {
      try {
        const transactions = await transactionRepository.loadByYear(
          selectedDate!,
          type,
        );
        type === AmountType.INCOME
        ? setIncomes(makeTransactions(transactions))
        : setExpenses(makeTransactions(transactions));
      } catch (error: any) {
        console.log('ERROR ==>', error);
        toast.show('Opa, não foi possível carregar as entradas', {
          type: 'danger',
        });
      }
    },
    [],
  );

  const loadFinancesByMonth = useCallback(async (type: AmountType) => {
    try {
      console.log('LOAD BY MONTH', selectedDate?.getMonth());
      const transactions = await transactionRepository.loadByMonth(
        selectedDate!,
        type,
      );
      type === AmountType.INCOME
      ? setIncomes(makeTransactions(transactions))
      : setExpenses(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, [selectedDate]);

  const loadFinanceByWeek = useCallback(async (type: AmountType) => {
    try {
      const transactions = await transactionRepository.loadByWeek(type);
      type === AmountType.INCOME
        ? setIncomes(makeTransactions(transactions))
        : setExpenses(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, []);

  const loadFinanceByDay = useCallback(async (type: AmountType) => {
    try {
      const transactions = await transactionRepository.loadByDay(
        selectedDate!,
        type,
      );
      type === AmountType.INCOME
        ? setIncomes(makeTransactions(transactions))
        : setExpenses(makeTransactions(transactions));
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
    const updatedDateList = dateItemList.map(ele => {
      if (ele.id === value.id) {
        const updatedDate = Object.assign({}, {...ele}, {selected: true});
        return updatedDate;
      } else {
        const updatedDate = Object.assign({}, {...ele}, {selected: false});
        return updatedDate;
      }
    });
    setSelectedDate(value.date);
    console.log('SELECTED', value)
    setDateItemList(updatedDateList);
  }, [dateItemList, periods, selectedDate]);

  const handleFinancesByDate = useCallback(async () => {
    
    switch (selectedPeriod) {
      case DatePeriod.YEAR:
        await Promise.all([
          loadFinancesByYearFromStorage(AmountType.EXPENSE),
          loadFinancesByYearFromStorage(AmountType.INCOME),
        ]);
        break;
      case DatePeriod.MONTH:
        console.log('HANDLE FINANCES');
        await Promise.all([
          loadFinancesByMonth(AmountType.EXPENSE),
          loadFinancesByMonth(AmountType.INCOME),
        ]);
        break;
      case DatePeriod.WEEK:
        await Promise.all([
          loadFinanceByWeek(AmountType.EXPENSE),
          loadFinanceByWeek(AmountType.INCOME),
        ]);
        break;
      case DatePeriod.DAY:
        await Promise.all([
          loadFinanceByDay(AmountType.EXPENSE),
          loadFinanceByDay(AmountType.INCOME),
        ]);
        break;
      default:
        await Promise.all([
          loadFinancesByMonth(AmountType.EXPENSE),
          loadFinancesByMonth(AmountType.INCOME),
        ]);
        break;
    }
  }, [handleSelectDate, selectedDate]);

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

  useEffect(() => {
    const currentDateList: DateItemType[] = periods.format.map((period,index) => {
      const date = periods.date[index];
      return {
        id: period,
        format: period,
        date: date,
        selected: false,
      };
    });
    setDateItemList(currentDateList);
  }, [periods]);

  useEffect(() => {
    const initFinance = async () => {
      await handleFinancesByDate();
    };
    console.log('MONTHS', months)
    initFinance();
  }, [selectedDate]);
  

  return (
    <FinancesContext.Provider
      value={{
        loudFinancesFromStorage,
        handleFinancesPeriod,
        handleSelectDate,
        handleFinancesByDate,
        incomes,
        expenses,
        incomeTotal,
        expenseTotal,
        periods,
        selectedDate,
        selectedPeriod,
        dateItemList
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
