import { IncomeCategory } from '../data/models/Income';

export const incomeCategoryToIcon = (incomeCategory: IncomeCategory) => {
  switch (incomeCategory) {
    case IncomeCategory.BUSINESS:
      return 'money-check-alt';
    case IncomeCategory.DIVIDEND:
      return 'sitemap';
    case IncomeCategory.FREELANCE:
      return 'desktop';
    case IncomeCategory.INTEREST:
      return 'divide';
    case IncomeCategory.INVESTMENT:
      return 'bar-chart-o';
    case IncomeCategory.RENTAL:
      return 'clone';
    case IncomeCategory.SALARY:
      return 'suitcase';
    default:
      return 'plus';
  }
};
