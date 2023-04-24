import { Model } from '@nozbe/watermelondb'
import { field,  } from '@nozbe/watermelondb/decorators'
import { ExpenseCategory } from '../../data/models/Expense';
import { IncomeCategory } from '../../data/models/Income';
import { AmountType } from '../../data/models/Transaction';

class Budget extends Model {
  static table = 'budgets';
 
  @field("budget_id")
  budget_id!: string;

  @field("date")
  date!: number;

  @field("value")
  value!: string;

  @field("category")
  category!: string;

  @field("name")
  name!: string;

  @field("currency")
  currency!: string;
}

export {Budget}