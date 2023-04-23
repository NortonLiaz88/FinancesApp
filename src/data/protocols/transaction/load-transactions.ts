import { AmountType } from '../../models/Transaction';
import {Transaction} from '../../../database/model/Transaction';

export interface LoadTransactionsRepository {
  loadAll: (type: AmountType) => Promise<Transaction[]>;
}
