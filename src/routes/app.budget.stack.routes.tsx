import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { BackHandler } from 'react-native';
import { BudgetCategoryStep } from '../modules/Budget/components/Stepper/ChooseCategory';
import { BudgetDescriptionStep } from '../modules/Budget/components/Stepper/Description';
import { BudgetCongratulationStep } from '../modules/Budget/components/Stepper/CongratulationStep';

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
          name="BudgetCategoryStep"
          component={BudgetCategoryStep}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="BudgetDescriptionStep"
          component={BudgetDescriptionStep}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="BudgetCongratulationStep"
          component={BudgetCongratulationStep}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
  );
};
