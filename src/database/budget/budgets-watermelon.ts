import {Q} from '@nozbe/watermelondb';
import {
  endOfDay,
  endOfMonth,
  startOfDay,
  startOfMonth,
  startOfYear,
  subDays,
} from 'date-fns';

import {BudgetDTO} from '../../data/models/Budget';
import {AddBudgetRepository} from '../../data/protocols/budget/add-budget';
import {LoadBudgetRepository} from '../../data/protocols/budget/load-budget';
import {LoadBudgetByMonthRepository} from '../../data/protocols/budget/load-budget-by-month';
import {LoadBudgetByYearRepository} from '../../data/protocols/budget/load-budget-by-year';
import {LoadBudgetByWeekRepository} from '../../data/protocols/budget/load-budget-by-week';
import {LoadBudgetByDayRepository} from '../../data/protocols/budget/load-budget-by-day';
import {Budget} from '../model/Budget';
import {database} from '..';


export class BudgetWatermelonRepository
  implements
    AddBudgetRepository,
    LoadBudgetRepository,
    LoadBudgetByMonthRepository,
    LoadBudgetByYearRepository,
    LoadBudgetByWeekRepository,
    LoadBudgetByDayRepository
{
  async add(currentBudget: BudgetDTO): Promise<void> {
    const budgetsCollection = database.get<Budget>('budgets');
    await database.write(async () => {
      await budgetsCollection.create(budget => {
        (budget.transaction_id = currentBudget.id!),
          (budget.date = currentBudget.date.getTime()),
          (budget.value = currentBudget.value.toString()),
          (budget.category = currentBudget.category),
          (budget.name = currentBudget.name),
          (budget.currency = 'currency');
      });
    });
  }

  async loadAll(): Promise<Budget[]> {
    const budgetsCollection = database.get<Budget>('budgets');
    const transactions = await budgetsCollection.query().fetch();
    return transactions;
  }

  async loadByDay(date: Date): Promise<Budget[]> {
    const beginsDay = startOfDay(date).getTime();
    const finalDay = endOfDay(date).getTime();

    const budgetsCollection = database.get<Budget>('budgets');
    const transactions = await budgetsCollection
      .query(
        Q.where('date', Q.gte(beginsDay)),
        Q.where('date', Q.lte(finalDay)),
      )
      .fetch();
    return transactions;
  }

  async loadByWeek(): Promise<Budget[]> {
    const currentDate = new Date().getTime();
    const finalDate = subDays(currentDate, 7).getTime();
    const budgetsCollection = database.get<Budget>('budgets');
    const transactions = await budgetsCollection
      .query(
        Q.where('date', Q.gte(finalDate)),
        Q.where('date', Q.lte(currentDate)),
      )
      .fetch();
    return transactions;
  }

  async loadByMonth(month: Date): Promise<Budget[]> {
    const beginMonth = startOfMonth(month).getTime();
    const finalMonth = endOfMonth(month).getTime();

    console.log('BEGIN & END', beginMonth, finalMonth);
    const budgetsCollection = database.get<Budget>('budgets');
    const transactions = await budgetsCollection
      .query(
        Q.where('date', Q.gte(beginMonth)),
        Q.where('date', Q.lte(finalMonth)),
      )
      .fetch();
    return transactions;
  }

  async loadByYear(year: Date): Promise<Budget[]> {
    const beginYear = startOfYear(year).getTime();
    const finalYear = endOfMonth(year).getTime();

    const budgetsCollection = database.get<Budget>('budgets');
    const transactions = await budgetsCollection
      .query(
        Q.where('date', Q.gte(beginYear)),
        Q.where('date', Q.lte(finalYear)),
      )
      .fetch();
    return transactions;
  }
}
