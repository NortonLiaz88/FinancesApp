import {ReactNode} from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import {FinancesProvider} from '../modules/Finances/hooks/useFinances';
import { TransactionProvider } from '../modules/Transaction/hooks/useTransaction';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({children}: AppProviderProps): JSX.Element {
  return (
    <ToastProvider>
      <TransactionProvider>
        <FinancesProvider>{children}</FinancesProvider>
      </TransactionProvider>
    </ToastProvider>
  );
}

export {AppProvider};
