import React, {Ref} from 'react';

import {
  CommonActions,
  NavigationContainerRef,
  NavigationState,
  StackActions,
} from '@react-navigation/native';

import type {PartialState} from '@react-navigation/routers';

export const navigationRef: Ref<
  NavigationContainerRef<ReactNavigation.RootParamList>
> = React.createRef() as unknown as Ref<
  NavigationContainerRef<ReactNavigation.RootParamList>
>;

export function push(...args: string[]) {
  navigationRef?.current?.dispatch(StackActions.push(...args));
}

export function pop() {
  navigationRef?.current?.dispatch(StackActions.pop());
}

export function reset(state: PartialState<NavigationState> | NavigationState) {
  navigationRef?.current?.dispatch(CommonActions.reset(state));
}

export function canGoBack() {
  return true;
}
