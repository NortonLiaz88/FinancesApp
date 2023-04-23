import {Q} from '@nozbe/watermelondb';
import {
  endOfDay,
  endOfMonth,
  startOfDay,
  startOfMonth,
  startOfYear,
  sub,
} from 'date-fns';

import {Transaction} from '../model/Transaction';
import {LoadTransactionByMonthRepository} from '../../data/protocols/transaction/load-transaction-by-month';
import {LoadTransactionByYearRepository} from '../../data/protocols/transaction/load-transaction-by-year';
import {LoadTransactionByWeekRepository} from '../../data/protocols/transaction/load-transaction-by-week';
import {LoadTransactionByDayRepository} from '../../data/protocols/transaction/load-transaction-by-day';
import {database} from '..';
import {AddTransactionRepository} from '../../data/protocols/transaction/add-transaction';
import { AmountType, TransactionDTO } from '../../data/models/Transaction';
import { LoadTransactionsRepository } from '../../data/protocols/transaction/load-transactions';

export class TransactionWatermelonRepository
  implements
    AddTransactionRepository,
    LoadTransactionsRepository,
    LoadTransactionByMonthRepository,
    LoadTransactionByYearRepository,
    LoadTransactionByWeekRepository,
    LoadTransactionByDayRepository
{
  
  async add (currentTransaction: TransactionDTO): Promise<void> {
    const transactionCollection = database.get<Transaction>('transactions');
    await database.write(async () => {
      await transactionCollection.create(transaction => {
          (transaction.transaction_id = currentTransaction.id!),
          (transaction.date = currentTransaction.date.getTime()),
          (transaction.value = currentTransaction.value.toString()),
          (transaction.type = currentTransaction.type),
          (transaction.category = currentTransaction.category),
          (transaction.name = currentTransaction.name),
          (transaction.currency = 'currency');
      });
    });
  };

  async loadAll(type: AmountType): Promise<Transaction[]> {
    const transactionCollection = database.get<Transaction>('transactions');
    const transactions = await transactionCollection
    .query(Q.where('type', Q.eq(type)))
    .fetch();
    return transactions;
  };

  async loadByDay(date: Date, type: AmountType): Promise<Transaction[]> {
    const beginsDay = startOfDay(date).getTime();
    const finalDay = endOfDay(date).getTime();

    const transactionCollection = database.get<Transaction>('transactions');
    const transactions = await transactionCollection
      .query(
        Q.where('date', Q.gte(beginsDay)),
        Q.where('date', Q.lte(finalDay)),
        Q.where('type', Q.eq(type))
      )
      .fetch();
    return transactions;
  }

  async loadByWeek(type: AmountType): Promise<Transaction[]> {
    const currentDate = new Date().getTime();
    const finalDate = sub(currentDate, {days: 7}).getTime();
    const transactionCollection = database.get<Transaction>('transactions');
    const transactions = await transactionCollection
      .query(
        Q.where('date', Q.gte(currentDate)),
        Q.where('date', Q.lte(finalDate)),
        Q.where('type', Q.eq(type))
      )
      .fetch();
    return transactions;
  }

  async loadByMonth(month: Date, type: AmountType): Promise<Transaction[]> {
    const beginMonth = startOfMonth(month).getTime();
    const finalMonth = endOfMonth(month).getTime();


    console.log('BEGIN & END', beginMonth, finalMonth);
    const transactionCollection = database.get<Transaction>('transactions');
    const transactions = await transactionCollection
      .query(
        Q.where('date', Q.gte(beginMonth)),
        Q.where('date', Q.lte(finalMonth)),
        Q.where('type', Q.eq(type))
      )
      .fetch();
    return transactions;
  }

  async loadByYear(year: Date, type: AmountType): Promise<Transaction[]> {
    const beginYear = startOfYear(year).getTime();
    const finalYear = endOfMonth(year).getTime();

    const transactionCollection = database.get<Transaction>('transactions');
    const transactions = await transactionCollection
      .query(
        Q.where('date', Q.gte(beginYear)),
        Q.where('date', Q.lte(finalYear)),
        Q.where('type', Q.eq(type))
      )
      .fetch();
    return transactions;
  }
}
