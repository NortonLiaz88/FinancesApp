import React from 'react';
import {ExpenseCategory} from '../../../../models/Expense';
import {CategoryWrapper, PrimaryIcon, SecondaryIcon} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  icon: string;
  category?: ExpenseCategory;
}

export const ExpenseCategoryComponent: React.FC<Props> = ({icon, category}) => {
  const primaryIconExist = PrimaryIcon.hasIcon(icon);

  return (
      <CategoryWrapper>
        {primaryIconExist ? (
          <PrimaryIcon name={icon} />
        ) : (
          <SecondaryIcon name={icon} />
        )}
      </CategoryWrapper>
  );
};
