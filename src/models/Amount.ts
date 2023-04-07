import { Currency } from "./Currency";

export interface Amount {
    date: Date;
    value: number;
    type: AmountType;
    name: string;
    currency: Currency;
}

export enum AmountType {
    INCOME = 'income',
    EXPENSE = 'expense',
}
