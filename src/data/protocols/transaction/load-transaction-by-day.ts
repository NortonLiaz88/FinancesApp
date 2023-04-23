import { AmountType } from "../../models/Transaction";
import { Transaction } from "../../../database/model/Transaction";

export interface LoadTransactionByDayRepository {
    loadByDay: (date: Date, type: AmountType) => Promise<Transaction[]>;
}