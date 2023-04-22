import React from 'react';
import {HomeScreen} from '../screens/Home';
import {TransactionScreen} from '../screens/Transaction';
import {createStackNavigator} from '@react-navigation/stack';
import {TransactionStackRoutes} from './app.transaction.stack.routes';

export type RootStackParamList = {
  Home: undefined;
  Transaction: undefined;
  Splash: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export const HomeStackRoutes = (): JSX.Element => {
  return (
    <Navigator >
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
