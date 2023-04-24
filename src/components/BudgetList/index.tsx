import React from 'react';
import {BudgetFlatList} from './styles';
import {BudgetCard} from '../BudgetCard';
import {BudgetDTO} from '../../data/models/Budget';
import {ListRenderItemInfo} from 'react-native';

interface Props {
  budgets: BudgetDTO[];
  horizontal?: boolean;
}

export const BudgetList: React.FC<Props> = ({budgets, horizontal}) => {
  return (
    <BudgetFlatList
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      data={budgets}
      renderItem={({item}: ListRenderItemInfo<BudgetDTO>) => (
        <BudgetCard
          key={item?.id}
          icon={item?.category}
          amount={item?.value?.toString()}
          date={item?.date?.toISOString()}
          name={item.name}
        />
      )}
    />
  );
};
