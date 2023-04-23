import { Budget } from '../../../database/model/Budget';

export interface LoadBudgetRepository {
  loadAll: () => Promise<Budget[]>;
}
