import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransactionStackRoutes} from './app.transaction.stack.routes';
import {HomeScreen} from '../screens/Home';

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
        component={TransactionStackRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
