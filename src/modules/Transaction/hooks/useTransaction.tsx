import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {object, string, number, date, ObjectSchema} from 'yup';
import uuid from 'react-native-uuid';

import {AmountType} from '../../../models/Transaction';
import {useNavigation} from '@react-navigation/native';
import {ExpenseCategory} from '../../../models/Expense';
import {database} from '../../../database';
import {Transaction} from '../../../database/model/Transaction';
import {useToast} from 'react-native-toast-notifications';
import {IncomeCategory} from '../../../models/Income';

interface TransactionContextData {
  step: number;
  transactionType: AmountType;
  transactionName: string;
  transactionAmount: number;
  stepProgress: number;
  transactionExpenseCategory: ExpenseCategory | IncomeCategory | undefined;

  setTransactionName: (value: string) => void;
  setTransactionType: (value: AmountType) => void;
  setTransactionDate: (value: Date) => void;
  setTransactionAmount: (value: number) => void;

  transactionDate: Date;
  categoryStepSchema: ObjectSchema<any>;
  descriptionStepSchema: ObjectSchema<any>;

  handleSelectTransactionType: (transactionType: AmountType) => void;
  setTransactionCategory: (category: ExpenseCategory | IncomeCategory) => void;
  updateStep: () => void;
  previousStep: () => void;
  editTransaction: () => void;
  finishTransaction: () => Promise<void>;
}

interface TransactionProviderProps {
  children: React.ReactNode;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

function TransactionProvider({children}: TransactionProviderProps) {
  const toast = useToast();

  const [step, setStep] = useState(1);
  const {navigate} = useNavigation();
  const [transactionType, setTransactionType] = useState<AmountType>(
    AmountType.EXPENSE,
  );
  const [transactionExpenseCategory, setTransactionExpenseCategory] = useState<
    ExpenseCategory | IncomeCategory
  >();
  const [transactionName, setTransactionName] = useState('');
  const [transactionDate, setTransactionDate] = useState<Date>(new Date());
  const [transactionAmount, setTransactionAmount] = useState(0);

  const steps = 4;

  const stepProgress = useMemo(() => {
    const progress = step / steps;
    console.log('Progress ==>', progress);
    return progress;
  }, [step]);

  const handleSelectTransactionType = useCallback(
    (transactionType: AmountType) => {
      setTransactionType(transactionType);
      navigate('CategoryStep');
      updateStep();
    },
    [],
  );

  const updateStep = () => {
    setStep(oldValue => oldValue + 1);
  };

  const previousStep = () => {
    setStep(oldValue => oldValue - 1);
  };

  const editTransaction = () => {
    setStep(2);
    navigate('CategoryStep');
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
    setTransactionExpenseCategory(null);
    setTransactionName('');
    setTransactionType(null);
  }, []);

  const finishTransaction = useCallback(async () => {
    try {
      const id = uuid.v4();
      console.log(
        'FORM DATA',
        transactionDate.toString(),
        transactionAmount,
        transactionType,
        transactionExpenseCategory!,
        transactionName,
        'currency',
      );
      const transactionCollection = database.get<Transaction>('transactions');
      await database.write(async () => {
        await transactionCollection.create(transaction => {
          (transaction.transaction_id = id as string),
            (transaction.date = transactionDate.toString()),
            (transaction.value = transactionAmount.toString()),
            (transaction.type = transactionType),
            (transaction.category = transactionExpenseCategory!),
            (transaction.name = transactionName),
            (transaction.currency = 'currency');
          console.log(transaction._raw);
        });
      });
      // console.log('Transaction', newTransaction);
      navigate('Home');
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
    transactionType,
    transactionExpenseCategory,
    transactionName,
  ]);

  return (
    <TransactionContext.Provider
      value={{
        finishTransaction,
        handleSelectTransactionType,
        updateStep,
        previousStep,
        setTransactionName,
        setTransactionType,
        setTransactionAmount,
        setTransactionDate,
        setTransactionCategory: setTransactionExpenseCategory,
        editTransaction,
        categoryStepSchema,
        descriptionStepSchema,
        step,
        stepProgress,
        transactionType,
        transactionExpenseCategory,
        transactionName,
        transactionAmount,
        transactionDate,
      }}>
      {children}
    </TransactionContext.Provider>
  );
}

function useTransaction(): TransactionContextData {
  const context = useContext(TransactionContext);
  return context;
}
export {useTransaction, TransactionProvider};
