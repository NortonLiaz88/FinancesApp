import React, { useEffect } from 'react';
import {TransactionScreen} from '../screens/Transaction';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoryStep} from '../modules/Transaction/components/Stepper/ChooseCategory';
import { CongratulationStep } from '../modules/Transaction/components/Stepper/CongratulationStep';
import { DescriptionStep } from '../modules/Transaction/components/Stepper/Description';
import { BackHandler } from 'react-native';

export type RootStackParamList = {
  TransactionHome: undefined;
  CategoryStep: undefined;
  DescriptionStep: undefined;
  CongratulationStep: undefined;
  Splash: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const TransactionStackRoutes = (): JSX.Element => {

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  });

  return (
      <Navigator initialRouteName="TransactionHome">
        <Screen
          name="TransactionHome"
          component={TransactionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="CategoryStep"
          component={CategoryStep}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="DescriptionStep"
          component={DescriptionStep}
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
  );
};
