import { TransactionDTO } from "./Transaction";

export interface Expense extends TransactionDTO {
    category: ExpenseCategory
}

export enum ExpenseCategory {
    CAR = 'car',
    EDUCATION= 'education',
    PHONE= 'phone',
    RENT = 'rent',
    BILL = 'bill',
    FUEL =  'fuel',
    TRAVEL = 'travel',
    GROCERY = 'grocery',
    TAX = 'tax',
    FOOD = 'food',
    HEALTHCARE = 'healthcare',
    OTHER = 'other'
}