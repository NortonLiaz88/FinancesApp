import {ExpenseCategory} from '../data/models/Expense';

export const expenseCategoryToIcon = (expenseCategory: ExpenseCategory) => {
  switch (expenseCategory) {
    case ExpenseCategory.BILL:
      return 'file-text-o';
    case ExpenseCategory.CAR:
      return 'car';
    case ExpenseCategory.EDUCATION:
      return 'graduation-cap';
    case ExpenseCategory.FOOD:
      return 'cutlery';
    case ExpenseCategory.FUEL:
      return 'funnel-dollar';
    case ExpenseCategory.GROCERY:
      return 'shopping-bag';
    case ExpenseCategory.HEALTHCARE:
      return 'briefcase-medical';
    case ExpenseCategory.PHONE:
      return 'phone-alt';
    case ExpenseCategory.RENT:
      return 'clone';
    case ExpenseCategory.TAX:
      return 'ticket-alt';
    case ExpenseCategory.TRAVEL:
      return 'plane';
    default:
      return 'plus';
  }
};
