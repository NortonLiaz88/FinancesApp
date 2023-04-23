import React from 'react';
import {ExpenseCategory} from '../../../../data/models/Expense';
import {CategoryWrapper, PrimaryIcon, SecondaryIcon} from './styles';
import { TouchableOpacityProps } from 'react-native';
import { IncomeCategory } from '../../../../data/models/Income';

interface Props extends TouchableOpacityProps {
  icon: string;
  category?: ExpenseCategory | IncomeCategory;
}

export const CategoryComponent: React.FC<Props> = ({icon, category, ...rest}) => {
  const primaryIconExist = PrimaryIcon.hasIcon(icon);

  return (
      <CategoryWrapper {...rest}>
        {primaryIconExist ? (
          <PrimaryIcon name={icon} />
        ) : (
          <SecondaryIcon name={icon} />
        )}
      </CategoryWrapper>
  );
};
