import { AmountType } from "../../models/Transaction";
import { Transaction } from "../../../database/model/Transaction";

export interface LoadTransactionByYearRepository {
    loadByYear: (year: Date, type: AmountType) => Promise<Transaction[]>;
}