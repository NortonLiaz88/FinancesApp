import React from 'react';
import { HomeScreen } from '../screens/Home';
import { TransactionScreen } from '../screens/Transaction';
import {createStackNavigator} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Transaction: undefined;
  Splash: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const HomeStackRoutes = (): JSX.Element => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
