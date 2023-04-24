import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {useToast} from 'react-native-toast-notifications';
import uuid from 'react-native-uuid';

import {DatePeriod} from '../../../data/models/DatePeriod';
import {PeriodDate, months, monthsData} from '../../../values/strings/months';
import {DateItemType} from '../../../components/FinanceFilter';
import {yearsData} from '../../../values/strings/years';
import {weekData} from '../../../values/strings/week';
import {BudgetDTO} from '../../../data/models/Budget';
import {BudgetWatermelonRepository} from '../../../database/budget/budgets-watermelon';
import {Budget} from '../../../database/model/Budget';
import * as RootNavigation from '../../../utils/rootNavigation';
import { Currency } from '../../../data/models/Currency';
import { IncomeCategory } from '../../../data/models/Income';
import { ObjectSchema, date, number, object, string } from 'yup';

interface BudgetContextData {
  budgets: BudgetDTO[];
  periods: PeriodDate;
  selectedDate: Date;
  selectedPeriod: DatePeriod;
  dateItemList: DateItemType[];

  loudFinancesFromStorage: () => Promise<void>;
  handleBudgetPeriod: (value: DatePeriod) => Promise<void>;
  handleSelectDate: (value: any) => void;
  handleBudgetsByDate: () => Promise<void>;



  step: number;
  transactionName: string;
  transactionAmount: number;
  stepProgress: number;
  transactionExpenseCategory:  IncomeCategory | undefined;
  creatingTransaction: boolean;
  transactionDate: Date;
  categoryStepSchema: ObjectSchema<any>;
  descriptionStepSchema: ObjectSchema<any>;

  updateStep: () => void;
  previousStep: () => void;
  editTransaction: () => void;
  finishTransaction: () => Promise<void>;
  beginTransaction: () => void;
  cancelTransaction: () => void;
  
  setTransactionCategory: (category:  IncomeCategory) => void;
  setTransactionName: (value: string) => void;
  setTransactionDate: (value: Date) => void;
  setTransactionAmount: (value: number) => void;
}

interface BudgetProviderProps {
  children: React.ReactNode;
}

const BudgetContext = createContext<BudgetContextData>({} as BudgetContextData);

const budgetsRepository = new BudgetWatermelonRepository();

