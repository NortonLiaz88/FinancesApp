import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AppTabRoutes } from './app.tab.routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppTabRoutes />
    </NavigationContainer>
  );
};
