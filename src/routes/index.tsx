import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppTabRoutes} from './app.tab.routes';
import {navigationRef} from '../utils/rootNavigation';
import {useTransaction} from '../modules/Transaction/hooks/useTransaction';
import {TransactionStackRoutes} from './app.transaction.stack.routes';

export const Routes = () => {
  const {creatingTransaction} = useTransaction();
  return (
    <NavigationContainer ref={navigationRef}>
      {creatingTransaction ? <TransactionStackRoutes /> : <AppTabRoutes />}
    </NavigationContainer>
  );
};
