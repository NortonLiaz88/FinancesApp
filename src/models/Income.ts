import { TransactionDTO } from "./Transaction";

export interface Income extends TransactionDTO {
    category: IncomeCategory
}

export enum IncomeCategory {
    SALARY = 'salary',
    FREELANCE = 'freelance',
    INVESTMENT = 'investment',
    BUSINESS = 'business',
    RENTAL = 'rental',
    INTEREST =  'interest',
    DIVIDEND = 'dividend',
    OTHER = 'other'
}