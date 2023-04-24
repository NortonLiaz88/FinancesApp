import React, { useEffect } from 'react';
import {TransactionScreen} from '../screens/Transaction';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoryStep} from '../modules/Transaction/components/Stepper/ChooseCategory';
import { CongratulationStep } from '../modules/Transaction/components/Stepper/CongratulationStep';
import { DescriptionStep } from '../modules/Transaction/components/Stepper/Description';
import { BackHandler } from 'react-native';

export type RootStackParamList = {
  BudgetTransactionHome: undefined;
  BudgetCategoryStep: undefined;
  BudgetDescriptionStep: undefined;
  BudgetCongratulationStep: undefined;
  BudgetSplash: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const BudgetStackRoutes = (): JSX.Element => {

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  });

  return (
      <Navigator initialRouteName="BudgetTransactionHome">
        <Screen
          name="BudgetTransactionHome"
          component={TransactionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="BudgetCategoryStep"
          component={CategoryStep}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="BudgetDescriptionStep"
          component={DescriptionStep}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="BudgetCongratulationStep"
          component={CongratulationStep}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
  );
};
