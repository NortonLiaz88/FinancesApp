import { AmountType } from "../../models/Transaction";
import { Transaction } from "../../../database/model/Transaction";

export interface LoadTransactionByMonthRepository {
    loadByMonth: (month: Date, type: AmountType) => Promise<Transaction[]>;
}