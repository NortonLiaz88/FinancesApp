import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BudgetScreen} from '../screens/Budget';
import {BudgetStackRoutes} from './app.budget.stack.routes';

export type RootStackParamList = {
  HomeBudget: undefined;
  BudgetTransaction: undefined;
  Splash: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const HomeBudgetStackRoutes = (): JSX.Element => {
  return (
    <Navigator initialRouteName="HomeBudget">
      <Screen
        name="HomeBudget"
        component={BudgetScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="BudgetTransaction"
        component={BudgetStackRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
