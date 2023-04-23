import { Budget } from "../../../database/model/Budget";

export interface LoadBudgetByWeekRepository {
    loadByWeek: () => Promise<Budget[]>;
}