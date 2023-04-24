import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppTabRoutes} from './app.tab.routes';
import {navigationRef} from '../utils/rootNavigation';

export const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppTabRoutes />
    </NavigationContainer>
  );
};
