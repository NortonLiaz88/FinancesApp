import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {AmountType} from '../../../models/Amount';
import { useNavigation } from '@react-navigation/native';

interface TransactionContextData {
  step: number;
  transactionType: AmountType;
  transactionName: string;
  stepProgress: number;
  transactionDate: Date;
  handleSelectTransactionType: (transactionType: AmountType) => void;
}

interface TransactionProviderProps {
  children: React.ReactNode;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

function TransactionProvider({children}: TransactionProviderProps) {
  const [step, setStep] = useState(1);
  const {navigate} = useNavigation();
  const [transactionType, setTransactionType] = useState<AmountType>(
    AmountType.EXPENSE,
  );
  const [transactionName, setTransactionName] = useState('Dubay Travel');
  const [transactionDate, setTransactionDate] = useState(new Date());
  const steps = 4;

  const stepProgress = useMemo(() => {
    const progress = step / steps;
    console.log('Progress ==>', progress);
    return progress;
  }, [step]);

  const handleSelectTransactionType = useCallback(
    (transactionType: AmountType) => {
      setTransactionType(transactionType);
      setStep(oldValue => oldValue + 1);
      if (transactionType === AmountType.INCOME) {
        navigate('IncomeCategoryStep');
        return;
      }
      navigate('ExpenseCategoryStep');
    },
    [],
  );

  return (
    <TransactionContext.Provider
      value={{
        handleSelectTransactionType,
        step,
        stepProgress,
        transactionType,
        transactionName,
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
  