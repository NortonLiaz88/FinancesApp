import React from 'react';
import {TransactionScreen} from '../screens/Transaction';
import {createStackNavigator} from '@react-navigation/stack';
import {ExpenseCategoryStep} from '../modules/Transaction/components/Stepper/ExpenseSteps';
import { TransactionProvider } from '../modules/Transaction/hooks/useTransaction';

export type RootStackParamList = {
  TransactionHome: undefined;
  ExpenseCategoryStep: undefined;
  Splash: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const TransactionStackRoutes = (): JSX.Element => {
  return (
    <TransactionProvider>
      <Navigator initialRouteName="TransactionHome">
        <Screen
          name="TransactionHome"
          component={TransactionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="ExpenseCategoryStep"
          component={ExpenseCategoryStep}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </TransactionProvider>
  );
};
