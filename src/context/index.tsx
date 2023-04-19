import {ReactNode} from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import {FinancesProvider} from '../modules/Finances/hooks/useFinances';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({children}: AppProviderProps): JSX.Element {
  return (
    <ToastProvider>
      <FinancesProvider>{children}</FinancesProvider>
    </ToastProvider>
  );
}

export {AppProvider};
