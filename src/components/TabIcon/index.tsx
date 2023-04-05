import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {TabContainer} from './styles';

export type TabTypes = {
  active: boolean;
  icon: string;
};

export const TabIcon: React.FC<TabTypes> = ({active, icon}: TabTypes) => {
  return (
    <TabContainer active={active}>
      <Octicons name={icon} size={30} color={'#417d7a'} />
    </TabContainer>
  );
};
