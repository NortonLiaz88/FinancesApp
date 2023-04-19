import { Model } from '@nozbe/watermelondb'
import { field,  } from '@nozbe/watermelondb/decorators'
import { ExpenseCategory } from '../../models/Expense';
import { IncomeCategory } from '../../models/Income';
import { AmountType } from '../../models/Transaction';

class Transaction extends Model {
  static table = 'transactions';
 
  @field("transaction_id")
  transaction_id!: string;

  @field("date")
  date!: string;

  @field("value")
  value!: string;

  @field("type")
  type!: string;

  @field("category")
  category!: string;

  @field("name")
  name!: string;

  @field("currency")
  currency!: string;
}

export {Transaction}