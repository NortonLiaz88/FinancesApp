import {ReactNode} from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import {FinancesProvider} from '../modules/Finances/hooks/useFinances';
import { TransactionProvider } from '../modules/Transaction/hooks/useTransaction';
import { BudgetProvider } from '../modules/Budget/hooks/useBudgets';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({children}: AppProviderProps): JSX.Element {
  return (
    <ToastProvider>
      <TransactionProvider>
        <BudgetProvider>
        <FinancesProvider>{children}</FinancesProvider>
        </BudgetProvider>
      </TransactionProvider>
    </ToastProvider>
  );
}

export {AppProvider};
