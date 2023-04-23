import { TransactionDTO } from "../../models/Transaction";

export interface AddTransactionRepository {
    add: (transaction: TransactionDTO) => Promise<void>;
}