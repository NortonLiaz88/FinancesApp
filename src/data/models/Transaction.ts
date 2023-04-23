import { Currency } from "./Currency";
import { ExpenseCategory } from "./Expense";
import { IncomeCategory } from "./Income";

export interface TransactionDTO {
    id?: string;
    date: Date;
    value: number;
    type: AmountType;
    name: string;
    currency: Currency;
    category: ExpenseCategory | IncomeCategory
}

export enum AmountType {
    INCOME = 'income',
    EXPENSE = 'expense',
}
