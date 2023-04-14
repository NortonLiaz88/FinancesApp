import React from 'react';
import {TransactionScreen} from '../screens/Transaction';
import {createStackNavigator} from '@react-navigation/stack';
import {ExpenseCategoryStep} from '../modules/Transaction/components/Stepper/ExpenseSteps/ChooseCategory';
import { TransactionProvider } from '../modules/Transaction/hooks/useTransaction';
import { ExpenseDescriptionStep } from '../modules/Transaction/components/Stepper/ExpenseSteps/Description';
import { CongratulationStep } from '../modules/Transaction/components/Stepper/CongratulationStep';

export type RootStackParamList = {
  TransactionHome: undefined;
  ExpenseCategoryStep: undefined;
  ExpenseDescriptionStep: undefined;
  CongratulationStep: undefined;
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
        <Screen
          name="ExpenseDescriptionStep"
          component={ExpenseDescriptionStep}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="CongratulationStep"
          component={CongratulationStep}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </TransactionProvider>
  );
};
