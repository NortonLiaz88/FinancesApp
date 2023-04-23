import { AmountType } from "../../models/Transaction";
import { Transaction } from "../../../database/model/Transaction";

export interface LoadTransactionByWeekRepository {
    loadByWeek: (type: AmountType) => Promise<Transaction[]>;
}