import { Amount } from "./Amount";

export interface Income extends Amount {
    category: IncomeCategory
}

enum IncomeCategory {
    SALARY = 'salary',
    FREELANCE = 'freelance',
    INVESTMENT = 'investment',
    BUSINESS = 'business',
    RENTAL = 'rental',
    INTEREST =  'interest',
    DIVIDEND = 'dividend',
    OTHER = 'other'
}