function BudgetProvider({children}: BudgetProviderProps) {
  const toast = useToast();

  const [budgets, setBudgets] = useState<BudgetDTO[]>([]);

  const [selectedPeriod, setSelectedLanguage] = useState(DatePeriod.MONTH);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [periods, setPeriods] = useState<PeriodDate>(monthsData);
  const [dateItemList, setDateItemList] = useState<DateItemType[]>([]);

  const [step, setStep] = useState(1);
  const [transactionName, setTransactionName] = useState('');
  const [transactionDate, setTransactionDate] = useState<Date>(new Date());
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionCategory, setTransactionExpenseCategory] = useState<IncomeCategory>();
  const [creatingTransaction, setCreatingTransaction] = useState(false);


  const steps = 4;

  const stepProgress = useMemo(() => {
    const progress = step / steps;
    console.log('Progress ==>', progress);
    return progress;
  }, [step]);

  const updateStep = () => {
    setStep(oldValue => oldValue + 1);
  };

  const previousStep = () => {
    setStep(oldValue => oldValue - 1);
  };

  const editTransaction = () => {
    setStep(2);
    RootNavigation.push('CategoryStep');
  };

  const categoryStepSchema = object({
    transactionName: string().required().min(6),
    transactionCategory: string().required().min(3),
  });

  const descriptionStepSchema = object({
    transactionAmount: number().required().min(0.1),
    transactionDate: date().required(),
  });


  const flushTransactionVariables = useCallback(() => {
    setStep(1);
    setTransactionAmount(0);
    setTransactionDate(new Date());
    setTransactionName('');
  }, []);

  const beginTransaction = useCallback(() => {
    setCreatingTransaction(true);
    RootNavigation.push('Transaction');
  }, []);

  const finishTransaction = useCallback(async () => {
    try {
      const id = uuid.v4();
      console.log(
        'FORM DATA',
        transactionDate.toString(),
        transactionAmount,
        transactionName,
        'currency',
      );

      await budgetsRepository.add({
        id: id as string,
        category: transactionCategory!,
        currency: Currency.BRL,
        date: transactionDate,
        name: transactionName,
        value: transactionAmount
        
      })

      setCreatingTransaction(false);
      RootNavigation.reset({
        index: 0,
        routes: [{key: 'Home', name: 'Home', params: undefined}],
      });
      flushTransactionVariables();
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível salvar sua transação', {
        type: 'danger',
      });
    }
  }, [
    transactionDate,
    transactionAmount,
    transactionCategory,
    transactionName,
  ]);

  const cancelTransaction = useCallback(() => {
    setCreatingTransaction(false);
    RootNavigation.reset({
      index: 0,
      routes: [{key: 'Home', name: 'Home', params: undefined}],
    });
    flushTransactionVariables();
  }, [creatingTransaction]);



  
  const makeTransactions = (budgets: Budget[]): BudgetDTO[] => {
    const currentTransactions: BudgetDTO [] = budgets.map(
      transaction => transaction._raw as unknown as BudgetDTO,
    );
    return currentTransactions;
  };

  const loudFinancesFromStorage = useCallback(async () => {
    try {
      const budgets = await budgetsRepository.loadAll();
      setBudgets(makeTransactions(budgets));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, [selectedDate]);

  const loadFinancesByYearFromStorage = useCallback(async () => {
    try {
      console.log('LOADING BY YEAR');
      const transactions = await budgetsRepository.loadByYear(selectedDate!);
      setBudgets(makeTransactions(transactions));
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, [selectedDate]);

  const loadFinancesByMonth = useCallback(
    async () => {
      try {
        console.log('LOAD BY MONTH', selectedDate?.getMonth());
        const transactions = await budgetsRepository.loadByMonth(selectedDate!);
        setBudgets(makeTransactions(transactions));
      } catch (error: any) {
        console.log('ERROR ==>', error);
        toast.show('Opa, não foi possível carregar as entradas', {
          type: 'danger',
        });
      }
    },
    [selectedDate],
  );

  const loadFinanceByWeek = useCallback(
    async () => {
      try {
        const transactions = await budgetsRepository.loadByWeek();
        setBudgets(makeTransactions(transactions));
      } catch (error: any) {
        console.log('ERROR ==>', error);
        toast.show('Opa, não foi possível carregar as entradas', {
          type: 'danger',
        });
      }
    },
    [selectedDate],
  );

  const loadFinanceByDay = useCallback(
    async () => {
      try {
        console.log('LOAD BY Day', selectedDate);
        const transactions = await budgetsRepository.loadByDay(selectedDate!);
        setBudgets(makeTransactions(transactions));
      } catch (error: any) {
        console.log('ERROR ==>', error);
        toast.show('Opa, não foi possível carregar as entradas', {
          type: 'danger',
        });
      }
    },
    [selectedDate],
  );

  const handleFinancesPeriod = useCallback(async (value: DatePeriod) => {
    setSelectedLanguage(value);
    console.log('VALUE', value);
    switch (value) {
      case DatePeriod.YEAR:
        setPeriods(yearsData);
        break;
      case DatePeriod.MONTH:
        setPeriods(monthsData);
        break;
      case DatePeriod.WEEK:
        setPeriods(weekData);
        break;
      case DatePeriod.DAY:
        setPeriods([]);
        setSelectedDate(new Date());
        break;
      default:
        break;
    }
  }, []);

  const handleSelectDate = useCallback(
    (value: any) => {
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
      console.log('SELECTED', value);
      setDateItemList(updatedDateList);
    },
    [dateItemList, periods, selectedDate],
  );

  const handleBudgetsByDate = useCallback(async () => {
    switch (selectedPeriod) {
      case DatePeriod.YEAR:
        await Promise.all([
          loadFinancesByYearFromStorage(),
          loadFinancesByYearFromStorage(),
        ]);
        break;
      case DatePeriod.WEEK:
        await Promise.all([
          loadFinanceByDay(),
          loadFinanceByDay(),
        ]);
        break;
      case DatePeriod.DAY:
        console.log('HANDLE FINANCES');
        await Promise.all([
          loadFinanceByDay(),
          loadFinanceByDay(),
        ]);
        break;
      case DatePeriod.MONTH:
      default:
        await Promise.all([
          loadFinancesByMonth(),
          loadFinancesByMonth(),
        ]);
        break;
    }
  }, [handleSelectDate, selectedDate]);

  useEffect(() => {
    const currentDateList: DateItemType[] = periods?.format?.map(
      (period, index) => {
        const date = periods.date[index];
        return {
          id: period,
          format: period,
          date: date,
          selected: false,
        };
      },
    );
    setDateItemList(currentDateList);
  }, [periods]);

  useEffect(() => {
    const initFinance = async () => {
      await handleBudgetsByDate();
    };
    console.log('MONTHS', months);
    initFinance();
  }, [selectedDate]);

  return (
    <BudgetContext.Provider
      value={{
        loudFinancesFromStorage,
        handleBudgetPeriod: handleFinancesPeriod,
        handleSelectDate,
        handleBudgetsByDate,

        budgets,
        periods,
        selectedDate,
        selectedPeriod,
        dateItemList,


        finishTransaction,
        updateStep,
        previousStep,
        setTransactionName,
        setTransactionAmount,
        setTransactionDate,
        setTransactionCategory: setTransactionExpenseCategory,
        editTransaction,
        beginTransaction,
        cancelTransaction,
        
        creatingTransaction,
        categoryStepSchema,
        descriptionStepSchema,
        step,
        stepProgress,
        transactionExpenseCategory: transactionCategory,
        transactionName,
        transactionAmount,
        transactionDate,
      }}>
      {children}
    </BudgetContext.Provider>
  );
}

function useBudget(): BudgetContextData {
  const context = useContext(BudgetContext);
  return context;
}
export {useBudget, BudgetProvider};