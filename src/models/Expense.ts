import { Amount } from "./Amount";

export interface Expense extends Amount {
    category: ExpenseCategory
}

enum ExpenseCategory {
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