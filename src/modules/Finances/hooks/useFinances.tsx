import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {useToast} from 'react-native-toast-notifications';
import {Q} from '@nozbe/watermelondb';

import {TransactionDTO} from '../../../models/Transaction';
import {database} from '../../../database';
import {Transaction} from '../../../database/model/Transaction';

interface FinancesContextData {
  incomes: TransactionDTO[];
  expenses: TransactionDTO[];
  incomeTotal: number;
  expenseTotal: number;

  loadIncomesFromStorage: () => Promise<void>;
  loadExpensesFromStorage: () => Promise<void>;
}

interface FinancesProviderProps {
  children: React.ReactNode;
}

const FinancesContext = createContext<FinancesContextData>(
  {} as FinancesContextData,
);

function FinancesProvider({children}: FinancesProviderProps) {
  const toast = useToast();

  const [incomes, setIncomes] = useState<TransactionDTO[]>([]);
  const [expenses, setExpenses] = useState<TransactionDTO[]>([]);

  const loadIncomesFromStorage = useCallback(async () => {
    try {
      const transactionCollection = database.get<Transaction>('transactions');
      const transactions = await transactionCollection
        .query(Q.where('type', Q.eq('income')))
        .fetch();
      const currentTransactions: TransactionDTO[] = transactions.map(
        transaction => transaction._raw as unknown as TransactionDTO,
      );
      setIncomes(currentTransactions);
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as entradas', {
        type: 'danger',
      });
    }
  }, []);

  const loadExpensesFromStorage = useCallback(async () => {
    try {
      const transactionCollection = database.get<Transaction>('transactions');
      const transactions = await transactionCollection
        .query(Q.where('type', Q.eq('expense')))
        .fetch();
      const currentTransactions: TransactionDTO[] = transactions.map(
        transaction => transaction._raw as unknown as TransactionDTO,
      );
      console.log('EXPENSES', currentTransactions);
      setExpenses(currentTransactions);
    } catch (error: any) {
      console.log('ERROR ==>', error);
      toast.show('Opa, não foi possível carregar as saídas', {
        type: 'danger',
      });
    }
  }, []);

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
    const initHook = async () => {
      Promise.all([loadIncomesFromStorage(), loadExpensesFromStorage()])
    };
    initHook();
  }, []);

  return (
    <FinancesContext.Provider
      value={{
        loadIncomesFromStorage,
        loadExpensesFromStorage,

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
